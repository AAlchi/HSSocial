import { useSession } from "next-auth/react";
import Sidebar from "../components/Sidebar/Sidebar";
import SettingsPage from "./SettingsPage";
import Placeholder from "../components/pageComponents/PlaceHolder";


const Settings = () => {

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <div
        style={{ width: "100%", marginBottom: "50px" }}
        className="p-5 flex justify-evenly md:gap-10 lg:gap-10"
      >
        <Sidebar />
        {session ? (
          <SettingsPage />
        ) : (
          <Placeholder placeholder="Please sign in to view your settings" />
        )}
      </div>
    </div>
  );
};

export default Settings;
