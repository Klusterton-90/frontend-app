import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";
import Layout from "@/components/layouts/Layout/Layout";
import React from "react";
import styles from "./ProviderStatistics.module.scss";
import HeadingCard from "@/components/elements/HeadingCard/HeadingCard";
import DashboardCard from "@/components/elements/DashboardCard/DashboardCard";
import Chart from "react-google-charts";
import Image from "next/image";
import {
  analysisData,
  analysisOptions,
  data,
  genderData,
  genderOptions,
  options,
  reports,
} from "@/data/statistics";

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
      <div className={styles.chartRow}>
        <div className={styles.roundedContainer} style={{ width: "66%" }}>
          <div className={styles.titleRow}>
            <h3>Adherence Overview</h3>
            <Image
              src={"/images/menu-vertical.svg"}
              alt="icon"
              width={28}
              height={28}
            />
          </div>
          <div className={styles.dateRow}>
            <p>21st Nov, 2023 - 28th Nov, 2023</p>
            <select>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <Chart
            chartType="Bar"
            width="100%"
            height="300px"
            data={data}
            options={options}
            className={styles.barChart}
          />
        </div>
        <div className={styles.roundedContainer} style={{ width: "33%" }}>
          <div className={styles.titleRow}>
            <h3>Gender Overview</h3>
            <Image
              src={"/images/menu-vertical.svg"}
              alt="icon"
              width={28}
              height={28}
            />
          </div>
          <Chart
            chartType="PieChart"
            width="100%"
            height="300px"
            data={genderData}
            options={genderOptions}
          />
        </div>
      </div>
      <div className={styles.analysisReportRow}>
        <div className={styles.roundedContainer} style={{ width: "50%" }}>
          <div className={styles.titleRow}>
            <h3>Patient Activities Analytics</h3>
            <Image
              src={"/images/menu-vertical.svg"}
              alt="icon"
              width={28}
              height={28}
            />
          </div>
          <div className={styles.dateRow}>
            <p>25th November, 2023</p>
            <select>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>

          <Chart
            chartType="LineChart"
            width="100%"
            height="150px"
            data={analysisData}
            options={analysisOptions}
          />
        </div>
        <div className={styles.roundedContainer} style={{ width: "50%" }}>
          <div className={styles.titleRow}>
            <h3>Reports</h3>
            <Image
              src={"/images/menu-vertical.svg"}
              alt="icon"
              width={28}
              height={28}
            />
          </div>
          {reports.map((report, index) => {
            return (
              <div className={styles.reportRow} key={index}>
                <h3>{report.type}</h3>
                <h4>{report.name}</h4>
                <p>{report.date}</p>
                <Image
                  src={"/images/arrow-right.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
