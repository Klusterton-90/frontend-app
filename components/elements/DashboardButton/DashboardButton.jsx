import React from "react";
import styles from "./DashboardButton.module.scss";

export default function DashboardButton({ outline, buttonText, onClick }) {
  return (
    <button
    onClick={onClick}
      className={styles.button}
      style={{
        backgroundColor: outline ? "transparent" : "#1B55AD",
        border: outline ? "1px solid #1B55AD" : "none",
        color: outline ? "#1B55AD" : "#FFFFFF",
      }}
    >
      <p>{buttonText}</p>
    </button>
  );
}
