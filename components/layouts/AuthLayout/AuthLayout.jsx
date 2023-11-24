import React from "react";
import styles from "./AuthLayout.module.scss";
import Image from "next/image";
import Container from "../Container/Container";
import Logo from "@/components/elements/Logo";

export default function AuthLayout({ rightContent, login }) {
  return (
    <Container>
      {login ? (
        <div className={styles.authLayout}>
          <div className={styles.loginLeftContainer}>{rightContent}</div>
          <div className={styles.loginRightContainer}>
            <Image
              src={"/images/login.svg"}
              alt="image"
              layout="fill"
              objectFit="cover"
              className={styles.loginImage}
            />
            <Logo/>
          </div>
        </div>
      ) : (
        <div className={styles.authLayout}>
          <div className={styles.leftContainer}>
            <Image
              src={"/images/person.svg"}
              alt="image"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
           <Logo/>
          </div>
          <div className={styles.rightContainer}>{rightContent}</div>
        </div>
      )}
    </Container>
  );
}
