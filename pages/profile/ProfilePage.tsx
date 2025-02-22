import zustandStore from "@/store/zustandStore"; 
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import CreateProfile from "../components/pageComponents/CreateProfile";
import Button from "../components/buttonComponent/Button";
import { useRouter } from "next/router";
import Posts from "../components/pageComponents/Posts";
import Placeholder from "../components/pageComponents/PlaceHolder";
import PeopleToFollow from "../components/pageComponents/PeopleToFollow";

const ProfilePage = () => {
  const userInfo = zustandStore((state) => state.userInfo);

  const [user, setUser] = useState<{ username: string; dateCreated: string; publicOrPrivate: string; followers: string[]; following: string[] } | null>(null);

  const router = useRouter()

  const formatDate = (date: any) => {
    const formattedDate = new Date(date).toLocaleString();
    return formattedDate;
  }

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const fetchedUsername = urlParams.get('username'); 

  useEffect(() => {
    if (fetchedUsername != null) {
      axios.post("/api/getUsers", {username: fetchedUsername}).then((res) => setUser(res.data));
    }
  }, [])

  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
      {user ? (
        <>
        <CreateProfile />
      <div
        style={{ width: "100%", maxWidth: "600px" }}
        className="flex flex-col bg-slate-200 gap-10 p-7 rounded-lg"
      >
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h1 className="text-lg">@{user.username}</h1>
          {user && userInfo && userInfo?.username == user.username ? (
            <Button onClick={() => {}} placeholder="Edit" second />
          ) : (
            <Button onClick={() => {}} placeholder="Follow" first />
          )}{" "}
        </div>
        <div className="flex gap-5 w-full justify-start items-start flex-wrap">
          <ul>
            <li>Account - {user.publicOrPrivate}</li>
          </ul>
          <ul>
            <li>Followers - {user.followers.length}</li>
            <li>Following - {user.following.length}</li>
          </ul>
          <ul>
            <li>Joined In - {formatDate(user.dateCreated)}</li> 
          </ul>
        </div>
      </div>
      <h2 className="text-2xl text-center">Posts by {user.username}</h2>
      <Posts />
      </>
      ) : (
        <>
          <PeopleToFollow />
          <Placeholder placeholder="Please find a user to see their profile" />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
