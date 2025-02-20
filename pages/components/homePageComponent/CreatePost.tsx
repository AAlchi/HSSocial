import React, { useState } from "react";
import Input from "../pageComponents/Input";
import Button from "../buttonComponent/Button";
import zustandStore from "@/store/zustandStore";
import axios from "axios";
import toast from "react-hot-toast";

const CreatePost = () => {
  //zustand 
  const userInfo = zustandStore((state) => state.userInfo); 
  const setSpin = zustandStore((state) => state.setSpin); 
 
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    setSpin(true)    

    try {
      await axios.post("/api/createPost", {
        username: userInfo?.username,
        message: message
      }).then(res => {
        setSpin(false)
        toast.success("Post uploaded")
      }) 
    } catch (err) {
      setSpin(false)
      toast.error("Post not uploaded")
    }
  };


  return (
    <div
      style={{ width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7 rounded-xl"
    >
      <>
        <h1 className="text-2xl">Welcome, {userInfo && userInfo.name}</h1>
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
          <input type="file" id="imageId" hidden accept="image/*" onChange={handleFileChange} />
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
