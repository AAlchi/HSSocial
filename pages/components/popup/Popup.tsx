import React, { useState, useEffect } from "react";
import Input from "../pageComponents/Input";
import Button from "../buttonComponent/Button";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import axios from "axios";

interface PopupInterface {
  isOpen: boolean;
  onClose: () => void;
}
const Popup: React.FC<PopupInterface> = ({
  isOpen,
  onClose
}) => {
  const [authType, setAuthType] = useState<"signup" | "signin">("signin");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const router = useRouter()

  const handleSubmit = () => {
    setIsButtonDisabled(true)

    authType == "signin" ? handleSignin() : handleSignup()
  }

  const handleSignin = async () => {
    const loading = toast.loading("Signing in");
 
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    toast.remove(loading)

    if (res?.error) {
      toast.error("Wrong username or password")
    } else {
      toast.success("You're signed in!")
      onClose()
    }

    setIsButtonDisabled(false)
  };

  const handleSignup = async () => {
    const loading = toast.loading("Signing up");

    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedName = name.trim();

    if (!trimmedUsername || !trimmedEmail || !trimmedName || !password) {
      toast.remove(loading)
      toast.error("All fields are required");
      setIsButtonDisabled(false)
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast.remove(loading)
      toast.error("Please enter a valid email");
      setIsButtonDisabled(false)
      return;
    }

    try {
      await axios.post("/api/auth/signup", {
        name: trimmedName,
        email: trimmedEmail,
        username: trimmedUsername,
        password,
      });

      handleSignin()
    } catch {
      toast.remove(loading)
      toast.error("Something happened, please try again."); 
    }
 
    toast.remove(loading)
    setIsButtonDisabled(false)
  };

  if (!isOpen) return null;


  return (
    <>
      <div
        style={{ zIndex: "999", backgroundColor: "rgb(0, 0, 0, 0.5)" }}
        className="fixed top-0 flex h-screen w-full items-center justify-center"
      >
        <div className="flex flex-col gap-4 bg-slate-100 border w-11/12 max-w-[400px] justify-center p-5 rounded-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-xl py-2 font-bold">HSSocial | {authType == "signin" ? "Sign In" : "Sign Up"}</h2>
            <span onClick={() => onClose()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
          {authType != "signin" && (
            <>
              <Input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                value={name}
              />
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                value={email}
              />
            </>
          )}
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

          <Button
            onClick={handleSubmit}
            placeholder={authType === "signup" ? "Sign Up" : "Sign In"}
            disabled={isButtonDisabled}
            first
          />
          <span>
            {authType === "signup" ? (
              <>
                Have an account?{" "}
                <span
                  className="font-bold cursor-pointer"
                  onClick={() => setAuthType("signin")}
                >
                  Sign in
                </span>
              </>
            ) : (
              <>
                No account?{" "}
                <span
                  className="font-bold cursor-pointer"
                  onClick={() => setAuthType("signup")}
                >
                  Sign up
                </span>
              </>
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default Popup;
