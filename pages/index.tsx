import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import { Generate } from "../components/Generate";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>cryptoaddress.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div>Click the Bitcoin Logo bellow to generate a new address.</div>

        <Generate />
      </main>

      <Footer />
    </div>
  );
}
