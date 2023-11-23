import React from "react";
import styles from "./SearchBar.module.scss";
import Image from "next/image";

export default function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <Image src={"/images/search.svg"} alt="search" width={24} height={24}/>
      <input
      className={styles.input}
        placeholder="search for patients, medicine, reminder"
        type="text"
      />
    </div>
  );
}
