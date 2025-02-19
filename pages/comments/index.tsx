import { useEffect } from "react"; 
import Sidebar from "../components/Sidebar/Sidebar";
import CommentPage from "./CommentsPage";

const Comment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="flex justify-center">
      <div
        style={{ width: "100%", marginBottom: "50px" }}
        className="p-5 flex justify-evenly md:gap-10 lg:gap-10"
      >
        <Sidebar />
        <CommentPage />
      </div>
    </div>
  );
};

export default Comment;
