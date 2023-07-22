"use client";
import zustandStore from "@/store/zustandStore";
import Button from "../items/Button";
import CreateProfile from "../items/CreateProfile";
import Posts from "../items/Posts";

const ProfilePage = () => {
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
      className="flex justify-center flex-col gap-10"
    >
      <CreateProfile />

      <div
        style={{ width: "100%", maxWidth: "600px" }}
        className="flex flex-col bg-slate-200 gap-10 p-7"
      >
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h1 className="text-lg">@{usernames}</h1>
          <Button second onClick={() => {}} placeholder="Edit" />
        </div>
        <div className="flex gap-5 w-full justify-start items-start flex-wrap">
          <ul>
            <li>Account - {publicOrPrivate}</li>
            <li>Born on - {bornOn}</li>
          </ul>
          <ul>
            <li>Followers - {followers}</li>
            <li>Following - {following}</li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl text-center">Posts they created</h2>
      <Posts />
    </div>
  );
};

export default ProfilePage;
