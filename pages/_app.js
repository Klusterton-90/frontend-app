import "@/styles/globals.scss";
import { poppins } from "@/constants/fonts";
import { useEffect } from "react";
import runOneSignal from "./api/runOneSignal";

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    runOneSignal();
  })
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}
