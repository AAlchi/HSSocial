import zustandStore from "@/store/zustandStore";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/buttonComponent/Button";
import { useRouter } from "next/router";
import Posts from "../components/pageComponents/Posts";
import Placeholder from "../components/pageComponents/PlaceHolder";
import { useSession } from "next-auth/react";
import ProfilePopup from "./ProfilePopup";

const ProfilePage = () => {

  const [user, setUser] = useState<{ name: string; username: string; dateCreated: string; publicOrPrivate: string; followers: string[]; following: string[], profilePicture: string } | null>(null);
  const [popup, setPopup] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const router = useRouter()

  const formatDate = (date: any) => {
    const formattedDate = new Date(date).toLocaleString();
    return formattedDate;
  }

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const fetchedUsername = urlParams.get('username');

  useEffect(() => {
    try {
      axios.post("/api/getUsers", { username: fetchedUsername || fetchedUsername != "" ? fetchedUsername : "" }).then((res) => setUser(res.data));
    } catch (err) {
      toast.error("Unable to load user")
    }
  }, [])

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  async function addFollowing(username: string) {
    setIsButtonDisabled(true)
    const loading = toast.loading("Adding user")

    try {
      const postFollowing = await axios.post("/api/contacts/addFollowing", { username: session?.user.username, otherUsername: username })
      
      if (postFollowing) {
        toast.remove(loading)
        toast.success("You're now following " + user?.username)
      }
    } catch (err) {
      toast.error("Unable to follow")
    }
    setIsButtonDisabled(false) 
  }

  async function removeFollowing(username: string) {
    setIsButtonDisabled(true)
    const loading = toast.loading("Removing user")

    try {
      const postFollowing = await axios.post("/api/contacts/removeFollowing", { username: session?.user.username, otherUsername: username })
      
      if (postFollowing) {
        toast.remove(loading)
        toast.success("You unfollowed " + user?.username)
      }
    } catch (err) {
      toast.error("Unable to unfollow")
    }
    setIsButtonDisabled(false) 
  }

  function isPersonInFollowing() {
    return session?.user?.following?.includes(user!.username) ?? false;
  }

  return (
    <>
      {popup && <ProfilePopup isOpen={popup} onClose={() => setPopup(false)} />}
      <div
        style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
        className="flex justify-center flex-col gap-10"
      >
        {user ? (
          <>
            <div
              style={{ width: "100%", maxWidth: "600px" }}
              className="flex flex-col bg-slate-200 gap-10 p-7 rounded-lg"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center">
                  <img src={user.profilePicture} style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover", transform: "translate(-40%, -40%)", border: "4px solid white" }} alt={user.profilePicture} />
                  <h1 className="text-lg" style={{ transform: "translateX(-100%)" }}>@{user.username}</h1>
                </div>
                {user && session && session?.user.username == user.username ? (
                  <Button onClick={() => setPopup(true)} placeholder="Edit Pic" second />
                ) : (
                  isPersonInFollowing() ? (
                    <Button onClick={() => addFollowing(user.username)} disabled={isButtonDisabled} placeholder="Follow" first />
                  ) : (
                    <Button onClick={() => removeFollowing(user.username)} disabled={isButtonDisabled} placeholder="Unfollow" />
                  )
                )}{" "}
              </div>
              <div className="flex gap-5 w-full justify-start items-start flex-wrap">
                <div
                  style={{ width: "100%", maxWidth: "600px" }}
                  className="flex flex-col bg-slate-200 gap-10 p-4 rounded-lg"
                >
                  <div className="flex items-center justify-between flex-wrap">
                    <h1 className="text-lg">{user.name}</h1>
                  </div>
                </div>
                <div
                  style={{ width: "100%", maxWidth: "600px" }}
                  className="flex flex-col bg-slate-200 gap-10 p-4 rounded-lg"
                >
                  <div className="flex items-center justify-between flex-wrap">
                    <h1 className="text-lg">Followers - {user.followers.length}</h1>
                  </div>
                </div>
                <div
                  style={{ width: "100%", maxWidth: "600px" }}
                  className="flex flex-col bg-slate-200 gap-10 p-4 rounded-lg"
                >
                  <div className="flex items-center justify-between flex-wrap">
                    <h1 className="text-lg">Following - {user.following.length}</h1>
                  </div>
                </div>
                <div
                  style={{ width: "100%", maxWidth: "600px" }}
                  className="flex flex-col bg-slate-200 gap-10 p-4 rounded-lg"
                >
                  <div className="flex items-center justify-between flex-wrap">
                    <h1 className="text-lg">Joined In - {formatDate(user.dateCreated)}</h1>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl text-center">Posts by {user.username}</h2>
            <Posts username={user.username} />
          </>
        ) : (
          <>
            <Placeholder placeholder="Please find a user to see their profile" />
          </>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
