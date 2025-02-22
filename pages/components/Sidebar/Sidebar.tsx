import React, { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { GiShadowFollower } from "react-icons/gi";
import { MdFollowTheSigns } from "react-icons/md";
import { AiOutlineArrowLeft, AiOutlineTrophy } from "react-icons/ai";
import { FiSettings } from "react-icons/fi"; 
import zustandStore from "@/store/zustandStore";
import { useRouter } from "next/router";
import { PhoneView } from "./PhoneView";

const Sidebar = () => {
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setPopup = zustandStore((state) => state.setPopup);
  const setSpin = zustandStore((state) => state.setSpin);
  const userInfo = zustandStore((state) => state.userInfo);
  const setUserInfo = zustandStore((state) => state.setUserInfo); 
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);

  const router = useRouter(); 

  const handleLogOut = () => { 
    setUserInfo(null); 
    setIsAuthOn(false);
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    router.push("/"); 
  };

  const takeTo = (page: string, reload: boolean) => { 
    router.push(`/${page}`).then(() => {
      if (reload) { router.reload(); }
    });
  };

  return (
    <>
      <>
        <div className="flex flex-col items-start gap-5">
          <ul
            style={{ height: "600px" }}
            className="fixed hidden lg:flex md:flex justify-evenly flex-col"
          >
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => takeTo("", false)}
              className="text-2xl"
            >
              HSS
            </h2>

            <li
              onClick={() =>
                isAuthOn
                  ? takeTo(`profile?username=${userInfo?.username}`, true)
                  : setPopup(true)
              }
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <CgProfile size={30} />
              <div className="hidden font-bold xl:block">Profile</div>
            </li>
            <li
              onClick={() => takeTo("challenge", false)}
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <AiOutlineTrophy size={30} />
              <div className="hidden font-bold xl:block">Challenge</div>
            </li> 
            <li
              onClick={() => (isAuthOn ? takeTo("contacts", false) : setPopup(true))}
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <MdFollowTheSigns size={30} />
              <div className="hidden font-bold xl:block">Contacts</div>
            </li>
            <li
              onClick={() => (isAuthOn ? takeTo("settings", false) : setPopup(true))}
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <FiSettings size={30} />
              <div className="hidden font-bold xl:block">Settings</div>
            </li>
            {isAuthOn && (
              <li
                onClick={handleLogOut}
                style={{ cursor: "pointer" }}
                className="text-lg font-bold-10000 flex flex-row items-center gap-1"
              >
                <AiOutlineArrowLeft size={30} />
                <div className="hidden font-bold lg:block">Log Out</div>
              </li>
            )}
          </ul>
        </div>

        {/* <PhoneView /> */}
      </>
    </>
  );
};

export default Sidebar;
