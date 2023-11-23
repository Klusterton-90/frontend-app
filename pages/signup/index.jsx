import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";
import Head from "next/head";
import React from "react";

function SignupRight() {
  return (
    <div>
        <h3>Sign Up</h3>
        <p>Register with us to get started</p>
    </div>
  )
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
