import React, { useEffect, useState } from "react"; 
import Images from "./Images";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi"; 
import { useRouter } from "next/router";
import axios from "axios";
import Placeholder from "./PlaceHolder";
import Link from "next/link";

const Posts = () => {
  const [posts, setPosts] = useState<{ id: number; username: string; dateCreated: string; picture: string; message: string }[] | null>(null);

  const router = useRouter()

  const formatDate = (date: any) => {
    const formattedDate = new Date(date).toLocaleString();
    return formattedDate;
  }

  useEffect(() => {
    axios.get("/api/getPosts").then((res) => setPosts(res.data));
  }, [])

  return (
    <>
    {posts === null ? (
      <Placeholder placeholder="Loading..."/>
    ) : posts.length === 0 ? (
      <Placeholder placeholder="No Posts! Be the first to post?"/>
    ) : (
      posts.map((item, index) => (
        <div
        key={index}
        style={{ width: "100%", maxWidth: "600px" }}
        className="flex flex-col bg-slate-200 gap-10 p-7 rounded-lg"
      >
        <div className="flex items-center justify-between gap-2 flex-wrap"> 
          <Link href={`/user/${item.username}`}>@{item.username}</Link>
          <h1 className="text-sm">{formatDate(item.dateCreated)}</h1>
        </div>

        {item.picture != "N/A" && (
          <div onClick={() => router.push(`/posts/${item.id}`)}>
          <img
          height={window.innerHeight}
          width={window.innerWidth}
          src={item.picture}
          alt={item.picture}
          style={{
            width: "100%",
            minWidth: "100%",
            objectFit: "cover",
            borderRadius: "2px",
            backgroundColor: "rgb(5, 5, 5, 0.3)",
            cursor: "pointer",
          }}
        />
        </div>
        )}
        <p>
          {item.message}
        </p>
        <div className="flex gap-5">
          <div className="flex gap-1 cursor-pointer" title="Like">
            <AiOutlineLike />
            <p className="text-xs">200</p>
          </div>
          <div className="flex gap-1 cursor-pointer" title="Dislike">
            <AiOutlineDislike />
            <p className="text-xs">200</p>
          </div>
          <div className="flex gap-1 cursor-pointer" title="Comment">
            <BiCommentDetail />
            <p className="text-xs">200</p>
          </div> 
        </div>
      </div>
      ))
    )} 
    </>
  );
};

export default Posts;
