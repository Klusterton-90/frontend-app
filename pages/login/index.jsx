import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";
import styles from "./login.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Routes } from "@/constants/navigation";
import { useRouter } from "next/router";

function LogInRight() {
  // router
  const router = useRouter();

  // info state
  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [password, setPassword] = useState("");

  // handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push(Routes.ProviderDashboard);
  };

  return (
    <div className={styles.signUpContainer}>
      <div>
        <h3>Sign In</h3>
        <p>Log in to your account to get started!</p>
      </div>

      <form onSubmit={handleFormSubmit}>
        {/* input */}

        <div className={styles.inputContainer}>
          <label>Email or Phone Number</label>
          <input placeholder="Enter your email or phone number" type="text" />
        </div>
        {/* password */}
        <div className={styles.passwordContainer}>
          <label>Password</label>
          <div className={styles.passwordInput}>
            <input placeholder="Enter password" type="password" />
            <Image
              src={"/images/eye.svg"}
              alt="visibility"
              width={24}
              height={24}
            />
          </div>
        </div>
        <Link href={""} className={styles.forgotPassword}>
          Forgot Password?
        </Link>
        {/* submit button */}
        <button className={styles.submitButton} type="submit">
          <p>Sign In</p>
        </button>
      </form>

      {/* have an account? */}
      <div className={styles.haveAnAccount}>
        <p>I don&apos;t have an account yet? </p>
        <Link href={Routes.Signup} className={styles.loginText}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <>
      <Head>
        <title>{"Log in"}</title>
        <meta property="og:title" content={"login"} />
      </Head>
      <AuthLayout rightContent={<LogInRight />} login={true}></AuthLayout>
    </>
  );
}
