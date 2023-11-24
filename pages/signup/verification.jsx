import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";
import Head from "next/head";
import React from "react";
import styles from "./Signup.module.scss";
import Image from "next/image";
import Link from "next/link";

function VerifyRight() {
  return (
    <div className={[ styles.verificationContainer]}>
      <Image src={"/images/email.svg"} alt="icon" width={200} height={200} />
      <h3>Verify your email</h3>
      <p>Check your email & click the link to activate your account.</p>
      <h4>Link expires after <span>14.54</span>secs</h4>
      <button className={styles.submitButton}>
        Open Email
      </button>
      <div className={styles.haveAnAccount}>
        <p>Didn&apos;t recieve a code?</p>
        <Link href={""} className={styles.loginText}>
          Resend
        </Link>
      </div>
    </div>
  );
}

export default function Verification() {
  return (
    <>
      <Head>
        <title>{"Verify email"}</title>
        <meta property="og:title" content={"email verification"} />
      </Head>
      <AuthLayout rightContent={<VerifyRight />}></AuthLayout>
    </>
  );
}
