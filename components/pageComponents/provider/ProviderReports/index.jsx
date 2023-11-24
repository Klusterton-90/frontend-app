import Breadcrumbs from '@/components/layouts/Layout/Breadcrumbs/Breadcrumbs'
import Layout from '@/components/layouts/Layout/Layout'
import React from 'react'
import styles from './ProviderReports.module.scss'
import HeadingCard from '@/components/elements/HeadingCard/HeadingCard'


export default function ProviderReports() {
  return (
   <Layout>
    <Breadcrumbs/>
    <HeadingCard heading={"My Patient’s Reports"}/>
   </Layout>
  )
}
