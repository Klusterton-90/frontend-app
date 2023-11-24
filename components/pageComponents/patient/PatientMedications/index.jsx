import React from "react";
import styles from "./PatientMedications.module.scss";
import Layout from "@/components/layouts/Layout/Layout";
import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";
import DashboardButton from "@/components/elements/DashboardButton/DashboardButton";
import HeadingCard from "@/components/elements/HeadingCard/HeadingCard";
import PatientsCard from "@/components/elements/PatientsCard/PatientsCard";

export default function PatientMedications() {
  return (
    <Layout mode="patient">
      <Breadcrumbs />
      <HeadingCard heading={"Total Medications"} number={13} />
      <PatientsCard dashboard={false} provider={false}/>
    </Layout>
  );
}
