import Link from "next/link";
import React, { useState } from "react"; 
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";

interface ContactCardInterface {
  placeholder: string;
  image: string;
  username: string;
}

const ContactCard: React.FC<ContactCardInterface> = ({ placeholder, image, username }) => {
  const [post, setPost] = useState("");

  return (
    <div
      style={{ width: "100%", maxWidth: "600px" }}
      className="flex flex-col bg-white gap-10 px-7 py-4 rounded-lg"
    >
      <Link href={`../profile?username=${username}`} className="flex items-center justify-start gap-5 flex-wrap">
        <img style={{width: "30px", height: "30px", borderRadius: "50%"}} src={image} />
        <h1 className="text-lg">{placeholder}</h1>
      </Link>
    </div>
  );
};

export default ContactCard;
