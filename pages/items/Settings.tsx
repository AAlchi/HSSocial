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

  const dateCreatedFormat: string = dateCreated;
  const dateCreatedFormatTwo: Date = new Date(dateCreatedFormat);

  const dateUpdatedFormat: string = dateUpdated;
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
            className="flex flex-col bg-slate-200 gap-10 p-7"
          >
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h1 className="text-lg">@{usernames}</h1>
              <Button
                second
                onClick={() => {
                  setAuthOn(true);
                  setAuthType("update");
                }}
                placeholder="Edit"
              />
            </div>
            <div>
              <ul>
                <li>Account - {publicOrPrivate}</li>
                <li>Born on - {bornOn}</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Followers - {followers}</li>
                <li>Following - {following}</li>
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
                  setAuthOn(true);
                  setAuthType("signin");
                }}
                placeholder="Sign In"
                second
              />
              <Button
                onClick={() => {
                  setAuthOn(true);
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
