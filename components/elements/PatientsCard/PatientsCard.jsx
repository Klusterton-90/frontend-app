import React from "react";
import styles from "./PatientsCard.module.scss";
import Image from "next/image";

// list of titles(provider)
const titlesDashboard = ["Name", "Diagnosis", "Type", "Status"];
const titlesPatients = [
  "Name",
  "Diagnosis",
  "Gender",
  "Age",
  "Medication",
  "Date",
  "Status",
];
// list of titles(patient)
const titlesDashboardPatient = ["Medications", "Diagnosis", "Type", "Status"];
const titlesPatientsPatient = [
  "Name",
  "Diagnosis",
  "Doses",
  "Type",
  "Duration",
  "Status",
];

// list of patient info(provider)
const patientInfoDashboard = [
  {
    name: "Kimberly Yung",
    diagnosis: "Malaria",
    type: "Medicine",
    status: "Received",
  },
  {
    name: "Kimberly Yung",
    diagnosis: "Typhoid",
    type: "Checkup",
    status: "Pending",
  },
  {
    name: "Kimberly Yung",
    diagnosis: "Malaria",
    type: "Medicine",
    status: "Declined",
  },
  {
    name: "Kimberly Yung",
    diagnosis: "Malaria",
    type: "Physio",
    status: "Received",
  },
  {
    name: "Kimberly Yung",
    diagnosis: "Malaria",
    type: "Injection",
    status: "Received",
  },
  {
    name: "Kimberly Yung",
    diagnosis: "Malaria",
    type: "Injection",
    status: "Received",
  },
  {
    name: "Kimberly Yung",
    diagnosis: "Malaria",
    type: "Injection",
    status: "Received",
  },
];
// list of patient info(patient)
const patientInfoDashboardPatient = [
  {
    name: "Gold Bond",
    diagnosis: "Nerve Block",
    type: "Syrup",
    status: "Completed",
  },
  {
    name: "Cefotan, 1g",
    diagnosis: "Prophylaxis",
    type: "Drops",
    status: "Ongoing",
  },
  {
    name: "Juxtapid, 20mg",
    diagnosis: "Homozygous",
    type: "Pill",
    status: "Stopped",
  },
  {
    name: "Robaxin, 10mL",
    diagnosis: "Tetanus",
    type: "Powder",
    status: "Completed",
  },
  {
    name: "Aminosyn",
    diagnosis: "Bartholinitis ",
    type: "Injection",
    status: "Completed",
  },
];

const patientInfoPatients = [];

export default function PatientsCard({ dashboard, provider }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.titlesRow}>
        {(dashboard
          ? provider
            ? titlesDashboard
            : titlesDashboardPatient
          : provider
          ? titlesPatients
          : titlesPatientsPatient
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
          : patientInfoPatients
        ).map((info, index) => {
          return (
            <div key={index} className={styles.patientRow}>
              <p>{info.name}</p>
              <p>{info.diagnosis}</p>
              <p>{info.type}</p>
              <div
                className={styles.statusPill}
                style={{
                  backgroundColor:
                    info.status === "Received" || info.status === "Completed"
                      ? "#E9F7EF"
                      : info.status === "Pending" || info.status === "Ongoing"
                      ? "#FFF6E5"
                      : "#FFE5E5",
                  color:
                    info.status === "Received" || info.status === "Completed"
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
