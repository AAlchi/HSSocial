import zustandStore from "@/store/zustandStore";
import { useRouter } from "next/router";
import React, { useState } from "react";  
import Button from "../components/buttonComponent/Button";
import { signOut, useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

const SettingsComp = () => { 
  
  const router = useRouter(); 
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const deleteAccount = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (!confirmDelete) return;

    try {
      await axios.delete("/api/auth/deleteAccount")
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      toast.error("Account deletion failed.")
    }
  }

  const formatDate = (date: any) => {
    const formattedDate = new Date(date).toLocaleString();
    return formattedDate;
  }

  return (
    <div
      style={{ width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7 rounded-lg"
    >
      {session  && (
        <>
          <div
            style={{ width: "100%", maxWidth: "600px" }}
            className="flex flex-col bg-slate-200 gap-10 p-4"
          >
            <div className="flex items-center justify-between  flex-wrap">
              <h1 className="text-lg">@{session.user.username}</h1>
              
            </div> 
            <div className="flex flex-col gap-7"> 
              <p>Account Created: {formatDate(session.user.accountCreated)}</p>
              <p>Account Updated: {formatDate(session.user.accountUpdated)}</p>
              <Button onClick={deleteAccount} placeholder="Delete Account" first />
            </div>
          </div>
        </> 
      )} 
    </div>
  );
};

export default SettingsComp;
