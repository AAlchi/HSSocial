import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = (props: any) => {
  const isLoading = props.isLoading;
  return (
    <>
      {isLoading ? (
        <div className="absolute top-0 flex w-full h-full opacity-80 bg-black items-center justify-center">
          <ClipLoader
            color="red"
            loading={isLoading}
            size={90}
            aria-label="Workin' on it"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Spinner;
