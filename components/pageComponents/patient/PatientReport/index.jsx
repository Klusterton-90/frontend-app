import HeadingCard from '@/components/elements/HeadingCard/HeadingCard'
import Breadcrumbs from '@/components/layouts/Layout/Breadcrumbs/Breadcrumbs'
import Layout from '@/components/layouts/Layout/Layout'
import React from 'react'

export default function PatientReport() {
  return (
    <Layout mode='patient'>
<Breadcrumbs/>
<HeadingCard heading={"Ademola’s Report"}/>
    </Layout>
  )
}
