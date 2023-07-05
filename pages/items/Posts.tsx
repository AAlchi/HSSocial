import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Image from "./Image";

const Posts = () => {
  const [post, setPost] = useState("");

  return (
    <div
      style={{ width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-10"
    >
      <div className="flex justify-between">
        <h1 className="text-lg">@JohnSmith</h1>
        <h1 className="text-lg">Jan 4 2023</h1>
      </div>

      <Image imageName="text" imageUrl="./tech.jpg" type="post" />
    </div>
  );
};

export default Posts;
