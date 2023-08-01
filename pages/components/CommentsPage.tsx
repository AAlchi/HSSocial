"use client";
import { useState } from "react";
import Input from "../items/Input";
import Button from "../items/Button";
import CreatePost from "../items/CreatePost";
import PeopleToFollow from "../items/PeopleToFollow";
import Posts from "../items/Posts";
import zustandStore from "@/store/zustandStore";
import Comments from "../items/CreateComments";
import Placeholder from "../items/PlaceHolder";
import CreateComments from "../items/CreateComments";

const CommentPage = () => {
  const authOn = zustandStore((state) => state.authOn);
  const setAuthOn = zustandStore((state) => state.setAuthOn);
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);
  const authType = zustandStore((state) => state.authType);
  const setAuthType = zustandStore((state) => state.setAuthType);

  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
      <CreateComments />
      <Placeholder placeholder="Problems? Contact us." /> <br></br>
      <br></br>
      <h2 className="text-2xl">More posts</h2>
      <Posts />
    </div>
  );
};

export default CommentPage;
