import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Images from "./Images";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";

interface PlaceholderInterface {
  placeholder: string;
}

const Placeholder: React.FC<PlaceholderInterface> = ({ placeholder }) => {
  const [post, setPost] = useState("");

  return (
    <div
      style={{ width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7 rounded-lg"
    >
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-lg">{placeholder}</h1>
      </div>
    </div>
  );
};

export default Placeholder;
