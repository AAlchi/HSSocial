"use client";
import zustandStore from "@/store/zustandStore";
import CreateSettings from "../items/CreateSettings";
import Posts from "../items/Posts";
import Settings from "../items/Settings";
import Button from "../items/Button";
import Placeholder from "../items/PlaceHolder";
import PeopleToFollow from "../items/PeopleToFollow";

const SettingsPage = () => {
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

  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className={`flex ${
        isAuthOn ? "" : "bg-slate-200 p-10"
      } justify-center flex-col  gap-10`}
    >
      {isAuthOn == true ? (
        <>
          <CreateSettings />
          <h2 className="text-2xl text-center">Settings</h2>
          <Settings />
        </>
      ) : (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <h1 className="text-xl">Welcome! Sign in to go to settings</h1>

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
          </div>
          <Settings />
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
