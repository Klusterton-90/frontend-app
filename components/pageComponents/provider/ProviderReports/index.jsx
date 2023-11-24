import Breadcrumbs from '@/components/layouts/Layout/Breadcrumbs/Breadcrumbs'
import Layout from '@/components/layouts/Layout/Layout'
import React from 'react'
import styles from './ProviderReports.module.scss'
import HeadingCard from '@/components/elements/HeadingCard/HeadingCard'
import PatientsCard from '@/components/elements/PatientsCard/PatientsCard'


export default function ProviderReports() {
  return (
   <Layout>
    <Breadcrumbs/>
    <HeadingCard heading={"My Patient’s Reports"}/>
    <PatientsCard dashboard={false} provider={true} report={true}/>
   </Layout>
  )
}
