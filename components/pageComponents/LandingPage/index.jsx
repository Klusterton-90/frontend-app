import React from "react";
import styles from "./LandingPage.module.scss";
import Header from "@/components/elements/Header/Header";
import background from "@/public/images/landingImage.png";
import Image from "next/image";
import LandingButton from "@/components/elements/LandingButton/LandingButton";
import Footer from "@/components/elements/Footer/Footer";
import LandingBody from "@/components/elements/LandingBody/LandingBody";

export default function LandingPage() {
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.landingTop}>
        <Image
          src={background}
          alt="background image"
          className={styles.backgroundImage}
          layout="fill"
          quality={100}
        />
        <Header />

        <div className={styles.landingTopTextContainer}>
          <h1>Spend Less Time Thinking</h1>
          <h1> About Medications</h1>
          <p>
            The fastest, most secure and accurate way to track all of your meds
            and
          </p>
          <p>measurements.</p>
          <div className={styles.margin} />
          <LandingButton text={"Get Started"} />
        </div>
      </div>
      <LandingBody/>
      <Footer />
    </div>
  );
}
