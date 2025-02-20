import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "../buttonComponent/Button";
import Images from "./Images";
import zustandStore from "@/store/zustandStore";
import axios from "axios";

const PeopleToFollow = () => {
  //zustand 

  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);
  const authType = zustandStore((state) => state.authType);
  const setAuthType = zustandStore((state) => state.setAuthType);

  const [post, setPost] = useState("");

  const [peopleFollow, setPeopleFollow] = useState<{username: string | any}[]>([]);

  useEffect(() => {
    axios.get("/api/getPeopleToFollow").then((res) => setPeopleFollow(res.data));
  }, []);
  
  return (
    <>
      {isAuthOn && (
        <div>
          <div className="flex flex-col bg-slate-200 gap-10 p-7 rounded-xl">
            <>
              <h1 className="text-2xl">Consider following</h1>
              <div
                style={{ height: "270px" }}
                className="flex gap-3 overflow-auto"
              > 
                {peopleFollow.map((people: any, index: number) => ( 
                  <Images
                    key={people.username}
                    onClick={() => { }}
                    imageUrl="/tech.jpg"
                    imageName="file"
                    personName={people.username}
                    type="rectangle"
                  />
                ))}
              </div>
            </> 
          </div>
        </div>
      )}
    </>
  );
};

export default PeopleToFollow;
