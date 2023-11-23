import Layout from "@/components/layouts/Layout/Layout";
import React from "react";
import styles from "./ProviderDashboard.module.scss";
import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";
import Image from "next/image";
import DashboardCard from "@/components/elements/DashboardCard/DashboardCard";

export default function ProviderDashboard() {
  return (
    <Layout>
      <Breadcrumbs />
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardLeft}>
          <div className={styles.welcomeContainer}>
            <div>
              <div className={styles.timeDateContainer}>
                <div>
                  <Image
                    src={"/images/calendar.svg"}
                    alt="date"
                    width={24}
                    height={24}
                  />
                  <p>Nov 21, 2023</p>
                </div>
                <p>03:13 AM</p>
              </div>
              <div className={styles.welcomeMessage}>
                <h3>Welcome Dr. Michelle</h3>
                <p>Have a nice working day!</p>
              </div>
            </div>
            <div>
              <Image
                src={"/images/welcomePerson.svg"}
                alt="welcome"
                width={200}
                height={200}
                className={styles.welcomeImage}
              />
            </div>
          </div>
          <div className={styles.dashboardCardRow}>
            <DashboardCard
              title={"Assigned Patients"}
              number={46}
              description={"Total patients assigned"}
              icon={"/images/patients.svg"}
              alt={"Patients"}
            />
            <DashboardCard
              title={"Added Reminders"}
              number={105}
              description={"Total number of reminders"}
              icon={"/images/calendar.svg"}
              alt={"Reminders"}
            />
          </div>
        </div>
        <div className={styles.dashboardRight}></div>
      </div>
    </Layout>
  );
}
