"use client";
import { useEffect } from "react";
import Sidebar from "../Sidebar";
import HomePage from "../HomePage";
import Popup from "../../items/Popup";
import ChallengePage from "../ChallengePage";

const Challenge = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex justify-center">
      <div
        style={{ width: "100%", marginBottom: "50px" }}
        className="p-5 flex justify-evenly md:gap-10 lg:gap-10"
      >
        <Sidebar />
        <ChallengePage />
      </div>
    </div>
  );
};

export default Challenge;
