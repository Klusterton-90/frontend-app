import React from "react";
import styles from "./PatientMedications.module.scss";
import Layout from "@/components/layouts/Layout/Layout";
import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";
import DashboardButton from "@/components/elements/DashboardButton/DashboardButton";

export default function PatientMedications() {
  return (
    <Layout mode="patient">
      <Breadcrumbs />
      <div className={styles.topRow}>
        <h3>
          Total Medications <span>(13)</span>
        </h3>
        <DashboardButton outline={false} buttonText={"Add Dose"} />
      </div>
    </Layout>
  );
}
