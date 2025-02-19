import zustandStore from "@/store/zustandStore";
import Button from "../components/pageComponents/items/Button";
import CreateSettings from "../components/pageComponents/items/CreateSettings";
import SettingsComp from "./SettingsComp";


const SettingsPage = () => { 
  const userInfo = zustandStore((state) => state.userInfo);
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);
  const setAuthType = zustandStore((state) => state.setAuthType);

  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className={`flex ${
        isAuthOn ? "" : "bg-slate-200 p-10"
      } justify-center flex-col  gap-10`}
    > 
      <CreateSettings usernames={userInfo ? userInfo.username : "N/A"}/>
      <h2 className="text-2xl text-center">Settings</h2>
      <SettingsComp />
    </div>
  );
};

export default SettingsPage;
