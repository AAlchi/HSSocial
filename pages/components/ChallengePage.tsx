"use client";
import { useState } from "react";
import Input from "../items/Input";
import Button from "../items/Button";
import CreatePost from "../items/CreatePost";
import PeopleToFollow from "../items/PeopleToFollow";
import Posts from "../items/Posts";
import Challenge from "../items/Challenge";
import Placeholder from "../items/PlaceHolder";

const ChallengePage = () => {
  return (
    <div
      style={{
        marginTop: "56px",
        width: "100%",
        maxWidth: "600px",
      }}
      className="flex justify-center flex-col gap-10"
    >
      <Challenge />
      <Placeholder placeholder="Talk to one of the Hack Club leaders to join the challenge" />
    </div>
  );
};

export default ChallengePage;
