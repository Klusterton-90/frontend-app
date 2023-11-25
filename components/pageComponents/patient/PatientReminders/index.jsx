import React, { useState } from "react";
import styles from "./PatientReminders.module.scss";
import Layout from "@/components/layouts/Layout/Layout";
import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DashboardButton from "@/components/elements/DashboardButton/DashboardButton";
import AddNewReminderModal from "@/components/elements/Modal/AddNewReminderModal";
import Modal from "@/components/elements/Modal/Modal";

// localizer
const localizer = momentLocalizer(moment);

export default function PatientReminders() {
  // events
  const events = [
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title",
    },
  ];

  // show or hide modal
  const [show, setShow] = useState(false);



  // show modal
  const showModal = () => {
    setShow(true);
  };
  // hide modal
  const hideModal = () => {
    setShow(false);
  };

 
  return (
    <Layout mode="patient">
      <Breadcrumbs />
     <Modal show={show} handleClose={hideModal}/>
      <div className={styles.addReminderButton}>

      <DashboardButton
        buttonText={"Add Reminder"}
        outline={false}
        onClick={showModal}
        />
        </div>
      <div className={styles.calendarContainer}>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "100vh" }}
        />
      </div>
    </Layout>
  );
}
