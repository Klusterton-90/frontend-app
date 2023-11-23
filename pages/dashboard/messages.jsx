import ProviderMessages from '@/components/pageComponents/provider/ProviderMessages'
import Head from 'next/head'
import React from 'react'



export default function Messages() {
  return (
    
    <>
    <Head>
      <title>Provider Messages</title>
      <meta property="og:title" content={"healthare provider"} />
    </Head>
    <ProviderMessages />
  </>
  )
}
