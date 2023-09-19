"use client";
import React, { useEffect } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GiShadowFollower } from "react-icons/gi";
import { MdFollowTheSigns } from "react-icons/md";
import { AiOutlineArrowLeft, AiOutlineTrophy } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import zustandStore from "@/store/zustandStore";

const Sidebar = () => {
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setPopup = zustandStore((state) => state.setPopup);
  const setSpin = zustandStore((state) => state.setSpin);
  const userInfo = zustandStore((state) => state.userInfo);

  const navigate = useNavigate();

  //zustand

  const handleLogOut = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setSpin(true);
    navigate("/");
    setSpin(false);
  };
  const takeTo = (page: string) => {
    navigate(`/${page}`);
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
              onClick={() =>
                isAuthOn
                  ? takeTo(`profile/${userInfo.username}`)
                  : setPopup(true)
              }
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
              onClick={() => (isAuthOn ? takeTo("followers") : setPopup(true))}
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <GiShadowFollower size={30} />
              <div className="hidden font-bold lg:block">Followers</div>
            </li>
            <li
              onClick={() => (isAuthOn ? takeTo("following") : setPopup(true))}
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <MdFollowTheSigns size={30} />
              <div className="hidden font-bold lg:block">Following</div>
            </li>
            <li
              onClick={() => (isAuthOn ? takeTo("settings") : setPopup(true))}
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
            onClick={() => takeTo(`profile/${usernames}`)}
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
    </>
  );
};

export default Sidebar;
