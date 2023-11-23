import ProviderStatistics from '@/components/pageComponents/provider/ProviderStatistics'
import Head from 'next/head'
import React from 'react'



export default function Statistics() {
  return (
    <>
    <Head>
      <title>Provider Statistics</title>
      <meta property="og:title" content={"healthare provider"} />
    </Head>
    <ProviderStatistics />
  </>
  )
}
