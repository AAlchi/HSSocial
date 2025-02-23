import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react"; 
import zustandStore from "@/store/zustandStore";
import axios from "axios";
import { SessionProvider } from "next-auth/react";
import Popup from "./components/popup/Popup";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) { 
  const popup = zustandStore((state) => state.popup);  
  const setPopup = zustandStore((state) => state.setPopup);

  useEffect(() => {
    console.log(
      "Hold Up! This is for developers only, so be careful while using this console."
    ); 
  }, []);

  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? (
    <SessionProvider>
      <Component {...pageProps} />
      <Popup isOpen={popup} onClose={() => setPopup(false)} />
      <Toaster />
    </SessionProvider>
  ) : "Loading...";
}