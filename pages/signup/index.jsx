import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";
import styles from "./Signup.module.scss";
import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/constants/navigation";
import { useRouter } from "next/router";
import Select from "@/components/elements/Select/Select";

const userType = ["Patient", "Healthcare Provider"];

function SignupRight() {
  // router
  const router = useRouter();

  // user info state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // password visibility
  const [visible, setVisible] = useState(false);
  // dropdown

  // handle submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push(Routes.Verify);
    console.log([fullName, email, password, phoneNumber, selectedValue]);
  };

  // get select value
  const [selectedValue, setSelectedValue] = useState("Patient");

  const getValue = (selectedValue) => {
    setSelectedValue(selectedValue);
  };

  return (
    <div className={styles.signUpContainer}>
      <div>
        <h3>Sign Up</h3>
        <p>Register with us to get started!</p>
      </div>

      <form onSubmit={handleFormSubmit}>
        {/* input */}
        <div className={styles.inputContainer}>
          <label>Full Name</label>
          <input
            placeholder="Enter full name"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Email Address</label>
          <input
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Phone Number</label>
          <input
            placeholder="Enter phone number"
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </div>
        {/* password */}
        <div className={styles.passwordContainer}>
          <label>Password</label>
          <div className={styles.passwordInput}>
            <input
              placeholder="Enter password"
              type={visible ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <div
              onClick={() => setVisible(!visible)}
              className={styles.eyeIcon}
            >
              <Image
                src={"/images/eye.svg"}
                alt="visibility"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        {/* select user type */}
        <Select
          list={userType}
          label={"I'm signing up as"}
          placeholder={"Patient"}
          getValue={getValue}
        />
        {/* submit button */}
        <button className={styles.submitButton} type="submit">
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
