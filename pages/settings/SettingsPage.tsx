import zustandStore from "@/store/zustandStore";
import Button from "../components/buttonComponent/Button";
import CreateSettings from "./CreateSettings";
import SettingsComp from "./SettingsComp";
import { useSession } from "next-auth/react";


const SettingsPage = () => {  
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  
  return (
    <div
      style={{ marginTop: "56px", maxWidth: "600px" }}
      className={`flex bg-white justify-center flex-col w-full gap-10 rounded-lg`}
    > 
      <CreateSettings profilePicture={session?.user.image || ""} usernames={session ? session.user.username : "N/A"}/>
      <h2 className="text-2xl text-center">Settings</h2>
      <SettingsComp />
    </div>
  );
};

export default SettingsPage;
