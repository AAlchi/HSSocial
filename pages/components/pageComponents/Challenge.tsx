import React, { useState } from "react";
import Input from "./Input";
import Button from "../buttonComponent/Button";

const Challenge = () => {
  const [post, setPost] = useState("");

  return (
    <div
      style={{ width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-slate-200 gap-10 p-7"
    >
      <h1 className="text-2xl">Challenge</h1>
      <div className="flex flex-col gap-5">
        <h2>Ends on April 15 2024</h2>
        <ul>
          <li
            className="font-bold flex items-center justify-between"
            style={{ padding: "10px", backgroundColor: "white" }}
          >
            <p
              className="flex items-center justify-center"
              style={{
                padding: "5px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "gold",
              }}
            >
              1
            </p>{" "}
            Name 1
          </li>
          <li
            className="font-bold flex items-center justify-between"
            style={{ padding: "10px", backgroundColor: "white" }}
          >
            <p
              className="flex items-center justify-center"
              style={{
                padding: "5px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "lightblue",
              }}
            >
              2
            </p>{" "}
            Name 1
          </li>
          <li
            className="font-bold flex items-center justify-between"
            style={{ padding: "10px", backgroundColor: "white" }}
          >
            <p
              className="flex items-center justify-center"
              style={{
                padding: "5px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "gray",
              }}
            >
              3
            </p>{" "}
            Name 1
          </li>
          <li
            className="font-bold flex items-center justify-between"
            style={{ padding: "10px", backgroundColor: "white" }}
          >
            <p
              className="flex items-center justify-center"
              style={{
                padding: "5px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              }}
            >
              4
            </p>{" "}
            Name 1
          </li>
          <li
            className="font-bold flex items-center justify-between"
            style={{ padding: "10px", backgroundColor: "white" }}
          >
            <p
              className="flex items-center justify-center"
              style={{
                padding: "5px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              }}
            >
              5
            </p>{" "}
            Name 1
          </li>{" "}
          <li
            className="font-bold flex items-center justify-between"
            style={{ padding: "10px", backgroundColor: "white" }}
          >
            <p
              className="flex items-center justify-center"
              style={{
                padding: "5px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              }}
            >
              6
            </p>{" "}
            Name 1
          </li>{" "}
          <li
            className="font-bold flex items-center justify-between"
            style={{ padding: "10px", backgroundColor: "white" }}
          >
            <p
              className="flex items-center justify-center"
              style={{
                padding: "5px",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              }}
            >
              7
            </p>{" "}
            Name 1
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Challenge;
