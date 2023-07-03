import React from "react";

const Popup = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
      }}
      className="flex items-center justify-center"
    >
      <div
        style={{ backgroundColor: "rgb(155, 62, 62)" }}
        className="w-4/5 h-4/5 sm:h-5/5"
      ></div>
    </div>
  );
};

export default Popup;
