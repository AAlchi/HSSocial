import React, { useState } from "react";
import Input from "./Input";
import Button from "../buttonComponent/Button";
import zustandStore from "@/store/zustandStore";
import Images from "./Images";

const CreateFollow = () => { 

  const [post, setPost] = useState("");

  const url = window.location.href;
  const getUser = url.split("/");

  const finalUser = getUser[getUser.length - 1];

  return (
    <div
      style={{ width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7"
    >
      {isAuthOn ? (
        <>
          <h1 className="text-2xl">
            {finalUser == "following" ? "Following" : "Followers"}
          </h1>
          <ul>
            <li
              className="font-bold flex items-center justify-start gap-5"
              style={{ padding: "10px", backgroundColor: "white" }}
            >
              <Images
                imageName="profile"
                imageUrl="/file.jpg"
                type="littleProfile"
              />
              Name 1
            </li>
            <li
              className="font-bold flex items-center justify-start gap-5"
              style={{ padding: "10px", backgroundColor: "white" }}
            >
              <Images
                imageName="profile"
                imageUrl="/file.jpg"
                type="littleProfile"
              />
              Name 1
            </li>
            <li
              className="font-bold flex items-center justify-start gap-5"
              style={{ padding: "10px", backgroundColor: "white" }}
            >
              <Images
                imageName="profile"
                imageUrl="/file.jpg"
                type="littleProfile"
              />
              Name 1
            </li>
            <li
              className="font-bold flex items-center justify-start gap-5"
              style={{ padding: "10px", backgroundColor: "white" }}
            >
              <Images
                imageName="profile"
                imageUrl="/file.jpg"
                type="littleProfile"
              />
              Name 1
            </li>
          </ul>
        </>
      ) : (
        <>
          <h1 className="text-xl">
            Welcome! Sign in to check
            {finalUser == "following" ? " following" : " followers"}
          </h1>

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

export default CreateFollow;
