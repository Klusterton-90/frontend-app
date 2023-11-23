import ProviderPatients from '@/components/pageComponents/provider/ProviderPatients'
import Head from 'next/head'
import React from 'react'

export default function Patients() {
  return (
    <>
    <Head>
      <title>Provider Patients</title>
      <meta property="og:title" content={"healthare provider"} />
    </Head>
    <ProviderPatients />
  </>
  )
}
