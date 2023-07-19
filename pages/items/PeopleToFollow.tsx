import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Images from "./Images";
import zustandStore from "@/store/zustandStore";

const PeopleToFollow = () => {
  //zustand

  const authOn = zustandStore((state) => state.authOn);
  const setAuthOn = zustandStore((state) => state.setAuthOn);
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);
  const authType = zustandStore((state) => state.authType);
  const setAuthType = zustandStore((state) => state.setAuthType);

  const [post, setPost] = useState("");

  return (
    <>
      {isAuthOn && (
        <div>
          <div className="flex flex-col bg-slate-200 gap-10 p-7">
            <>
              <h1 className="text-2xl">Consider following</h1>
              <div
                style={{ height: "270px" }}
                className="flex gap-3 overflow-auto"
              >
                <Images
                  imageUrl="/file.jpg"
                  imageName="file"
                  type="rectangle"
                />
                <Images
                  imageUrl="/logo.png"
                  imageName="file"
                  type="rectangle"
                />
                <Images
                  imageUrl="/tech.jpg"
                  imageName="file"
                  type="rectangle"
                />
                <Images
                  imageUrl="/tech.jpg"
                  imageName="file"
                  type="rectangle"
                />
                <Images
                  imageUrl="/tech.jpg"
                  imageName="file"
                  type="rectangle"
                />
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default PeopleToFollow;
