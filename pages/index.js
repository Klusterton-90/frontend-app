import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { useRouter } from "next/router";
import { Routes } from "@/constants/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // router
  const router = useRouter();

  useEffect(() => {
    //  check if logged in
    // if logged in, push to dashboard else push to landing page
    router.push(Routes.LandingPage);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>MAWA</title>
        </Head>
      </div>
    </>
  );
}
