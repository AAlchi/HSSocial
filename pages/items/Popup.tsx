"use client";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Spinner from "./Spinner";

interface PopupInterface {
  open?: boolean;
  type: string;
}
const Popup: React.FC<PopupInterface> = ({ open, type }) => {
  const [opened, setOpened] = useState(open);
  const [types, setTypes] = useState(type);

  //inputs

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    setIsLoading(true);
    try {
      await axios.post("/api/signup", {
        name: name,
        email: email,
        username: username,
        password: password,
      });

      setOpened(false);
      setIsLoading(false);
      toast.success("All Signed Up");
    } catch (err) {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <>
      {opened == true && (
        <>
          {types == "signin" ? (
            <>
              <div className="absolute top-0 flex w-full h-full items-center justify-center">
                <div className="text-white absolute bg-black w-full h-full flex flex-row gap-5">
                  <div
                    style={{ borderRadius: "10px" }}
                    className="flex flex-col gap-6 w-full p-5"
                  >
                    <div className="flex justify-between">
                      <h2 className="text-3xl font-bold-500">Sign In</h2>
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => setOpened(false)}
                      >
                        Close{" "}
                      </div>
                    </div>
                    <Input
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      value={username}
                    />
                    <Input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      value={password}
                    />
                    <Button onClick={() => {}} placeholder="Sign In" first />
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => setTypes("signup")}
                    >
                      No Account? Sign Up
                    </div>
                  </div>
                  <img
                    src="./tech.jpg"
                    className="hidden sm:block"
                    style={{ objectFit: "cover" }}
                    width="50%"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
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
                    <Input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      value={name}
                    />
                    <Input
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      value={username}
                    />
                    <Input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      value={email}
                    />
                    <Input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      value={password}
                    />
                    <Button
                      onClick={() => handleSignup()}
                      placeholder="Sign Up"
                      first
                    />
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => setTypes("signin")}
                    >
                      Have an Account? Sign In
                    </div>
                  </div>
                  <img
                    src="./tech.jpg"
                    className="hidden sm:block"
                    style={{ objectFit: "cover" }}
                    width="50%"
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
      <Spinner isLoading={isLoading} />
    </>
  );
};

export default Popup;
