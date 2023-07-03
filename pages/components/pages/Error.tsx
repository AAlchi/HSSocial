import React from "react";
import Sidebar from "../Sidebar";

const Error = () => {
  return (
    <div
      style={{ width: "100%" }}
      className="p-5 flex justify-evenly md:gap-10 lg:gap-10"
    >
      <Sidebar />
      <div
        style={{
          marginTop: "40px",
          height: "100vh",
          width: "100%",
          maxWidth: "600px",
        }}
        className="flex justify-center md:w-3/5 lg:w-3/5"
      >
        <h1 className="text-4xl text-center">
          You've come come to a page we haven't go to yet... Congrats!
        </h1>
      </div>
    </div>
  );
};

export default Error;
