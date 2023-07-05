import Sidebar from "../Sidebar";
import HomePage from "../HomePage";
import Popup from "../../items/Popup";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div
        style={{ width: "100%" }}
        className="p-5 flex justify-evenly md:gap-10 lg:gap-10"
      >
        <Sidebar />
        <HomePage />
      </div>
    </div>
  );
};

export default Home;
