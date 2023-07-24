import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import zustandStore from "@/store/zustandStore";
import Images from "./Images";

const CreateFollow = () => {
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

  const url = window.location.href;
  const getUser = url.split("/");

  const finalUser = getUser[getUser.length - 1];

  return (
    <div
      style={{ width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7"
    >
      {isAuthOn ? (
        <>
          <h1 className="text-2xl">
            {finalUser == "following" ? "Following" : "Followers"}
          </h1>
          <ul>
            <li
              className="font-bold flex items-center justify-start gap-5"
              style={{ padding: "10px", backgroundColor: "white" }}
            >
              <Images
                imageName="profile"
                imageUrl="/file.jpg"
                type="littleProfile"
              />
              Name 1
            </li>
            <li
              className="font-bold flex items-center justify-start gap-5"
              style={{ padding: "10px", backgroundColor: "white" }}
            >
              <Images
                imageName="profile"
                imageUrl="/file.jpg"
                type="littleProfile"
              />
              Name 1
            </li>
            <li
              className="font-bold flex items-center justify-start gap-5"
              style={{ padding: "10px", backgroundColor: "white" }}
            >
              <Images
                imageName="profile"
                imageUrl="/file.jpg"
                type="littleProfile"
              />
              Name 1
            </li>
            <li
              className="font-bold flex items-center justify-start gap-5"
              style={{ padding: "10px", backgroundColor: "white" }}
            >
              <Images
                imageName="profile"
                imageUrl="/file.jpg"
                type="littleProfile"
              />
              Name 1
            </li>
          </ul>
        </>
      ) : (
        <>
          <h1 className="text-xl">
            Welcome! Sign in to check
            {finalUser == "following" ? " following" : " followers"}
          </h1>

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

export default CreateFollow;
