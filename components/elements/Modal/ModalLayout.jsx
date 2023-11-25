import React from "react";
import styles from "./Modal.module.scss";

export default function ModalLayout({children, show}) {
  return (
    <div className={styles.modal} style={{ display: show ? "block" : "none" }}>
      <div className={styles.modalContainer}>
        {children}
      </div>
    </div>
  );
}
