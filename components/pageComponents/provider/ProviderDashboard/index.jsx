import Layout from "@/components/layouts/Layout/Layout";
import React from "react";
import styles from "./ProviderDashboard.module.scss";
import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";
import Image from "next/image";
import DashboardCard from "@/components/elements/DashboardCard/DashboardCard";
import { currentDate, currentTime } from "@/constants/date";
import PatientsCard from "@/components/elements/PatientsCard/PatientsCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ProviderDashboard() {
  return (
    <Layout>
      <Breadcrumbs />
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardTop}>
          <div>
            <div className={styles.welcomeContainer}>
              <div>
                <div className={styles.timeDateContainer}>
                  <div className={styles.date}>
                    <Image
                      src={"/images/calendar.svg"}
                      alt="date"
                      width={24}
                      height={24}
                    />
                    <p>{currentDate}</p>
                  </div>
                  <p>{currentTime}</p>
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
                title={"Av. Adherence"}
                number={"105%"}
                description={"Increase in the last month"}
                icon={"/images/calendar-black.svg"}
                alt={"Reminders"}
              />
            </div>
          </div>
          <Calendar calendarType="gregory" className={styles.calendar}/>
        </div>

        <div className={styles.dashboardBottom}>
          <PatientsCard dashboard={true} provider={true} />
        </div>
      </div>
    </Layout>
  );
}
