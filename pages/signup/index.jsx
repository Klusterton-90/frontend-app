import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";
import styles from "./Signup.module.scss";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/constants/navigation";

function SignupRight() {
  return (
    <div className={styles.signUpContainer}>
      <div>
        <h3>Sign Up</h3>
        <p>Register with us to get started!</p>
      </div>

      <form>
        {/* input */}
        <div className={styles.inputContainer}>
          <label>Full Name</label>
          <input placeholder="Enter full name" type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label>Email Address</label>
          <input placeholder="Enter email address" type="email" />
        </div>
        <div className={styles.inputContainer}>
          <label>Phone Number</label>
          <input placeholder="Enter email address" type="text" />
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
        {/* user type */}
        <div className={styles.passwordContainer}>
          <label>I&apos;m signing up as</label>
          <div className={styles.passwordInput}>
            <input placeholder="Select" type="" />
            <Image
              src={"/images/eye.svg"}
              alt="dropdown"
              width={24}
              height={24}
            />
          </div>
        </div>
        {/* submit button */}
        <button className={styles.submitButton}>
          <p>Create an Account</p>
        </button>
      </form>

      {/* have an account? */}
      <div className={styles.haveAnAccount}>
        <p>I already have an account? </p>
        <Link href={Routes.Login} className={styles.loginText}>
          Log In
        </Link>
      </div>
    </div>
  );
}

export default function Signup() {
  return (
    <>
      <Head>
        <title>{"Sign Up"}</title>
        <meta property="og:title" content={"sign up"} />
      </Head>
      <AuthLayout rightContent={<SignupRight />}></AuthLayout>
    </>
  );
}
