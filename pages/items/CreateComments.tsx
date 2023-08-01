import React from "react";
import Images from "./Images";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";
import Input from "./Input";
import Button from "./Button";

const CreateComments = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        zIndex: "10",
      }}
    >
      <div
        className="sticky"
        style={{
          width: "100%",
        }}
      >
        <div className="bg-slate-200">
          <div className="flex flex-row items-center justify-between p-5 flex-wrap">
            <div className="flex items-center gap-5">
              <Images
                type="littleProfile"
                imageName="image"
                imageUrl="/file.jpg"
                onClick={() => {}}
              />
              <div className="text-lg">@Name</div>
            </div>
            <div className="text-lg">September 14 1947</div>
          </div>
          <div className="flex flex-col p-5 gap-5">
            <Images
              imageName="text"
              imageUrl="/tech.jpg"
              type="post"
              onClick={() => {}}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              ipsa, atque impedit necessitatibus voluptate facilis, eveniet
              tenetur, pariatur corporis mollitia delectus commodi explicabo
              error illum nam cupiditate iure architecto laboriosam magnam vel?
              Iure qui tempore in hic, voluptatem, dolorum unde ducimus, id
              nihil illum nesciunt nostrum porro fuga. Quaerat, sed.
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
              <div className="flex gap-1 cursor-pointer" title="Report">
                <MdReportProblem />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5 bg-slate-200">
          <h2 className="text-2xl">Comments</h2>
          <br></br>
          <div className="flex flex-col gap-5">
            <div className="flex">
              <Input
                type="text"
                placeholder="Post a comment"
                onChange={(e) => {}}
                sideBySide
              />
              <Button onClick={() => {}} placeholder="Post" first sideBySide />
            </div>
            <div className="flex flex-row items-center gap-5 flex-wrap p-2 bg-white">
              <Images
                imageName="profile"
                imageUrl="/tech.jpg"
                type="littleProfile"
                onClick={() => {}}
              />
              <p>This is an amazing post!</p>
            </div>
            <div className="flex flex-row items-center gap-5 flex-wrap p-2 bg-white">
              <Images
                imageName="profile"
                imageUrl="/tech.jpg"
                type="littleProfile"
                onClick={() => {}}
              />
              <p>This is an amazing post!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateComments;
