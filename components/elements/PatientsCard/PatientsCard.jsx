import React from "react";
import styles from "./PatientsCard.module.scss";
import Image from "next/image";
import {
  patientInfoDashboard,
  patientInfoDashboardPatient,
  patientInfoPatients,
  patientInfoProvider,
  patientReportProvider,
} from "@/data/patientData";

// list of titles(provider)
const titlesDashboard = ["Name", "Diagnosis", "Type", "Status"];

// for patients screen(provider)
const titlesPatients = [
  "#",
  "Name",
  "Diagnosis",
  "Gender",
  "Age",
  "Medication",
  "Date",
  "Status",
];

// report titles
const titlesReports = [
  "#",
  "Reminder",
  "Diagnosis",
  "Time",
  "Date",
  "Next Dose",
  "Status",
];

// list of titles(patient)
const titlesDashboardPatient = ["Medications", "Diagnosis", "Type", "Status"];

// for patients screen(patient)
const titlesMedicationsPatient = [
  "#",
  "Name",
  "Diagnosis",
  "Doses",
  "Type",
  "Duration",
  "Status",
];

export default function PatientsCard({ dashboard, provider, report }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.titlesRow}>
        {(dashboard
          ? provider
            ? titlesDashboard
            : titlesDashboardPatient
          : provider
          ? report
            ? titlesReports
            : titlesPatients
          : report
          ? titlesReports
          : titlesMedicationsPatient
        ).map((title, index) => {
          return <p key={index}>{title}</p>;
        })}
        <Image
          src={"/images/unfold-more.svg"}
          alt="more"
          width={24}
          height={24}
        />
      </div>
      <hr />

      <div className={styles.patientInfo}>
        {(dashboard
          ? provider
            ? patientInfoDashboard
            : patientInfoDashboardPatient
          : provider
          ? report
            ? patientReportProvider
            : patientInfoProvider
          : report
          ? patientReportProvider
          : patientInfoPatients
        ).map((info, index) => {
          return (
            <div key={index} className={styles.patientRow}>
              {<span>{index + 1}</span>}
              {info.one && <p>{info.one}</p>}
              {info.two && <p>{info.two}</p>}
              {info.three && <p>{info.three}</p>}
              {info.four && <p>{info.four}</p>}
              {info.five && <p>{info.five}</p>}
              {info.six && <p>{info.six}</p>}
              <div
                className={styles.statusPill}
                style={{
                  backgroundColor:
                    info.status === "Received" ||
                    info.status === "Completed" ||
                    info.status === "Taken"
                      ? "#E9F7EF"
                      : info.status === "Pending" || info.status === "Ongoing"
                      ? "#FFF6E5"
                      : "#FFE5E5",
                  color:
                    info.status === "Received" ||
                    info.status === "Completed" ||
                    info.status === "Taken"
                      ? "#27AE60"
                      : info.status === "Pending" || info.status === "Ongoing"
                      ? "#FFA500"
                      : "#F00",
                }}
              >
                <p>{info.status}</p>
              </div>
              <Image
                src={"/images/menu-vertical.svg"}
                alt="menu"
                width={28}
                height={28}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
