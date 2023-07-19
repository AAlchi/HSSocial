"use client";
import { useState } from "react";
import Sidebar from "../Sidebar";
import HomePage from "../HomePage";
import Popup from "../../items/Popup";
import Input from "@/pages/items/Input";
import Button from "@/pages/items/Button";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const [post, setPost] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-full items-center justify-center">
      <div
        style={{
          marginTop: "5%",
          width: "100%",
          maxWidth: "600px",
        }}
        className="flex flex-col bg-slate-200 gap-10 p-10"
      >
        <h1 className="text-2xl">
          You have come across a page we have not been to yet, congrats!
        </h1>
        <div className="flex">
          <Button first onClick={() => navigate("/")} placeholder="Go Back" />
          <Button second onClick={() => console.log("ok")} placeholder="Stay" />
        </div>
      </div>
    </div>
  );
};

export default Error;
