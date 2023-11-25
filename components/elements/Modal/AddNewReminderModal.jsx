import React, { useRef, useState } from "react";
import styles from "./Modal.module.scss";
import Image from "next/image";
import Select from "../Select/Select";
import Search from "../Search/Search";
import DashboardButton from "../DashboardButton/DashboardButton";
import NotificationModal from "./NotificationModal";

const medType = ["Syrup", "Drops", "Pill", "Powder", "Injection"];

const duration = ["One month", "Two months"];

export default function AddNewReminderModal({
  showNotification,
  handleClose,
  show,
}) {
  // description state
  const [description, setDescription] = useState("");

  // show or hide modal
  // const [showNotification, setShowNotification] = useState(false);

  // show modal
  // const showModal = () => {
  //   handleClose();
  //   setShowNotification(true);
  // };

  // // hide modal
  // const hideModal = () => {
  //   setShowNotification(false);
  // };

  return (
    <div
      className={styles.AddNewReminderModal}
      style={{ display: show ? "block" : "none" }}
    >
      <div className={styles.heading}>
        <div></div>
        <h3>Add New Reminder</h3>
        <div onClick={handleClose} className={styles.closeIcon}>
          <Image src={"/images/close.svg"} alt="close" width={24} height={24} />
        </div>
      </div>
      <div className={styles.reminderInfoContainer}>
        <div className={styles.infoContainerLeft}>
          {/* select med type */}
          <Select
            list={medType}
            label={"Type"}
            placeholder={"Select Type"}
            subtext={"What form is the med?"}
          />

          {/* search for medicine */}
          <Search
            list={medType}
            label={"Medicine"}
            subtext={"What med would you like to add?"}
            placeholder={"Search or type "}
          />

          {/* select duration */}
          <Select
            label={"Duration"}
            subtext={"How long will you take this med?"}
            list={duration}
            placeholder={"Select duration"}
          />
          {/* select first dose */}
          <Select
            label={"First Dose"}
            subtext={"When do you need to take the first dose?"}
            list={duration}
            placeholder={"Select time"}
          />
        </div>
        <div className={styles.infoContainerRight}>
          {/* description */}
          <div className={styles.inputContainer}>
            <label>
              Add Description <span>(Optional)</span>
            </label>
            <input
              placeholder=""
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          {/* diagnosis search */}
          <Search
            list={medType}
            label={"Diagnosis"}
            subtext={"What are you taking the med for?"}
            placeholder={"Search or type "}
          />

          {/* doses select */}
          <Select
            label={"Doses"}
            subtext={"How many times will you take it?"}
            list={duration}
            placeholder={"Select doses"}
          />
          {/* second dose select */}
          <Select
            label={"Second Dose"}
            subtext={"Optional"}
            list={duration}
            placeholder={"Select time"}
          />

          <div className={styles.buttonRow}>
            <DashboardButton
              buttonText={"Cancel"}
              outline={true}
              onClick={handleClose}
            />
            <DashboardButton
              buttonText={"Save"}
              outline={false}
              onClick={showNotification}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
