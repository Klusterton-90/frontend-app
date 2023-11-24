import React from "react";
import styles from "./PatientReminders.module.scss";
import Layout from "@/components/layouts/Layout/Layout";
import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

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
  return (
    <Layout mode="patient">
      <Breadcrumbs />
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
