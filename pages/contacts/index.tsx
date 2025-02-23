import { useEffect } from "react"; 
import Sidebar from "../components/Sidebar/Sidebar";
import ContactsPage from "./ContactsPage";

const Followers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className="flex justify-center">
      <div
        style={{ width: "100%", marginBottom: "50px" }}
        className="p-5 flex justify-evenly md:gap-10 lg:gap-10"
      >
        <Sidebar /> 
        <ContactsPage />
      </div>
    </div>
  );
};

export default Followers;
