 import Challenge from "./Challenge";
import Placeholder from "../components/pageComponents/PlaceHolder";

 

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
      <Placeholder placeholder="Talk to one of the leaders to join the challenge" /> 
    </div>
  );
};

export default ChallengePage;
