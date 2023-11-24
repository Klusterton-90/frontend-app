import PatientReport from '@/components/pageComponents/patient/PatientReport'
import Head from 'next/head'
import React from 'react'


export default function Report() {
  return (
    <>
    <Head>
      <title>Patient Dashboard</title>
      <meta property="og:title" content={"patient"} />
    </Head>
    <PatientReport />
  </>
  )
}
