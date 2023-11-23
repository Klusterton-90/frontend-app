import React from "react";
import styles from "./LandingBody.module.scss";
import Image from "next/image";
import AboutCard from "../AboutCard/AboutCard";
import BenefitsCard from "../BenefitsCard/BenefitsCard";

const aboutRow = [
  {
    icon: "/images/clock.svg",
    title: "Med & Refill Reminders",
    description: "Customized dosing schedules and notification sounds.",
  },
  {
    icon: "/images/clipboard.svg",
    title: "Scheduling & Tracking",
    description: "Tracking, measurements and appointments in one place.",
  },
  {
    icon: "/images/healthcare.svg",
    title: "Measurement Trackers",
    description: "Track health and share with your health care providers.",
  },
];

const benefitsColumn = [
  {
    icon: "/images/clinic.svg",
    title: "Modern Clinic",
    description:
      " Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
  },
  {
    icon: "/images/bills.svg",
    title: "No Consultation Fee",
    description:
      " Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
  },
  {
    icon: "/images/patients.svg",
    title: "Professional Treatment",
    description:
      " Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam.......",
  },
];

export default function LandingBody() {
  return (
    <div className={styles.landingBody}>
      <div className={styles.bodyTop}>
        <h3>
          The Best Medication{" "}
          <span className={styles.reminderText}>Reminder</span> App
        </h3>
        <p>The fastest, most secure and accurate way to track all of your</p>
        <p>meds and measurements.</p>
      </div>
      <div className={styles.aboutRow}>
        {aboutRow.map((item, index) => {
          return (
            <AboutCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
      <div className={styles.bodyBottom}>
        <Image src={"/images/Group 44.svg"} alt="" width={568} height={608} />
        <div >
          <h3 className={styles.benefitsHeading}>
            The Benefits of Utilizing Medication{" "}
            <span className={styles.reminderText}>Reminder</span> App{" "}
          </h3>
        <div className={styles.benefitsColumn}>
          {benefitsColumn.map((item, index) => {
            return (
              <BenefitsCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            );
        })}
        </div>
        </div>
      </div>
    </div>
  );
}
