import React, { useEffect, useState } from "react"; 
import Images from "./Images";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md"; 
import { useRouter } from "next/router";
import axios from "axios";
import Placeholder from "./PlaceHolder";
import Link from "next/link";

const Posts = () => {
  const [posts, setPosts] = useState<{ id: number; username: string; dateCreated: string; imageUrl: string; message: string }[] | null>(null);

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
        style={{ width: "100%", maxWidth: "600px" }}
        className="flex flex-col bg-slate-200 gap-10 p-7 rounded-lg"
      >
        <div className="flex items-center justify-between gap-2 flex-wrap"> 
          <Link href={`/user/${item.username}`}>@{item.username}</Link>
          <h1 className="text-sm">{formatDate(item.dateCreated)}</h1>
        </div>

        <div onClick={() => router.push(`/comments/post`)}>
          <Images
            imageName="text"
            imageUrl="/tech.jpg"
            type="post"
            onClick={() => {}}
          />
        </div>
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
          <div className="flex gap-1 cursor-pointer" title="Report">
            <MdReportProblem />
          </div>
        </div>
      </div>
      ))
    )} 
    </>
  );
};

export default Posts;
