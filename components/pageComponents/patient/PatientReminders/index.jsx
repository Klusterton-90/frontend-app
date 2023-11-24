import React from "react";
import styles from "./PatientReminders.module.scss";
import Layout from "@/components/layouts/Layout/Layout";
import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";

export default function PatientReminders() {
  return (
    <Layout mode="patient">
      <Breadcrumbs />
    </Layout>
  );
}
