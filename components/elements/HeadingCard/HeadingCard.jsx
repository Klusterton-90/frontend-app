import React from "react";
import styles from "./HeadingCard.module.scss";

export default function HeadingCard({ heading, number }) {
  return (
    <div className={styles.topRow}>
      <h3>
        {heading} {number && <span>({number})</span>}
      </h3>
    </div>
  );
}
