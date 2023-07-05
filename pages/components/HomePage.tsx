"use client";
import { useState } from "react";
import Input from "../items/Input";
import Button from "../items/Button";
import CreatePost from "../items/CreatePost";
import PeopleToFollow from "../items/PeopleToFollow";
import Posts from "../items/Posts";

const HomePage = () => {
  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
      <CreatePost />
      <PeopleToFollow />
      <h2 className="text-2xl text-center">Your Feed</h2>
      <Posts />
    </div>
  );
};

export default HomePage;
