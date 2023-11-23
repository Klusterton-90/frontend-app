import React from "react";
import styles from "./DashboardCard.module.scss";
import Image from "next/image";


export default function DashboardCard({title, number, description, icon, alt}) {
  return (
    <div className={styles.dashboardCard}>
    <div className={styles.cardRowOne}>
      <div className={styles.iconContainer}>
        <Image
          src={icon}
          alt={alt}
          width={24}
          height={24}
        />
      </div>
      <h3>{title}</h3>
    </div>
    <div className={styles.cardRowTwo}>
      <h3>{number}</h3>
      <Image
        src={"/images/chart.svg"}
        alt="chart"
        width={135}
        height={80}
      />
    </div>
    <p>{description} </p>
  </div>


  );
}
