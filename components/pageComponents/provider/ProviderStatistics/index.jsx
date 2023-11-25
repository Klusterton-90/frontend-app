import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";
import Layout from "@/components/layouts/Layout/Layout";
import React from "react";
import styles from "./ProviderStatistics.module.scss";
import HeadingCard from "@/components/elements/HeadingCard/HeadingCard";
import DashboardCard from "@/components/elements/DashboardCard/DashboardCard";

export default function ProviderStatistics() {
  return (
    <Layout>
      <Breadcrumbs />
      <HeadingCard heading={"My Patient’s Statistics"} />
      <div className={styles.cardRow}>
        <DashboardCard
          title={"Total Patients"}
          number={46}
          description={"Patients assigned to me"}
          icon={"/images/patients.svg"}
          alt={"icon"}
        />
        <DashboardCard
          title={"Total Medications"}
          number={85}
          description={"Medications assigned to my patients"}
          icon={"/images/pill.svg"}
          alt={"icon"}
        />
        <DashboardCard
          title={"Total Reminders"}
          number={129}
          description={"Reminders set by my patients"}
          icon={"/images/calendar-black.svg"}
          alt={"icon"}
        />
      </div>
    </Layout>
  );
}
