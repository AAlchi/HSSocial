import React, { useState, useEffect, useRef } from "react"; 
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import Input from "../components/pageComponents/Input";
import Button from "../components/buttonComponent/Button";
import supabase from "../api/dbConfigure/supabase";

interface ProfilePopupInterface {
  isOpen: boolean;
  onClose: () => void;
}
const ProfilePopup: React.FC<ProfilePopupInterface> = ({
  isOpen,
  onClose
}) => {  
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [image, setImage] = useState<any>(null);
  const imageRef = useRef(null); 
  const { data: session, update } = useSession();   
  const router = useRouter()

  const handleSubmit = async () => {
    const loading = toast.loading("Updating...")    

    try {
      let imageUrl = null; 

      if (image) {
        const filename = Date.now();

        const { data, error } = await supabase.storage
          .from("hssocial")
          .upload(
            `${filename}_${session?.user.username}.jpg`,
            image
          );

        imageUrl = supabase.storage.from("hssocial").getPublicUrl(data!.path).data.publicUrl;
 
      }
      

      await axios.post("/api/updateProfilePic", {
        username: session?.user.username, 
        imageUrl: imageUrl
      }).then(res => {
        toast.success("Picture updated")
      }) 

    } catch (err) { 
      console.log("An error happened" + err)
    }
    toast.remove(loading)
    onClose()
    router.reload()
  };

  return (
    <>
      <div
        style={{ zIndex: "999", backgroundColor: "rgb(0, 0, 0, 0.5)" }}
        className="fixed top-0 flex h-screen w-full items-center justify-center"
      >
        <div className="flex flex-col gap-4 bg-slate-100 border w-11/12 max-w-[400px] justify-center p-5 rounded-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-xl py-2 font-bold">HSSocial | Update Profile Pic</h2>
            <span onClick={() => onClose()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
          <label
            className={`bg-slate-100 text-[red] rounded-lg font-bold py-2 cursor-pointer ml-2 flex items-center gap-2`}
            htmlFor="imageId">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
            Upload a picture
          </label>
          <input type="file" id="imageId" hidden accept="image/*" onChange={(e) => {
            setImage(e?.target?.files?.[0]);
            setIsButtonDisabled(false)
          }} ref={imageRef}/>

          <Button
            onClick={handleSubmit}
            placeholder={"Update"}
            disabled={isButtonDisabled}
            first
          /> 
        </div>
      </div>
    </>
  );
};

export default ProfilePopup;
