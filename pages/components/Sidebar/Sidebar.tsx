import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdFollowTheSigns } from "react-icons/md";
import { AiOutlineArrowLeft, AiOutlineTrophy } from "react-icons/ai";
import { FiSettings } from "react-icons/fi"; 
import zustandStore from "@/store/zustandStore";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => { 
  const setPopup = zustandStore((state) => state.setPopup);
  const { data: session, status } = useSession();  

  const router = useRouter(); 

  const handleLogOut = async () => { 
    await signOut({ callbackUrl: "/" });
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
                session
                  ? takeTo(`profile?username=${session?.user.username}`, true)
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
              onClick={() => (session ? takeTo("contacts", false) : setPopup(true))}
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <MdFollowTheSigns size={30} />
              <div className="hidden font-bold xl:block">Contacts</div>
            </li>
            <li
              onClick={() => (session ? takeTo("settings", false) : setPopup(true))}
              style={{ cursor: "pointer" }}
              className="text-lg font-bold-10000 flex flex-row items-center gap-1"
            >
              <FiSettings size={30} />
              <div className="hidden font-bold xl:block">Settings</div>
            </li>
            {session && (
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
