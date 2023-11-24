import PatientMedications from '@/components/pageComponents/patient/PatientMedications'
import Head from 'next/head'
import React from 'react'



export default function Medications() {
  return (
    <>
    <Head>
      <title>Patient Medications</title>
      <meta property="og:title" content={"medications"} />
    </Head>
    <PatientMedications />
  </>
  )
}
