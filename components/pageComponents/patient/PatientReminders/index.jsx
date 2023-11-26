import React, { useEffect, useState } from "react";
import styles from "./PatientReminders.module.scss";
import Layout from "@/components/layouts/Layout/Layout";
import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DashboardButton from "@/components/elements/DashboardButton/DashboardButton";
import Modal from "@/components/elements/Modal/Modal";

// localizer
const localizer = momentLocalizer(moment);

// event component
function EventComponent({ event }) {
  return (
    <div className={styles.eventComponent}>
      <h3>{event.title}</h3>
      <p>{event.id}</p>
      <p>08:00-08:30</p>
    </div>
  );
}

export default function PatientReminders() {
  // events
  const aDate = new Date(2023, 10, 26, 18, 6, 0);

  const now = new Date();

  const events = [
    {
      id: 0,
      title: "All Day Event very long title",
      allDay: true,
      start: new Date(2023, 12, 0),
      end: new Date(2023, 12, 1),
    },
    {
      id: 1,
      title: "Cefotan, 1g",
      start: new Date(2023, 12, 7),
      end: new Date(2023, 12, 10),
    },

    {
      id: 2,
      title: "Aminosyn",
      start: new Date(2023, 11, 13, 8, 0, 0),
      end: new Date(2023, 11, 13, 8, 30, 0),
    },
  ];
  // show or hide modal
  const [show, setShow] = useState(false);

  // show modal
  const showModal = () => {
    setShow((prev) => (prev = true));
  };
  // hide modal
  const hideModal = () => {
    setShow((prev) => (prev = false));
  };

  // show or hide reminder
  const [showReminder, setShowReminder] = useState(false);

  // show modal
  const showReminderModal = () => {
    setShowReminder((prev) => (prev = true));
  };
  // hide modal
  const hideReminderModal = () => {
    setShowReminder((prev) => (prev = false));
  };

  const checker = now.getMinutes() == aDate.getMinutes();
  useEffect(() => {
    checker && showReminderModal();
    console.log(aDate.getMinutes());
    console.log(now.getMinutes());

    const delay = aDate.getTime() - Date.now();

    // If the target time is in the future, set a timeout to show the modal
    if (delay > 0) {
      const timeoutId = setTimeout(() => {
        showReminderModal();
      }, delay);

      // Clear the timeout if the component unmounts before the modal is shown
      return () => clearTimeout(timeoutId);
    }
  }, [checker, aDate, now]);

  return (
    <Layout mode="patient">
      <Breadcrumbs />
      <Modal
        show={show}
        handleClose={hideModal}
        handleReminderClose={hideReminderModal}
        showReminder={showReminder}
      />
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
          components={{ event: EventComponent }}
        />
      </div>
    </Layout>
  );
}
