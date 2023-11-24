import React from "react";
import styles from "./PatientsCard.module.scss";
import Image from "next/image";

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

export default function PatientsCard({ dashboard }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.titlesRow}>
        {(dashboard ? titlesDashboard : titlesPatients).map((title, index) => {
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
    </div>
  );
}
