import React from "react";
import styles from "./Breadcrumbs.module.scss";
import SearchBar from "@/components/elements/SearchBar/SearchBar";
import Image from "next/image";

export default function Breadcrumbs() {
  return (
    <div className={styles.breadcrumbsContainer}>
      <SearchBar />
      <div className={styles.breadcrumbsRight}>
        <Image
          src={"/images/notification.svg"}
          alt="notifications"
          width={36}
          height={36}
        />
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}></div>
          <Image
            src={"/images/arrow-down.svg"}
            alt="dropdown"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
