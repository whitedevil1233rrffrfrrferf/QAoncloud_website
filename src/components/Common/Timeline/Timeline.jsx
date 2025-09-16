"use client";
import BoxIcon from "../icon/BoxIcon";
import styles from "./Timeline.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Timeline({ icon, step, title, description, isLast }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className={styles.stepWrapper}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <i className={`${icon} ${styles.iconClass}`}></i>
        </div>
        {!isLast && <div className={styles.verticalLine} />}
      </div>

      <div className={styles.content} data-aos="fade-up">
        <div className={styles.contentRow}>
          <span className={styles.stepNumber}>{step}</span>
          <span className={styles.stepTitle}>{title}</span>
        </div>

        <p className={styles.stepDescription}>{description}</p>
      </div>
    </div>
  );
}
