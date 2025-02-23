import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "../buttonComponent/Button";
import Images from "./Images";
import zustandStore from "@/store/zustandStore";
import axios from "axios";
import { useRouter } from "next/router"; 
import { useSession } from "next-auth/react";

const PeopleToFollow = () => { 
 const { data: session, status } = useSession();
 
   if (status === "loading") {
     return <div>Loading...</div>;
   }

  const router = useRouter()

  const [peopleFollow, setPeopleFollow] = useState<{ username: string | any }[]>([]);

  useEffect(() => {
    axios.post("/api/getUsers", {username: ""}).then((res) => setPeopleFollow(res.data));
  }, []); 
  
  return (
    <>
      {session && (
        <div>
          <div className="flex flex-col bg-slate-200 gap-10 p-7 rounded-xl">
            <>
              <h1 className="text-2xl">Consider following</h1>
              <div
                style={{ height: "270px" }}
                className="flex gap-3 overflow-auto"
              >
                {peopleFollow.map((people: any, index: number) => (
                  <div key={index} className="flex flex-col items-center justify-center">
                    <img
                      width="120"
                      height="200"
                      src={people.profilePicture}
                      alt={people.profilePicture}
                      style={{
                        minWidth: "120px",
                        width: "120px",
                        minHeight: "200px",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        backgroundColor: "rgb(5, 5, 5, 0.3)",
                        cursor: "pointer",
                        border: "3px solid black",
                      }}
                    />
                    <span
                      style={{
                        transform: "translateY(-50%)",
                        backgroundColor: "rgb(5, 5, 5, 0.6)",
                        cursor: "pointer",
                      }}
                      className="relative text-white p-3 rounded-lg w-4/5 font-sm text-center"
                      onClick={() => router.push(`/profile?username=${people.username}`)}
                    >
                      @{people.username}
                    </span>
                  </div>
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