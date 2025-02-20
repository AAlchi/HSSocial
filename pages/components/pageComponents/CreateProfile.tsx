import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "../buttonComponent/Button";
import Images from "./Images";
import zustandStore from "@/store/zustandStore";
import axios from "axios";
import { toast } from "react-hot-toast";

const CreateProfile = () => { 

  const [post, setPost] = useState("");

  const url = window.location.href;
  const getUser = url.split("/");

  const finalUser = getUser[getUser.length - 1];

  const [theUsername, setTheUsername] = useState("");
  const [theAccountStatus, setTheAccountStatus] = useState("");

  const followAction = async () => {
    try {
      // axios
      //   .post("/api/follow", {
      //     userId: mongoID,
      //     followUsername: theUsername,
      //   })
      //   .then((res) => {
      //     toast.success("You are now following " + theUsername);
      //   });
    } catch (err) {
      toast.error("Something went wrong, please try again later.");
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        await axios
          .post("/api/getUserData", {
            username: finalUser,
          })
          .then((res) => {
            setTheUsername(res.data.username);
            setTheAccountStatus(res.data.publicOrPrivate);
          });
      } catch (err) {
        toast.error("There was an error fetching user data");

        setTheUsername("Could Not Fetch");
        setTheAccountStatus("Could Not Fetch");
      }
    };

    getUserData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        backgroundImage: `url("/file.jpg")`,
        backgroundSize: "cover",
      }}
      className="flex flex-row bg-slate-200 gap-10"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "rgb(0, 0, 0, 0.6)",
        }}
        className="flex flex-row justify-evenly items-center flex-wrap bg-slate-200 gap-10 p-7"
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl text-white font-bold">{theUsername}</h1>
          <Images
            type="largeProfile"
            imageName="profilePic"
            imageUrl="/tech.jpg"
            onClick={() => {}}
          />
        </div>
        <div className="flex items-center">
          {/* {finalUser === usernames ? (
            <Button onClick={() => {}} placeholder="Edit" second />
          ) : (
            <Button onClick={() => followAction} placeholder="Follow" first />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
