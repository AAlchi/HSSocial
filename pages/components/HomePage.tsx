"use client";
import { useState } from "react";
import Input from "../items/Input";
import Button from "../items/Button";
import CreatePost from "../items/CreatePost";
import PeopleToFollow from "../items/PeopleToFollow";

const HomePage = () => {
  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
      <CreatePost />
      <PeopleToFollow />
    </div>
  );
};

export default HomePage;
