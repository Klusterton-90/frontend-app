import PatientReminders from "@/components/pageComponents/patient/PatientReminders";
import runOneSignal from "@/pages/api/runOneSignal";
import Head from "next/head";
import React, { useEffect } from "react";

export default function Reminders() {

  return (
    <>
      <Head>
        <title>Patient Dashboard</title>
        <meta property="og:title" content={"patient"} />
      </Head>
      <PatientReminders />
    </>
  );
}
