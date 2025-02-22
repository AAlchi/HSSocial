import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import zustandStore from "@/store/zustandStore";
import HomePage from "./components/homePageComponent/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";
import Spinner from "./components/pageComponents/Spinner";
import Popup from "./components/popup/Popup"; 

const Comp = () => {
  const popup = zustandStore((state) => state.popup);
  const setPopup = zustandStore((state) => state.setPopup);
  const spin = zustandStore((state) => state.spin);

  return (
      <div className="flex justify-center">
        <div
          style={{ width: "100%", marginBottom: "50px" }}
          className="p-5 flex justify-evenly md:gap-10 lg:gap-10"
        >      <Toaster />
          <Sidebar />
          <HomePage />

          {spin && (<Spinner />)}
          <Popup isOpen={popup} onClose={() => setPopup(false)} />
        </div>
      </div>
  );
};

export default Comp;
