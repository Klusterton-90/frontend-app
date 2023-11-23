import ProviderSchedule from "@/components/pageComponents/provider/ProviderSchedule";
import Head from "next/head";
import React from "react";

export default function Schedule() {
  return (
    <>
      <Head>
        <title>Provider Schedule</title>
        <meta property="og:title" content={"healthare provider"} />
      </Head>
      <ProviderSchedule />
    </>
  );
}
