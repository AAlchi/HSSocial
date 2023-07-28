import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Images from "./Images";
import zustandStore from "@/store/zustandStore";
import axios from "axios";
import { toast } from "react-hot-toast";

const CreateProfile = () => {
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
  const setDateCreated = zustandStore((state) => state.setDateCreated);
  const dateUpdated = zustandStore((state) => state.dateUpdated);
  const setDateUpdated = zustandStore((state) => state.setDateUpdated);
  const bornOn = zustandStore((state) => state.bornOn);
  const setBornOn = zustandStore((state) => state.setBornOn);

  const [post, setPost] = useState("");

  const url = window.location.href;
  const getUser = url.split("/");

  const finalUser = getUser[getUser.length - 1];

  const [theUsername, setTheUsername] = useState("");
  const [theAccountStatus, setTheAccountStatus] = useState("");
  const [theBornOn, setTheBornOn] = useState("");
  const [theFollowers, setTheFollowers] = useState("");
  const [theFollowing, setTheFollowing] = useState("");
  const [thePosts, setThePosts] = useState("");
  const [theDateCreated, setTheDateCreated] = useState("");
  const [theDateUpdated, setTheDateUpdated] = useState("");
  const [theProfilePicture, setTheProfilePicture] = useState("");
  const [theBannerPicture, setTheBannerPicture] = useState("");

  const followAction = async () => {
    try {
      axios
        .post("/api/follow", {
          userId: mongoID,
          followUsername: theUsername,
        })
        .then((res) => {
          toast.success("You are now following " + theUsername);
        });
    } catch (err) {
      toast.error("Something went wrong, please try again later.");
    }
  };

  const getUserData = async () => {
    try {
      await axios
        .post("/api/getUserData", {
          username: finalUser,
        })
        .then((res) => {
          console.log(res.data);
          setTheUsername(res.data.username);
          setTheAccountStatus(res.data.publicOrPrivate);
          setTheBornOn(res.data.bornOn);
          setTheFollowers(res.data.followers);
          setTheFollowing(res.data.following);
          setTheDateCreated(res.data.dateCreated);
          setTheDateUpdated(res.data.dateUpdated);
        });
    } catch (err) {
      toast.error("There was an error fetching user data");

      setTheUsername("Could Not Fetch");
      setTheAccountStatus("Could Not Fetch");
      setTheBornOn("Could Not Fetch");
      setTheFollowers("Could Not Fetch");
      setTheFollowing("Could Not Fetch");

      setTheDateCreated("Could Not Fetch");
      setTheDateUpdated("Could Not Fetch");
    }
  };

  getUserData();

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        backgroundImage: `url("./tech.jpg")`,
        backgroundSize: "cover",
      }}
      className="flex flex-row bg-slate-200 gap-10"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "rgb(0, 0, 0, 0.6)",
        }}
        className="flex flex-row justify-evenly items-center flex-wrap bg-slate-200 gap-10 p-7"
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl text-white font-bold">{theUsername}</h1>
          <Images
            type="largeProfile"
            imageName="profilePic"
            imageUrl="/tech.jpg"
          />
        </div>
        <div className="flex items-center">
          {finalUser === usernames ? (
            <Button onClick={() => {}} placeholder="Edit" second />
          ) : (
            <Button onClick={() => followAction} placeholder="Follow" first />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
