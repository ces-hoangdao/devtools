import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <SEO />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
