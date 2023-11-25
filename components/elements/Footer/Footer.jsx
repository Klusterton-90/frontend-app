import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../Logo";
import Image from "next/image";

const footerRightContent = [
  {
    title: "While",
    one: "while",
    two: "while",
    three: "while",
    four: "while",
  },
  {
    title: "While",
    one: "while",
    two: "while",
    three: "while",
    four: "while",
  },
  {
    title: "While",
    one: "while",
    two: "while",
    three: "while",
    four: "while",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.contentLeft}>
          <Logo />
          <p>
            While mirth large of on front. Ye he greater related adapted proceed
            <br />
            entered an. Through it examine express promise no. Past add size
            <br />
            game cold girl off how old
          </p>
          <div className={styles.socials}>
            <Image
              src={"/images/Facebook.svg"}
              alt="facebook"
              width={36}
              height={36}
            />
            <Image
              src={"/images/Twitter.svg"}
              alt="twitter"
              width={36}
              height={36}
            />
            <Image
              src={"/images/Linkedin.svg"}
              alt="linkedin"
              width={36}
              height={36}
            />
            <Image
              src={"/images/Instagram.svg"}
              alt="instagram"
              width={36}
              height={36}
            />
          </div>
        </div>
        <div className={styles.contentRight}>
          {footerRightContent.map((content, index) => {
            return (
              <div key={index}>
                <h3>{content.title}</h3>
                <p>{content.one}</p>
                <p>{content.two}</p>
                <p>{content.three}</p>
                <p>{content.four}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <p className={styles.footerCopyright}>
        © Copyright 2020. All Rights Reserved by Klusterthon - 90
      </p>
    </footer>
  );
}
