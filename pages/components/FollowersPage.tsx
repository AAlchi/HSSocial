"use client";
import CreatePost from "../items/CreatePost";
import zustandStore from "@/store/zustandStore";
import Placeholder from "../items/PlaceHolder";
import CreateFollow from "../items/CreateFollow";
import PeopleToFollow from "../items/PeopleToFollow";

const FollowersPage = () => {
  const authOn = zustandStore((state) => state.authOn);
  const setAuthOn = zustandStore((state) => state.setAuthOn);
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);
  const authType = zustandStore((state) => state.authType);
  const setAuthType = zustandStore((state) => state.setAuthType);

  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
      <CreateFollow />
      <PeopleToFollow />
      <Placeholder placeholder="Problems? Contact us." />
    </div>
  );
};

export default FollowersPage;
