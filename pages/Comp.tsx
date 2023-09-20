import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
const Home = lazy(() => import("./components/pages/Home"));
const Error = lazy(() => import("./components/pages/Error"));
import { Toaster } from "react-hot-toast";
import zustandStore from "@/store/zustandStore";
import axios from "axios";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import Challenge from "./components/pages/Challenge";
import Spinner from "./items/Spinner";
import Following from "./components/pages/Following";
import Followers from "./components/pages/Followers";
import Comment from "./components/pages/Comment";
import Popup from "./items/Popup";

const Comp = () => {
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);
  const popup = zustandStore((state) => state.popup);
  const userInfo = zustandStore((state) => state.userInfo);
  const setUserInfo = zustandStore((state) => state.setUserInfo);

  useEffect(() => {
    console.log(
      "Hold Up! This is for developers only, so be careful while using this console."
    );
    const checkAuth = async () => {
      try {
        await axios
          .get("/api/server", {
            withCredentials: true,
          })
          .then((res) => {
            setIsAuthOn(true);
            setUserInfo(res.data);
          });
      } catch (error) {
        setIsAuthOn(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Toaster />
        <title>HS Social</title>
        {popup && <Popup open={true} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:person" element={<Profile />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/following" element={<Following />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="*" element={<Error />} />
          <Route path="/comments/:id" element={<Comment />} />
        </Routes>
        <Spinner isLoading={true} />
      </Router>
    </Suspense>
  );
};

export default Comp;
