import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import zustandStore from "@/store/zustandStore";

const CreatePost = () => {
  //zustand

  const authOn = zustandStore((state) => state.authOn);
  const setAuthOn = zustandStore((state) => state.setAuthOn);
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);
  const authType = zustandStore((state) => state.authType);
  const setAuthType = zustandStore((state) => state.setAuthType);

  const [post, setPost] = useState("");

  return (
    <div
      style={{ height: "200px", width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7"
    >
      {isAuthOn ? (
        <>
          <h1 className="text-2xl">Welcome Test!</h1>
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
      ) : (
        <>
          <h1 className="text-xl">Welcome! Sign in to post something:</h1>

          <div className="flex justify-evenly">
            <Button
              first
              onClick={() => {
                setAuthOn(true);
                setAuthType("signin");
              }}
              placeholder="Sign In"
              sideBySide
            />
            <Button
              second
              onClick={() => {
                setAuthOn(true);
                setAuthType("signup");
              }}
              placeholder="Sign Up"
              sideBySide
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CreatePost;
