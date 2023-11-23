import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import LandingButton from "../LandingButton/LandingButton";

const headerOptions = ["Home", "About", "Contact", "Login"];

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>logo</div>
      <div className={styles.headerRight}>
        {headerOptions.map((option, index) => {
          return (
            <Link key={index} href={""}>
              <p>{option}</p>
            </Link>
          );
        })}
        <LandingButton text={"Sign Up"} />
      </div>
    </header>
  );
}
