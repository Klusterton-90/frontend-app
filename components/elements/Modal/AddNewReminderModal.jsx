import React, { useRef, useState } from "react";
import styles from "./Modal.module.scss";
import Image from "next/image";
import Select from "../Select/Select";
import Search from "../Search/Search";
import DashboardButton from "../DashboardButton/DashboardButton";

const medType = ["Syrup", "Drops", "Pill", "Powder", "Injection"];

const duration = ["One month", "Two months"];

export default function AddNewReminderModal({
  showNotification,
  handleClose,
  show,
}) {
  // description state
  const [description, setDescription] = useState("");

  // values
  const [doseDuration, setDoseDuration] = useState("");
  const [medicineType, setMedicineType] = useState("");
  const [medicine, setMedicine] = useState("");
  const [numberOfDoses, setNumberOfDoses] = useState("");
  const [firstDose, setFirstDose] = useState("");
  const [secondDose, setSecondDose] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  // get values
  const getDuration = (duration) => {
    setDoseDuration(duration);
  };

  const getMedType = (type) => {
    setMedicineType(type);
  };
  const getMedicine = (medicine) => {
    setMedicine(medicine);
  };
  const getNumberOfDoses = (numberOfDoses) => {
    setNumberOfDoses(numberOfDoses);
  };
  const getFirstDose = (firstDose) => {
    setFirstDose(firstDose);
  };
  const getSecondDose = (secondDose) => {
    setSecondDose(secondDose);
  };
  const getDiagnosis = (diagnosis) => {
    setDiagnosis(diagnosis);
  };

  const showValues = () => {
    console.log([
      description,
      doseDuration,
      medicine,
      medicineType,
      numberOfDoses,
      firstDose,
      secondDose,
      diagnosis,
    ]);
  };

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
            getValue={getMedType}
          />

          {/* search for medicine */}
          <Search
            list={medType}
            label={"Medicine"}
            subtext={"What med would you like to add?"}
            placeholder={"Search or type "}
            getValue={getMedicine}
          />

          {/* select duration */}
          <Select
            label={"Duration"}
            subtext={"How long will you take this med?"}
            list={duration}
            placeholder={"Select duration"}
            getValue={getDuration}
          />
          {/* select first dose */}
          <Select
            label={"First Dose"}
            subtext={"When do you need to take the first dose?"}
            list={duration}
            placeholder={"Select time"}
            getValue={getFirstDose}
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
            getValue={getDiagnosis}
          />

          {/* doses select */}
          <Select
            label={"Doses"}
            subtext={"How many times will you take it?"}
            list={duration}
            placeholder={"Select doses"}
            getValue={getNumberOfDoses}
          />
          {/* second dose select */}
          <Select
            label={"Second Dose"}
            subtext={"Optional"}
            list={duration}
            placeholder={"Select time"}
            getValue={getSecondDose}
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
              onClick={() => {
                showNotification();
                showValues();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
