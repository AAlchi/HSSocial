import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Images from "./Images";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import zustandStore from "@/store/zustandStore";

const Posts = () => {
  const authOn = zustandStore((state) => state.authOn);
  const setAuthOn = zustandStore((state) => state.setAuthOn);
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);
  const authType = zustandStore((state) => state.authType);
  const setAuthType = zustandStore((state) => state.setAuthType);
  const spin = zustandStore((state) => state.spin);
  const setSpin = zustandStore((state) => state.setSpin);

  const [post, setPost] = useState("");

  const navigate = useNavigate();

  const handleLogOut = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setSpin(true);
    navigate("/");
    setSpin(false);
  };

  return (
    <>
      <div
        style={{ width: "100%", maxWidth: "600px" }}
        className="flex flex-col bg-slate-200 gap-10 p-7"
      >
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h1 className="text-lg">@JohnSmith</h1>
          <Button second onClick={() => {}} placeholder="Edit" />
        </div>
        <div>
          <ul>
            <li>Account - Private</li>
            <li>Born on - July 2003</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Followers - 42M</li>
            <li>Following - 124</li>
          </ul>
        </div>
        <div>
          <Button onClick={handleLogOut} first placeholder="Log Out" />
        </div>
        <div className="flex gap-5">
          <Button onClick={() => {}} placeholder="Password" second />
          <Button onClick={() => {}} placeholder="Delete" second />
        </div>
      </div>
    </>
  );
};

export default Posts;
