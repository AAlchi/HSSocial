import CreateFollow from "../components/pageComponents/items/CreateFollow";
import PeopleToFollow from "../components/pageComponents/items/PeopleToFollow";
import Placeholder from "../components/pageComponents/items/PlaceHolder";

 

const ContactsPage = () => { 

  return (
    <div
      style={{ marginTop: "56px", width: "100%", maxWidth: "600px" }}
      className="flex justify-center flex-col gap-10"
    >
       {/* <CreateFollow /> */}
      <PeopleToFollow />
      <Placeholder placeholder="Problems? Contact us." /> 
    </div>
  );
};

export default ContactsPage;
