import React, { useRef, useState } from "react";
import Input from "../pageComponents/Input";
import Button from "../buttonComponent/Button";
import zustandStore from "@/store/zustandStore";
import axios from "axios";
import toast from "react-hot-toast";
import supabase from "@/pages/api/dbConfigure/supabase";
import { useSession } from "next-auth/react";

const CreatePost = () => {
  //zustand    

  const { data: session, status } = useSession(); 

  if (status === "loading") {
    return <div>Loading...</div>;
  }
 
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<any>(null);
  const imageRef = useRef(null); 

  const handleSubmit = async () => {
    const loading = toast.loading("Posting...")    

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

      await axios.post("/api/createPost", {
        username: session?.user.username,
        message: message,
        imageUrl: imageUrl
      }).then(res => {
        toast.success("Post uploaded")
      }) 
    } catch (err) { 
      console.log("Post not uploaded" + err)
    }
    toast.remove(loading)

  };

  return (
    <div
      style={{ width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7 rounded-xl"
    >
      <>
        <h1 className="text-2xl">Welcome, {session?.user.username}</h1>
        <div className="flex">
          <Input
            type="text"
            placeholder="Say something..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            disabled={false}
            sideBySide={true}
          /> 
          <label
            className={`bg-slate-100 text-[red] rounded-lg font-bold px-5 py-2 cursor-pointer ml-2`}
            htmlFor="imageId">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
          </label>
          <input type="file" id="imageId" hidden accept="image/*" onChange={(e) => {
            setImage(e?.target?.files?.[0]);
          }} ref={imageRef}/>
        </div>
      
        <Button
            first
            onClick={handleSubmit}
            placeholder="Post"
            sideBySide
          />
      </>
    </div>
  );
};

export default CreatePost;
