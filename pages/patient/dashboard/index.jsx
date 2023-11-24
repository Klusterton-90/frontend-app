import PatientDashboard from '@/components/pageComponents/patient/PatientDashboard'
import Head from 'next/head'
import React from 'react'


export default function Dashboard() {
  return (
    <>
    <Head>
      <title>Patient Dashboard</title>
      <meta property="og:title" content={"patient"} />
    </Head>
    <PatientDashboard />
  </>
  )
}
