import React, { useState } from "react";
import Input from "../components/pageComponents/Input";
import Button from "../components/buttonComponent/Button";
import Images from "../components/pageComponents/Images";
import zustandStore from "@/store/zustandStore";
import { useSession } from "next-auth/react";

interface CreateSettingsInterface {
  usernames: String;
  profilePicture: string;
}

const CreateSettings: React.FC<CreateSettingsInterface> = ({
  usernames,
  profilePicture
}) => {  

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        backgroundImage: `url(${profilePicture})`,
        backgroundSize: "cover",
      }}
      className="flex flex-row bg-slate-200 gap-10 mb-10 rounded-lg"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "rgb(0, 0, 0, 0.6)",
        }}
        className="flex flex-row justify-evenly items-center flex-wrap bg-slate-200 gap-10 p-7 rounded-lg"
      >
        <div className="flex flex-col gap-5 rounded-lg">
          <img
          width="170"
          height="170"
          src={profilePicture}
          alt={profilePicture}
          className="rounded-2xl w-[170px] h-[170px] cursor-pointer"
          style={{ 
            objectFit: "cover", 
            backgroundColor: "rgb(5, 5, 5, 0.3)", 
            border: "3px solid white",
            transform: "translateY(50%)"
          }}
        />
        </div> 
      </div>
    </div>
  );
};

export default CreateSettings;
