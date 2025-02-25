import Placeholder from "../components/pageComponents/PlaceHolder";
import Button from "../components/buttonComponent/Button";
import Followers from "./differentContactTypes/Followers";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Following from "./differentContactTypes/Following";



const ContactsPage = () => {
  const { data: session, status } = useSession();
  const [whichView, setWhichView] = useState("Followers")

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  const router = useRouter()

  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
      <>
        {session ? (
          <div className="w-full flex flex-col bg-slate-200 gap-10 p-7 rounded-xl"> 
            <div>
              <>
                <h1 className="text-2xl pb-3">Contacts</h1>
                <div>
                  <div className="flex gap-2 flex-wrap">
                    <Button onClick={() => setWhichView("Followers")} placeholder="Followers" first={whichView == "Followers"}/>
                    <Button onClick={() => setWhichView("Following")} placeholder="Following" first={whichView == "Following"} />
                  </div>
                  <div className="mt-5">
                    {whichView == "Followers" && (<Followers />)}
                    {whichView == "Following" && (<Following />)}
                  </div>
                </div>
              </>
            </div>
          </div>
        ) : (
          <Placeholder placeholder="Loading..." />
        )}
      </>

      <Placeholder placeholder="Problems? Contact us." />
    </div>
  );
};

export default ContactsPage;
