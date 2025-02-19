import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import zustandStore from "@/store/zustandStore";
import axios from "axios";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";
import Popup from "./components/pageComponents/items/Popup";
import Spinner from "./components/pageComponents/items/Spinner";

const Comp = () => { 
  const popup = zustandStore((state) => state.popup);
  const spin = zustandStore((state) => state.spin);  

  return (
    <div className="flex justify-center">
      <div
        style={{ width: "100%", marginBottom: "50px" }}
        className="p-5 flex justify-evenly md:gap-10 lg:gap-10"
      >      <Toaster />
        <Sidebar />
        <HomePage />
        {popup && (<Popup />)}
        {spin && (<Spinner />)}
      </div>
    </div>
  );
};

export default Comp;
