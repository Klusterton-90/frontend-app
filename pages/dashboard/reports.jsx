import ProviderReports from '@/components/pageComponents/provider/ProviderReports'
import Head from 'next/head'
import React from 'react'



export default function Reports() {
  return (
    <>
    <Head>
      <title>Provider Dashboard</title>
      <meta property="og:title" content={"healthare provider"} />
    </Head>
    <ProviderReports />
  </>
  )
}
