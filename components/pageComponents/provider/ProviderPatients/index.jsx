import HeadingCard from '@/components/elements/HeadingCard/HeadingCard'
import PatientsCard from '@/components/elements/PatientsCard/PatientsCard'
import Breadcrumbs from '@/components/layouts/Layout/Breadcrumbs/Breadcrumbs'
import Layout from '@/components/layouts/Layout/Layout'
import React from 'react'

export default function ProviderPatients() {
  return (
   <Layout>
   <Breadcrumbs/>
   <HeadingCard heading={"Total Patients"} number={87}/>
   <PatientsCard dashboard={false} provider={true}/>
   </Layout>
  )
}
