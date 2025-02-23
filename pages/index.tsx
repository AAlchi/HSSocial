import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast"; 
import HomePage from "./components/homePageComponent/HomePage";
import Sidebar from "./components/Sidebar/Sidebar"; 

const Comp = () => {  

  return (
      <div className="flex justify-center">
        <div
          style={{ width: "100%", marginBottom: "50px" }}
          className="p-5 flex justify-evenly md:gap-10 lg:gap-10"
        > 
          <Sidebar />
          <HomePage />  
        </div>
      </div>
  );
};

export default Comp;
