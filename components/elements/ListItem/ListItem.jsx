import React from "react";
import styles from "./ListItem.module.scss";
import Image from "next/image";

export default function ListItem({ selected, onClick, icon, title }) {
  return (
    <div
      onClick={onClick}
      className={styles.listItemContainer}
      style={{
        backgroundColor: selected ? "#1B55AD" : "#FFFFFF",
        color: selected ? "#FFFFFF" : "#1E1E1E",
      }}
    >
      <div>{icon}</div>
      <p>{title}</p>
    </div>
  );
}
