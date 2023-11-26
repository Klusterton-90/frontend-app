import React from "react";
import styles from "./Modal.module.scss";
import ModalLayout from "./ModalLayout";
import Image from "next/image";
import DashboardButton from "../DashboardButton/DashboardButton";

export default function ReminderModal({ show, showModal, hideModal }) {
  return (
    <div
      className={styles.notificationContainer}
      style={{ display: show ? "block" : "none" }}
    >
      <Image
        src={"/images/notification-calendar.svg"}
        alt="notification"
        width={200}
        height={200}
      />
      <h3>Celotan, 1g 08:00AM Pill!</h3>
      <h3>Time to get your meds</h3>
      <h4>Make sure you take medication before time elapses</h4>
      <p>
        <span>09:33</span>sec remaining
      </p>
      <div className={styles.buttonRow}>
        <DashboardButton
          buttonText={"Cancel"}
          outline={true}
          onClick={hideModal}
        />
        <DashboardButton
          buttonText={"Taken"}
          outline={false}
          onClick={showModal}
        />
      </div>
    </div>
  );
}
