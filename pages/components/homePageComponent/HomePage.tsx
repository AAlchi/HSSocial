import zustandStore from "@/store/zustandStore";
import Button from "../buttonComponent/Button";
import PeopleToFollow from "../pageComponents/PeopleToFollow";
import CreatePost from "./CreatePost";
import Spinner from "../pageComponents/Spinner";
import Posts from "../pageComponents/Posts";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const setPopup = zustandStore((state) => state.setPopup);
  const spin = zustandStore((state) => state.spin); 
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const { data: session, status } = useSession(); 

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <> 
        
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
      {session ? (
        <>
          <CreatePost />
          <PeopleToFollow />
          <h2 className="text-2xl text-center">
            Your Feed
          </h2>
          <Posts />
        </>
      ) : (
        <>
          <div
            className="flex bg-slate-200 gap-10 p-7 rounded-lg items-center justify-between"
          > 
            <h1 className="text-xl">Welcome! Sign in to post something</h1>
            <div className="flex justify-evenly">
              <Button
                first
                onClick={() => {
                  setPopup(true); 
                }}
                placeholder="Sign In"
                sideBySide
              /> 
            </div>
          </div>
          <h2 className="text-2xl text-center">Feed</h2>
          <Posts />
        </>
      )}
    </div>
    </>
  );
};

export default HomePage;
