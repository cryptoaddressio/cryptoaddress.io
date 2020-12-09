import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import { Generate } from "../components/Generate";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Generate />
      </main>

      <Footer />
    </div>
  );
}
