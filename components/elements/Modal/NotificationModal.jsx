import { React, useState } from "react";
import styles from "./Modal.module.scss";
import Image from "next/image";
import DashboardButton from "../DashboardButton/DashboardButton";
import AddNewReminderModal from "./AddNewReminderModal";

export default function NotificationModal({
  show,
  onClickLeft,
  onClickRight,
  title,
  subtext,
  medicationDetails,
  buttonTextLeft,
  buttonTextRight,
}) {
  return (
    <div className={styles.notificationContainer}>
      <Image
        src={"/images/successful.svg"}
        alt="success"
        width={200}
        height={200}
      />
      <div>
        <h3>{title}</h3>
        <h4>{subtext}</h4>
      </div>
      <h3>{medicationDetails}</h3>
      <div className={styles.buttonRow}>
        <DashboardButton
          buttonText={buttonTextLeft}
          outline={true}
          onClick={onClickLeft}
        />
        <DashboardButton
          buttonText={buttonTextRight}
          outline={false}
          onClick={onClickRight}
        />
      </div>
    </div>
  );
}
