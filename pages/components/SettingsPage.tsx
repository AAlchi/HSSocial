"use client";
import CreateProfile from "../items/CreateProfile";
import Posts from "../items/Posts";

const SettingsPage = () => {
  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
      <CreateProfile />
      <h2 className="text-2xl text-center">Settings</h2>
      <Posts />
    </div>
  );
};

export default SettingsPage;
