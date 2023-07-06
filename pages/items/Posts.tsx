import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Image from "./Image";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";

const Posts = () => {
  const [post, setPost] = useState("");

  return (
    <div
      style={{ width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7"
    >
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <h1 className="text-lg">@JohnSmith</h1>
        <h1 className="text-sm">Jan 4 2023</h1>
      </div>

      <Image imageName="text" imageUrl="./tech.jpg" type="post" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa,
        atque impedit necessitatibus voluptate facilis, eveniet tenetur,
        pariatur corporis mollitia delectus commodi explicabo error illum nam
        cupiditate iure architecto laboriosam magnam vel? Iure qui tempore in
        hic, voluptatem, dolorum unde ducimus, id nihil illum nesciunt nostrum
        porro fuga. Quaerat, sed.
      </p>
      <div className="flex gap-5">
        <div className="flex gap-1 cursor-pointer" title="Like">
          <AiOutlineLike />
          <p className="text-xs">200</p>
        </div>
        <div className="flex gap-1 cursor-pointer" title="Dislike">
          <AiOutlineDislike />
          <p className="text-xs">200</p>
        </div>
        <div className="flex gap-1 cursor-pointer" title="Comment">
          <BiCommentDetail />
          <p className="text-xs">200</p>
        </div>
        <div className="flex gap-1 cursor-pointer" title="Report">
          <MdReportProblem />
        </div>
      </div>
    </div>
  );
};

export default Posts;
