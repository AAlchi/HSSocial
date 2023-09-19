import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Comp from "./Comp";
import Spinner from "./items/Spinner";

export default function App() {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? <Comp /> : <Spinner isLoading={true} />;
}
