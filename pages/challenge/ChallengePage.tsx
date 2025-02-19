 import Challenge from "../components/pageComponents/items/Challenge";
import Placeholder from "../components/pageComponents/items/PlaceHolder";

 

const ChallengePage = () => {
  return (
    <div
      style={{
        marginTop: "56px",
        width: "100%",
        maxWidth: "600px",
      }}
      className="flex justify-center flex-col gap-10"
    >
      <Challenge />
      <Placeholder placeholder="Talk to one of the Hack Club leaders to join the challenge" /> 
    </div>
  );
};

export default ChallengePage;
