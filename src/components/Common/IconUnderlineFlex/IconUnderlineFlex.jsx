"use client";
import styles from "./IconUnderlineFlex.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function IconUnderlineFlex({ icon, title, description }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.service}>
      <img
        src={icon}
        alt={title}
        className={styles.icon}
        data-aos="fade-right"
      />
      <div data-aos="fade-left">
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.underline}></div>
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
}
