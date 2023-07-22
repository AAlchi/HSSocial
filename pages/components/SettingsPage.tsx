"use client";
import CreateSettings from "../items/CreateSettings";
import Posts from "../items/Posts";
import Settings from "../items/Settings";

const SettingsPage = () => {
  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
      <CreateSettings />
      <h2 className="text-2xl text-center">Settings</h2>
      <Settings />
    </div>
  );
};

export default SettingsPage;
