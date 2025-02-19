import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Images from "./Images";
import zustandStore from "@/store/zustandStore";

interface CreateSettingsInterface {
  usernames: String;
}

const CreateSettings: React.FC<CreateSettingsInterface> = ({
  usernames
}) => { 

  const [post, setPost] = useState("");

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        backgroundImage: `url("./tech.jpg")`,
        backgroundSize: "cover",
      }}
      className="flex flex-row bg-slate-200 gap-10"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "rgb(0, 0, 0, 0.6)",
        }}
        className="flex flex-row justify-evenly items-center flex-wrap bg-slate-200 gap-10 p-7"
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl text-white font-bold">{usernames}</h1>
          <Images
            type="largeProfile"
            imageName="profilePic"
            imageUrl="/tech.jpg"
            onClick={() => {}}
          />
        </div>
        <div className="flex items-center">
          <Button onClick={() => {}} placeholder="Edit" first />
        </div>
      </div>
    </div>
  );
};

export default CreateSettings;
