import zustandStore from "@/store/zustandStore";
import Button from "../buttonComponent/Button";
import PeopleToFollow from "../pageComponents/PeopleToFollow";
import CreatePost from "./CreatePost";
import Spinner from "../pageComponents/Spinner";
import Posts from "../pageComponents/Posts";

const HomePage = () => {
  const setPopup = zustandStore((state) => state.setPopup);
  const spin = zustandStore((state) => state.spin);
  const setAuthType = zustandStore((state) => state.setAuthType);
  const isAuthOn = zustandStore((state) => state.isAuthOn);

  return (
    <> 
        
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
      {isAuthOn ? (
        <>
          <CreatePost />
          <PeopleToFollow />
          <h2 className="text-2xl text-center">
            {isAuthOn ? "Your Feed" : "Feed"}
          </h2>
          <Posts />
        </>
      ) : (
        <>
          <div
            style={{ height: "200px", width: "100%", maxWidth: "600px" }}
            className="flex flex-col bg-slate-200 gap-10 p-7 rounded-lg"
          >
            {" "}
            <h1 className="text-xl">Welcome! Sign in to post something:</h1>
            <div className="flex justify-evenly">
              <Button
                first
                onClick={() => {
                  setPopup(true); 
                }}
                placeholder="Sign In"
                sideBySide
              />
              <Button
                second
                onClick={() => {
                  setPopup(true);
                  setAuthType("signup"); 
                }}
                placeholder="Sign Up"
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
