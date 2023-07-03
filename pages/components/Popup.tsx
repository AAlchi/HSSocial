import React, { useState } from "react";
import Input from "../items/Input";
import Button from "../items/Button";
import { Link } from "react-router-dom";

interface PopupInterface {
  open?: boolean;
  name?: string;
  body?: React.ReactElement;
  disabled?: boolean;
}
const Popup: React.FC<PopupInterface> = ({ open, name, body, disabled }) => {
  const [opened, setOpened] = useState(open);

  return (
    <>
      {opened == false ? (
        <div></div>
      ) : (
        <div className="absolute top-0 flex w-full h-full items-center justify-center">
          <div className="text-white absolute bg-black w-full h-full flex flex-row gap-5">
            <div
              style={{ borderRadius: "10px" }}
              className="flex flex-col gap-6 w-full p-5"
            >
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold-500">Sign Up</h2>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpened(false)}
                >
                  Close{" "}
                </div>
              </div>
              <Input type="text" onChange={(e) => {}} placeholder="Name" />
              <Input type="text" onChange={(e) => {}} placeholder="Username" />
              <Input type="email" onChange={(e) => {}} placeholder="Email" />
              <Input
                type="password"
                onChange={(e) => {}}
                placeholder="Password"
              />
              <Button onClick={() => {}} placeholder="Sign Up" first />
              <div style={{ cursor: "pointer" }}>No Account? Sign In</div>
            </div>
            <img
              src="./tech.jpg"
              className="hidden sm:block"
              style={{ objectFit: "cover" }}
              width="50%"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
