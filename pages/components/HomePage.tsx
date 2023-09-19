"use client";
import { useState } from "react";
import Input from "../items/Input";
import Button from "../items/Button";
import CreatePost from "../items/CreatePost";
import PeopleToFollow from "../items/PeopleToFollow";
import Posts from "../items/Posts";
import zustandStore from "@/store/zustandStore";

const HomePage = () => {
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);
  const popup = zustandStore((state) => state.popup);
  const setPopup = zustandStore((state) => state.setPopup);
  const setAuthType = zustandStore((state) => state.setAuthType);

  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
      {isAuthOn ? (
        <>
          <CreatePost />
          <PeopleToFollow />
          <h2 className="text-2xl text-center">
            {isAuthOn ? "Your Feed" : "Feed"}
          </h2>
          <Posts />
        </>
      ) : (
        <>
          <div
            style={{ height: "200px", width: "100%", maxWidth: "600px" }}
            className="flex flex-col bg-slate-200 gap-10 p-7"
          >
            {" "}
            <h1 className="text-xl">Welcome! Sign in to post something:</h1>
            <div className="flex justify-evenly">
              <Button
                first
                onClick={() => {
                  setPopup(true);
                  setAuthType("signin");
                }}
                placeholder="Sign In"
                sideBySide
              />
              <Button
                second
                onClick={() => {
                  setPopup(true);
                  setAuthType("signup");
                }}
                placeholder="Sign Up"
                sideBySide
              />
            </div>
          </div>
          <h2 className="text-2xl text-center">Feed</h2>
          <Posts />
        </>
      )}
    </div>
  );
};

export default HomePage;
