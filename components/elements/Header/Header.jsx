import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import LandingButton from "../LandingButton/LandingButton";
import { useRouter } from "next/router";
import { Routes } from "@/constants/navigation";
import Logo from "../Logo";

const headerOptions = [
  {
    title: 'Home',
    url: Routes.LandingPage,
  },
  {
    title: 'About',
    url: Routes.LandingPage,
  },
  {
    title: 'Contact',
    url: Routes.LandingPage,
  },
  {
    title: 'Login',
    url: Routes.Login,
  },
];

export default function Header() {
  // router
  const router = useRouter();

  // handle button click
  const handleClick = () =>{
    router.push(Routes.Signup);
  }
  return (
    <header className={styles.headerContainer}>
      <Logo/>
      <div className={styles.headerRight}>
        {headerOptions.map((option, index) => {
          return (
            <Link key={index} href={option.url}>
              <p>{option.title}</p>
            </Link>
          );
        })}
        <LandingButton text={"Sign Up"} onClick={handleClick} />
      </div>
    </header>
  );
}
