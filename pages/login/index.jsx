import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";
import Head from "next/head";
import React from "react";

function LogInRight() {
  return <div>index</div>;
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
