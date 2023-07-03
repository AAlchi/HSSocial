import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const PeopleToFollow = () => {
  const [post, setPost] = useState("");

  return (
    <div>
      <div
        style={{ height: "200px" }}
        className="flex flex-col bg-slate-200 gap-10 p-10"
      >
        <h1 className="text-2xl">Make a post</h1>
        <div className="flex">
          <Input
            type="text"
            placeholder=""
            onChange={(e) => setPost(e.target.value)}
            value={post}
            disabled={false}
          />
          <Button first onClick={() => console.log("jo")} placeholder="Post" />
        </div>
      </div>
    </div>
  );
};

export default PeopleToFollow;
