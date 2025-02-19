import { useEffect } from "react"; 
import Sidebar from "../components/Sidebar/Sidebar";
import ChallengePage from "./ChallengePage";

const Challenge = () => { 
  return (
    <div className="flex justify-center">
      <div
        style={{ width: "100%", marginBottom: "50px" }}
        className="p-5 flex justify-evenly md:gap-10 lg:gap-10"
      >
        <Sidebar />
        <ChallengePage /> 
      </div>
    </div>
  );
};

export default Challenge;
