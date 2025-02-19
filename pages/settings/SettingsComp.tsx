import zustandStore from "@/store/zustandStore";
import { useRouter } from "next/router";
import React, { useState } from "react";  
import Button from "../components/pageComponents/items/Button";

const SettingsComp = () => {
  const setPopup = zustandStore((state) => state.setPopup);
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setAuthType = zustandStore((state) => state.setAuthType);
  const userInfo = zustandStore((state) => state.userInfo);
  const setSpin = zustandStore((state) => state.setSpin);

  const [post, setPost] = useState("");  
  
  const router = useRouter(); 

  return (
    <div
      style={{ width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7 rounded-lg"
    >
      {userInfo && isAuthOn == true && (
        <>
          <div
            style={{ width: "100%", maxWidth: "600px" }}
            className="flex flex-col bg-slate-200 gap-10 p-4"
          >
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h1 className="text-lg">@{userInfo.username}</h1>
              <Button
                second
                onClick={() => {
                  setPopup(true);
                  setAuthType("update");
                }}
                placeholder="Edit"
              />
            </div> 
            <div className="flex gap-5">
              <Button onClick={() => {}} placeholder="Password" second />
              <Button onClick={() => {}} placeholder="Delete" second />
            </div>
          </div>
        </> 
      )}
    </div>
  );
};

export default SettingsComp;
