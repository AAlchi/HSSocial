"use client";
import Button from "../items/Button";
import CreateProfile from "../items/CreateProfile";
import Posts from "../items/Posts";

const ProfilePage = () => {
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
          <h1 className="text-lg">@JohnSmith</h1>
          <Button second onClick={() => {}} placeholder="Edit" />
        </div>
        <div className="flex gap-5 w-full justify-start items-start flex-wrap">
          <ul>
            <li>Account - Private</li>
            <li>Born on - July 2003</li>
          </ul>
          <ul>
            <li>Followers - 42M</li>
            <li>Following - 124</li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl text-center">Their Posts</h2>
      <Posts />
    </div>
  );
};

export default ProfilePage;
