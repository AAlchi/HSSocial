import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Images from "./Images";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import zustandStore from "@/store/zustandStore";

const Posts = () => {
  const setPopup = zustandStore((state) => state.setPopup);
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setAuthType = zustandStore((state) => state.setAuthType);
  const userInfo = zustandStore((state) => state.userInfo);
  const setSpin = zustandStore((state) => state.setSpin);

  const [post, setPost] = useState("");

  const dateCreatedFormat: string = userInfo.dateCreated;
  const dateCreatedFormatTwo: Date = new Date(dateCreatedFormat);

  const dateUpdatedFormat: string = userInfo.dateUpdated;
  const dateUpdatedFormatTwo: Date = new Date(dateUpdatedFormat);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const dateCreatedFormatThree: string =
    dateCreatedFormatTwo.toLocaleDateString("en-US", options);

  const dateUpdatedFormatThree: string =
    dateUpdatedFormatTwo.toLocaleDateString("en-US", options);

  const navigate = useNavigate();

  const handleLogOut = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setSpin(true);
    navigate("/");
    setSpin(false);
  };

  return (
    <div
      style={{ width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7"
    >
      {isAuthOn == true ? (
        <>
          <div
            style={{ width: "100%", maxWidth: "600px" }}
            className="flex flex-col bg-slate-200 gap-10 p-4"
          >
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h1 className="text-lg">@{userInfo.username}</h1>
              <Button
                second
                onClick={() => {
                  setPopup(true);
                  setAuthType("update");
                }}
                placeholder="Edit"
              />
            </div>
            <div>
              <ul>
                <li>Account - {userInfo.publicOrPrivate}</li>
                <li>Born on - {userInfo.bornOn}</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Followers - {userInfo.followers}</li>
                <li>Following - {userInfo.following}</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Created At - {dateCreatedFormatThree}</li>
                <li>Updated At - {dateUpdatedFormatThree}</li>
              </ul>
            </div>
            <div>
              <Button onClick={handleLogOut} first placeholder="Log Out" />
            </div>
            <div className="flex gap-5">
              <Button onClick={() => {}} placeholder="Password" second />
              <Button onClick={() => {}} placeholder="Delete" second />
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{ width: "100%", maxWidth: "600px" }}
            className="flex flex-col bg-slate-200 gap-10 p-7"
          >
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h1 className="text-lg">To See Data Like:</h1>
            </div>
            <div>
              <ul>
                <li>- Account Status</li>
                <li>- Birthday</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>- Followers count</li>
                <li>- Following count</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>- Created At</li>
                <li>- Updated At</li>
              </ul>
            </div>

            <div className="flex gap-5">
              <Button
                onClick={() => {
                  setPopup(true);
                  setAuthType("signin");
                }}
                placeholder="Sign In"
                second
              />
              <Button
                onClick={() => {
                  setPopup(true);
                  setAuthType("signup");
                }}
                placeholder="Sign Up"
                second
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
