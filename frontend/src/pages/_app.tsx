import MyFooter from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-eggShell flex flex-col h-screen justify-between">
      <Navbar />
      <Component {...pageProps} />
      <MyFooter />
    </div>
  );
}
