import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";

const Comp = () => {
  return (
    <BrowserRouter>
      <title>HS Social</title>
      <link rel="icon" href="./logo.png" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Comp;
