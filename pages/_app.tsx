import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Spinner from "./components/pageComponents/Spinner";
import zustandStore from "@/store/zustandStore";
import axios from "axios";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  const setIsAuthOn = zustandStore((state) => state.setIsAuthOn);
  const popup = zustandStore((state) => state.popup);
  const spin = zustandStore((state) => state.spin);
  const userInfo = zustandStore((state) => state.userInfo);
  const setUserInfo = zustandStore((state) => state.setUserInfo);

  useEffect(() => {
    console.log(
      "Hold Up! This is for developers only, so be careful while using this console."
    );
    const checkAuth = async () => {
      try {
        await axios
          .get("/api/server", {
            withCredentials: true,
          })
          .then((res) => {
            setIsAuthOn(true);
            setUserInfo(res.data);
          });
      } catch (error) {
        setIsAuthOn(false);
      }
    };
    checkAuth();
  }, []);
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  ) : <Spinner isLoading={true} />;
}