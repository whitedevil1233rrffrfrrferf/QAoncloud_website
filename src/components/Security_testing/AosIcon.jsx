"use client";
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import BoxIcon from "../Common/icon/BoxIcon";
import styles from "./AosIcon.module.css";
export default function AosIcon({ heading, icon, description }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      // whether animation should happen only once
    });
  }, []);
  return (
    <div className={styles.row_wrapper} data-aos="fade-up">
      <BoxIcon icon={icon} bgColor="#eaf4ff" />
      <div className={styles.text_wrapper}>
        <span>{heading}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
