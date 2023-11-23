import React from "react";
import Head from "next/head";
import LandingPage from "@/components/pageComponents/LandingPage";
import styles from '@/styles/Home.module.scss'

export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing Page</title>
        <meta property="og:title" content={"landing page"} />
      </Head>
      <LandingPage />
    </div>
  );
}
