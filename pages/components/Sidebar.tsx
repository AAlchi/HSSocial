import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsCameraVideo } from "react-icons/bs";
import { GiShadowFollower } from "react-icons/gi";
import { MdFollowTheSigns } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const takeTo = (page: string) => {
    navigate(`/${page}`);
  };
  return (
    <>
      <div className="flex flex-col items-start gap-5">
        <ul
          style={{ height: "600px" }}
          className="fixed hidden lg:flex md:flex justify-evenly flex-col"
        >
          <h2 className="text-2xl">HSS</h2>

          <li
            onClick={() => takeTo("")}
            className="text-lg font-bold-10000 flex flex-row items-center gap-1"
          >
            <BiHomeAlt size={30} />{" "}
            <div className="hidden font-bold lg:block">Home</div>
          </li>
          <li
            onClick={() => takeTo("profile")}
            className="text-lg font-bold-10000 flex flex-row items-center gap-1"
          >
            <CgProfile size={30} />
            <div className="hidden font-bold lg:block">Profile</div>
          </li>
          <li
            onClick={() => takeTo("video")}
            className="text-lg font-bold-10000 flex flex-row items-center gap-1"
          >
            <BsCameraVideo size={30} />
            <div className="hidden font-bold lg:block">HS Video</div>
          </li>
          <li
            onClick={() => takeTo("followers")}
            className="text-lg font-bold-10000 flex flex-row items-center gap-1"
          >
            <GiShadowFollower size={30} />
            <div className="hidden font-bold lg:block">Followers</div>
          </li>
          <li
            onClick={() => takeTo("following")}
            className="text-lg font-bold-10000 flex flex-row items-center gap-1"
          >
            <MdFollowTheSigns size={30} />
            <div className="hidden font-bold lg:block">Following</div>
          </li>
          <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
            <AiOutlineArrowLeft size={30} />
            <div className="hidden font-bold lg:block">Log Out</div>
          </li>
        </ul>
      </div>

      <ul
        style={{ bottom: "0", width: "100%" }}
        className="flex md:hidden lg:hidden bg-white fixed justify-evenly p-3"
      >
        <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
          <BiHomeAlt size={30} />{" "}
        </li>
        <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
          <CgProfile size={30} />
        </li>
        <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
          <BsCameraVideo size={30} />
        </li>
        <li className="text-lg font-bold-10000 flex flex-row items-center gap-1">
          <FiSettings size={30} />
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
