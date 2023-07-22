import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import zustandStore from "@/store/zustandStore";

const CreatePost = () => {
  //zustand

  const authOn = zustandStore((state) => state.authOn);
  const setAuthOn = zustandStore((state) => state.setAuthOn);
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);
  const authType = zustandStore((state) => state.authType);
  const setAuthType = zustandStore((state) => state.setAuthType);
  const spin = zustandStore((state) => state.spin);
  const setSpin = zustandStore((state) => state.setSpin);
  const names = zustandStore((state) => state.names);
  const setNames = zustandStore((state) => state.setNames);
  const usernames = zustandStore((state) => state.usernames);
  const setUsernames = zustandStore((state) => state.setUsernames);
  const emails = zustandStore((state) => state.emails);
  const setEmails = zustandStore((state) => state.setEmails);
  const mongoID = zustandStore((state) => state.mongoID);
  const setMongoID = zustandStore((state) => state.setMongoID);
  const profilePicture = zustandStore((state) => state.profilePicture);
  const setProfilePicture = zustandStore((state) => state.setProfilePicture);
  const bannerPicture = zustandStore((state) => state.bannerPicture);
  const setBannerPicture = zustandStore((state) => state.setBannerPicture);
  const publicOrPrivate = zustandStore((state) => state.publicOrPrivate);
  const setPublicOrPrivate = zustandStore((state) => state.setPublicOrPrivate);
  const followers = zustandStore((state) => state.followers);
  const setFollowers = zustandStore((state) => state.setFollowers);
  const following = zustandStore((state) => state.following);
  const setFollowing = zustandStore((state) => state.setFollowing);
  const dateCreated = zustandStore((state) => state.dateCreated);
  const dateUpdated = zustandStore((state) => state.dateUpdated);
  const setDateUpdated = zustandStore((state) => state.setDateUpdated);
  const bornOn = zustandStore((state) => state.bornOn);
  const setBornOn = zustandStore((state) => state.setBornOn);

  const [post, setPost] = useState("");

  return (
    <div
      style={{ height: "200px", width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7"
    >
      {isAuthOn ? (
        <>
          <h1 className="text-2xl">Welcome {names}</h1>
          <div className="flex">
            <Input
              type="text"
              placeholder="Say something..."
              onChange={(e) => setPost(e.target.value)}
              value={post}
              disabled={false}
              sideBySide={true}
            />
            <Button
              first
              onClick={() => console.log("jo")}
              placeholder="Post"
              sideBySide
            />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-xl">Welcome! Sign in to post something:</h1>

          <div className="flex justify-evenly">
            <Button
              first
              onClick={() => {
                setAuthOn(true);
                setAuthType("signin");
              }}
              placeholder="Sign In"
              sideBySide
            />
            <Button
              second
              onClick={() => {
                setAuthOn(true);
                setAuthType("signup");
              }}
              placeholder="Sign Up"
              sideBySide
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CreatePost;
