import ProviderReminders from "@/components/pageComponents/provider/ProviderReminders";
import Head from "next/head";
import React from "react";

export default function Reminders() {
  
  return (
    <>
      <Head>
        <title>Provider Reminders</title>
        <meta property="og:title" content={"healthare provider"} />
      </Head>
      <ProviderReminders />
    </>
  );
}
