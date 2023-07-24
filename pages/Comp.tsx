import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import { Toaster } from "react-hot-toast";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import Challenge from "./components/pages/Challenge";
import Spinner from "./items/Spinner";
import Following from "./components/pages/Following";
import Followers from "./components/pages/Followers";

const Comp = () => {
  return (
    <Router>
      <Toaster />
      <title>HS Social</title>
      <link rel="icon" href="./logo.png" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:person" element={<Profile />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/following" element={<Following />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Spinner isLoading={true} />
    </Router>
  );
};

export default Comp;
