"use client";
import React, { useState, useEffect } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsCameraVideo } from "react-icons/bs";
import { GiShadowFollower } from "react-icons/gi";
import { MdFollowTheSigns } from "react-icons/md";
import { AiOutlineArrowLeft, AiOutlineTrophy } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Popup from "../items/Popup";
import zustandStore from "@/store/zustandStore";
import { toast } from "react-hot-toast";
import Spinner from "../items/Spinner";

const Sidebar = () => {
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

  useEffect(() => {
    console.log(
      "Hold Up! This is for developers only, so be careful while using this console."
    );
  });
  const checkAuth = async () => {
    try {
      await axios
        .get("/api/server", {
          withCredentials: true,
        })
        .then((res) => {
          setIsAuthOn(true);
          setNames(res.data.name);
          setEmails(res.data.email);
          setUsernames(res.data.username);
          setMongoID(res.data.mongoID);
          setProfilePicture(res.data.profilePicture);
          setBannerPicture(res.data.bannerPicture);
          setBornOn(res.data.bornOn);
          setPublicOrPrivate(res.data.publicOrPrivate);
          setDateCreated(res.data.dateCreated);
          setDateUpdated(res.data.dateUpdated);
          setFollowers(res.data.followers);
          setFollowing(res.data.following);
        });
    } catch (error) {
      setIsAuthOn(false);
    }
  };

  checkAuth();
  //zustand

  const navigate = useNavigate();

  const handleLogOut = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setSpin(true);
    navigate("/");
    setSpin(false);
  };
  const takeTo = (page: string) => {
    const props = {
      test: "Hello",
    };

    navigate(`/${page}`, { state: props });
  };
  return (
    <>
      <>
        <div className="flex flex-col items-start gap-5">
          <ul
            style={{ height: "600px" }}
            className="fixed hidden lg:flex md:flex justify-evenly flex-col"
          >
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => takeTo("")}
              className="text-2xl"
            >
              HSS
            </h2>

            <li
              onClick={() => (isAuthOn ? takeTo("profile") : setAuthOn(true))}
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <CgProfile size={30} />
              <div className="hidden font-bold lg:block">Profile</div>
            </li>
            <li
              onClick={() => takeTo("challenge")}
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <AiOutlineTrophy size={30} />
              <div className="hidden font-bold lg:block">Challenge</div>
            </li>
            <li
              onClick={() => (isAuthOn ? takeTo("followers") : setAuthOn(true))}
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <GiShadowFollower size={30} />
              <div className="hidden font-bold lg:block">Followers</div>
            </li>
            <li
              onClick={() => (isAuthOn ? takeTo("following") : setAuthOn(true))}
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <MdFollowTheSigns size={30} />
              <div className="hidden font-bold lg:block">Following</div>
            </li>
            <li
              onClick={() => (isAuthOn ? takeTo("settings") : setAuthOn(true))}
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <FiSettings size={30} />
              <div className="hidden font-bold lg:block">Settings</div>
            </li>
            {isAuthOn && (
              <li
                onClick={handleLogOut}
                style={{ cursor: "pointer" }}
                className="text-lg font-bold-10000 flex flex-row items-center gap-1"
              >
                <AiOutlineArrowLeft size={30} />
                <div className="hidden font-bold lg:block">Log Out</div>
              </li>
            )}
          </ul>
        </div>

        <ul
          style={{ bottom: "0", width: "100%" }}
          className="flex md:hidden lg:hidden bg-white fixed justify-evenly p-3"
        >
          <li
            onClick={() => takeTo("")}
            style={{ cursor: "pointer" }}
            className="text-lg font-bold-10000 flex flex-row items-center gap-1"
          >
            <BiHomeAlt size={30} />{" "}
          </li>
          <li
            onClick={() => takeTo("profile")}
            style={{ cursor: "pointer" }}
            className="text-lg font-bold-10000 flex flex-row items-center gap-1"
          >
            <CgProfile size={30} />
          </li>
          <li
            onClick={() => takeTo("challenge")}
            style={{ cursor: "pointer" }}
            className="text-lg font-bold-10000 flex flex-row items-center gap-1"
          >
            <AiOutlineTrophy size={30} />
          </li>
          <li
            onClick={() => takeTo("settings")}
            style={{ cursor: "pointer" }}
            className="text-lg font-bold-10000 flex flex-row items-center gap-1"
          >
            <FiSettings size={30} />
          </li>
        </ul>
      </>
      {authOn && <Popup open={true} />}
    </>
  );
};

export default Sidebar;
