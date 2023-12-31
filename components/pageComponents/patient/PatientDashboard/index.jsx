import Layout from "@/components/layouts/Layout/Layout";
import React from "react";
import styles from "./PatientDashboard.module.scss";
import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";
import Image from "next/image";
import DashboardCard from "@/components/elements/DashboardCard/DashboardCard";
import { currentDate, currentTime } from "@/constants/date";
import PatientsCard from "@/components/elements/PatientsCard/PatientsCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Link from "next/link";
import { Routes } from "@/constants/navigation";

export default function PatientDashboard() {
  return (
    <Layout mode="patient">
      <Breadcrumbs />
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardLeft}>
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
                <h3>Welcome Mr Ademola</h3>
                <p>How are you doing today!</p>
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
              title={"Medications"}
              number={12}
              description={"Total medicines assigned "}
              icon={"/images/pill.svg"}
              alt={"medications"}
            />
            <DashboardCard
              title={"Reminders"}
              number={48}
              description={"Total number of reminders"}
              icon={"/images/calendar-black.svg"}
              alt={"Reminders"}
            />
          </div>

          <PatientsCard dashboard={true} provider={false} />
        </div>
        <div className={styles.dashboardRight}>
          {/* dashboard calendar */}
          <Calendar calendarType="gregory" className={styles.calendar} />

          {/* upcoming medication section */}
          <div className={styles.upcomingMedicationsHeader}>
            <h3>Upcoming</h3>
            <Link href={Routes.PatientMedications}>
              <p>View all</p>
            </Link>
          </div>

          {/* upcoming medication */}
          <div className={styles.upcomingMedicationCard}>
            <p>Medication</p>
            <h3>Medication Name</h3>
            <p>Nov 21, 10:00 AM</p>
          </div>
          <div className={styles.upcomingMedicationCard}>
            <p>Medication</p>
            <h3>Medication Name</h3>
            <p>Nov 21, 10:00 AM</p>
          </div>
          <div className={styles.upcomingMedicationCard}>
            <p>Medication</p>
            <h3>Medication Name</h3>
            <p>Nov 21, 10:00 AM</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
