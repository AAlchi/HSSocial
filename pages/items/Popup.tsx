"use client";
import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Spinner from "./Spinner";
import zustandStore from "@/store/zustandStore";
import Image from "next/image";

interface PopupInterface {
  open?: boolean;
}
const Popup: React.FC<PopupInterface> = ({ open }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  //zustand

  const popup = zustandStore((state) => state.popup);
  const setPopup = zustandStore((state) => state.setPopup);
  const authType = zustandStore((state) => state.authType);
  const setAuthType = zustandStore((state) => state.setAuthType);
  const setSpin = zustandStore((state) => state.setSpin);

  //inputs

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    if (
      username == "" ||
      username == null ||
      password == null ||
      password == ""
    ) {
      toast.error("Invalid Inputs");
      setSpin(false);
    } else {
      setSpin(true);

      try {
        await axios
          .post("/api/signin", {
            username: username,
            password: password,
          })
          .then(
            (res) =>
              (document.cookie = `token=${JSON.stringify(
                res.data
              )}; expires=${new Date(
                Date.now() + 1 * 60 * 60 * 1000
              ).toUTCString()}; path=/`)
          );

        setPopup(!popup);
        setSpin(false);
        toast.success("All Signed In");
      } catch (err) {
        toast.error("Wrong username or password");
        setSpin(false);
      }
    }
  };

  const handleSignup = async () => {
    if (
      username == "" ||
      username == null ||
      password == null ||
      password == "" ||
      email == "" ||
      email == null ||
      name == null ||
      name == ""
    ) {
      toast.error("Invalid Inputs");
      setSpin(false);
    } else {
      setSpin(true);
      try {
        await axios.post("/api/signup", {
          name: name,
          email: email,
          username: username,
          password: password,
        });

        setAuthType("signin");
        setSpin(false);
        toast.success("All Signed Up");
      } catch (err) {
        setSpin(false);
        toast.error("User Exists. If something is wrong, please contact us.");
      }
    }
  };

  return (
    <>
      {authType == "signin" && (
        <>
          <div
            className="absolute top-0 flex w-full h-full items-center justify-center"
            style={{ zIndex: "999" }}
          >
            <div className="text-white absolute bg-black w-full h-full flex flex-row gap-5">
              <div
                style={{ borderRadius: "10px" }}
                className="flex flex-col gap-6 w-full p-5"
              >
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold-500">Sign In</h2>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setPopup(!popup)}
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
                <Button onClick={handleSignin} placeholder="Sign In" first />
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setAuthType("signup")}
                >
                  No Account? Sign Up
                </div>
              </div>
              <Image
                src="/tech.jpg"
                width={window.innerWidth / 2}
                height={window.innerHeight}
                className="hidden sm:block"
                style={{ objectFit: "cover", width: "50%" }}
                alt="image"
              />
            </div>
          </div>
        </>
      )}

      {authType === "signup" && (
        <>
          <div
            style={{ zIndex: "999" }}
            className="absolute top-0 flex w-full h-full items-center justify-center"
          >
            <div className="text-white absolute bg-black w-full h-full flex flex-row gap-5">
              <div
                style={{ borderRadius: "10px" }}
                className="flex flex-col gap-6 w-full p-5"
              >
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold-500">Sign Up</h2>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setPopup(!popup)}
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
                  onClick={() => setAuthType("signin")}
                >
                  Have an Account? Sign In
                </div>
              </div>
              <Image
                src="/tech.jpg"
                height={window.innerHeight}
                width={window.innerWidth / 2}
                className="hidden sm:block"
                style={{ objectFit: "cover", width: "50%" }}
                alt="image"
              />
            </div>
          </div>
        </>
      )}

      {authType === "update" && (
        <>
          <div
            className="absolute top-0 flex w-full h-full items-center justify-center"
            style={{ zIndex: "999" }}
          >
            <div className="text-white absolute bg-black w-full h-full flex flex-row gap-5">
              <div
                style={{ borderRadius: "10px" }}
                className="flex flex-col gap-6 w-full p-5"
              >
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold-500">Update Account</h2>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setPopup(!popup)}
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
                <Button onClick={handleSignin} placeholder="Update" first />
              </div>
              <Image
                src="/tech.jpg"
                width={window.innerWidth / 2}
                height={window.innerHeight}
                className="hidden sm:block"
                style={{ objectFit: "cover", width: "50%" }}
                alt="image"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
