import React from "react";
import styles from "./AuthLayout.module.scss";
import Image from "next/image";
import Container from "../Container/Container";

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
            <h3>MAWA LOGO</h3>
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
            <h3>MAWA LOGO</h3>
          </div>
          <div className={styles.rightContainer}>{rightContent}</div>
        </div>
      )}
    </Container>
  );
}
