import React from "react";
import Input from "../../items/Input";
import Button from "../../items/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      style={{ borderRadius: "10px" }}
      className="absolute top-0 flex w-full h-full items-center justify-center"
    >
      <div className="text-white absolute bg-black w-full  h-full sm:w-3/5 sm:h-3/5 flex flex-col gap-5 p-5">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold-500">Sign Up</h2>
          <div style={{ cursor: "pointer" }}>Close </div>
        </div>
        <Input type="text" onChange={(e) => {}} placeholder="Name" />
        <Input type="text" onChange={(e) => {}} placeholder="Username" />
        <Input type="email" onChange={(e) => {}} placeholder="Email" />
        <Input type="password" onChange={(e) => {}} placeholder="Password" />
        <Button onClick={() => {}} placeholder="Sign Up" first />
      </div>
    </div>
  );
};

export default Signup;
