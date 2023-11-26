import React from "react";
import Head from "next/head";
import ProviderDashboard from "@/components/pageComponents/provider/ProviderDashboard";

export default function Dashboard() {

  return (
    <>
      <Head>
        <title>Provider Dashboard</title>
        <meta property="og:title" content={"healthare provider"} />
      </Head>
      <ProviderDashboard />
    </>
  );
}
