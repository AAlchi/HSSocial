import Sidebar from "../components/Sidebar/Sidebar";
import SettingsPage from "./SettingsPage";

 
const Settings = () => {
  return (
    <div className="flex justify-center">
      <div
        style={{ width: "100%", marginBottom: "50px" }}
        className="p-5 flex justify-evenly md:gap-10 lg:gap-10"
      >
        <Sidebar />
        <SettingsPage /> 
      </div>
    </div>
  );
};

export default Settings;
