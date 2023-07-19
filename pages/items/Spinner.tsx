import zustandStore from "@/store/zustandStore";
import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = (props: any) => {
  const isLoading = props.isLoading;
  const authOn = zustandStore((state) => state.authOn);
  const setAuthOn = zustandStore((state) => state.setAuthOn);
  const isAuthOn = zustandStore((state) => state.isAuthOn);
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);
  const authType = zustandStore((state) => state.authType);
  const setAuthType = zustandStore((state) => state.setAuthType);
  const spin = zustandStore((state) => state.spin);
  const setSpin = zustandStore((state) => state.setSpin);

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
