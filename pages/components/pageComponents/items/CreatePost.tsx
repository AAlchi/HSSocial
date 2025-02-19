import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import zustandStore from "@/store/zustandStore";

const CreatePost = () => {
  //zustand

  const setAuthOn = zustandStore((state) => state.setIsAuthOn);
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setAuthType = zustandStore((state) => state.setAuthType);
  const userInfo = zustandStore((state) => state.userInfo);

  const [post, setPost] = useState("");

  return (
    <div
      style={{ height: "200px", width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7 rounded-xl"
    >
      <>
        <h1 className="text-2xl">Welcome, {userInfo && userInfo.name}</h1>
        <div className="flex">
          <Input
            type="text"
            placeholder="Say something..."
            onChange={(e) => setPost(e.target.value)}
            value={post}
            disabled={false}
            sideBySide={true}
          />
          <Button
            first
            onClick={() => console.log("jo")}
            placeholder="Post"
            sideBySide
          />
        </div>
      </>
    </div>
  );
};

export default CreatePost;
