import zustandStore from "@/store/zustandStore";
import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = (props: any) => { 
  const spin = zustandStore((state) => state.spin); 

  return (
    <>
      {spin ? (
        <div
          style={{ zIndex: "2000" }}
          className="absolute top-0 flex w-full h-full opacity-80 bg-black items-center justify-center"
        >
          <ClipLoader
            color="red"
            loading={spin}
            size={90}
            aria-label="Working on it"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Spinner;
