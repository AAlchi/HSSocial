import zustandStore from "@/store/zustandStore"; 
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import CreateProfile from "../components/pageComponents/items/CreateProfile";
import Button from "../components/pageComponents/items/Button";

const ProfilePage = () => {
  const userInfo = zustandStore((state) => state.userInfo);

  const url = window.location.href;
  const getUser = url.split("/");

  const finalUser = getUser[getUser.length - 1];

  const [theUsername, setTheUsername] = useState("");
  const [theAccountStatus, setTheAccountStatus] = useState("");
  const [theBornOn, setTheBornOn] = useState("");
  const [theFollowers, setTheFollowers] = useState("");
  const [theFollowing, setTheFollowing] = useState("");
  const [thePosts, setThePosts] = useState("");
  const [theDateCreated, setTheDateCreated] = useState("");
  const [theDateUpdated, setTheDateUpdated] = useState("");
  const [theProfilePicture, setTheProfilePicture] = useState("");
  const [theBannerPicture, setTheBannerPicture] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        await axios
          .post("/api/getUserData", {
            username: finalUser,
          })
          .then((res) => {
            console.log(res.data);
            setTheUsername(res.data.username);
            setTheAccountStatus(res.data.publicOrPrivate);
            setTheBornOn(res.data.bornOn);
            setTheFollowers(res.data.followers);
            setTheFollowing(res.data.following);
            setTheDateCreated(res.data.dateCreated);
            setTheDateUpdated(res.data.dateUpdated);
          });
      } catch (err) {
        toast.error("There was an error fetching user data");

        setTheUsername("Could Not Fetch");
        setTheAccountStatus("Could Not Fetch");
        setTheBornOn("Could Not Fetch");
        setTheFollowers("Could Not Fetch");
        setTheFollowing("Could Not Fetch");

        setTheDateCreated("Could Not Fetch");
        setTheDateUpdated("Could Not Fetch");
      }
    };

    getUserData();
  }, []);

  const dateCreatedFormat: string = theDateCreated;
  const dateCreatedFormatTwo: Date = new Date(dateCreatedFormat);

  const dateUpdatedFormat: string = theDateUpdated;
  const dateUpdatedFormatTwo: Date = new Date(dateUpdatedFormat);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const dateCreatedFormatThree: string =
    dateCreatedFormatTwo.toLocaleDateString("en-US", options);

  const dateUpdatedFormatThree: string =
    dateUpdatedFormatTwo.toLocaleDateString("en-US", options);

  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
      <CreateProfile />
      <div
        style={{ width: "100%", maxWidth: "600px" }}
        className="flex flex-col bg-slate-200 gap-10 p-7 rounded-lg"
      >
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h1 className="text-lg">@{theUsername}</h1>
          {userInfo && finalUser === userInfo.username ? (
            <Button onClick={() => {}} placeholder="Edit" second />
          ) : (
            <Button onClick={() => {}} placeholder="Follow" first />
          )}{" "}
        </div>
        <div className="flex gap-5 w-full justify-start items-start flex-wrap">
          <ul>
            <li>Account - {theAccountStatus}</li>
            <li>Born on - {theBornOn}</li>
          </ul>
          <ul>
            <li>Followers - {theFollowers}</li>
            <li>Following - {theFollowing}</li>
          </ul>
          <ul>
            <li>Joined In - {dateCreatedFormatThree}</li>
            <li>Updated In - {dateUpdatedFormatThree}</li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl text-center">Posts they created</h2>
      {/* <Posts /> */}
    </div>
  );
};

export default ProfilePage;
