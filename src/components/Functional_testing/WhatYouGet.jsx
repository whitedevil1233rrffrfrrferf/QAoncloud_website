"use client";
import styles from "./WhatYouGet.module.css";
import { FiCheckCircle, FiShield, FiUsers } from "react-icons/fi";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
export default function WhatYouGet() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What You Get</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card} data-aos="fade-right">
          <h3 className={styles.cardTitle}>15× ROI</h3>
          <p className={styles.subtitle}>
            Proven return on investment through early bug detection
          </p>
          <ul className={styles.list}>
            <li>
              <FiCheckCircle className={styles.icon} /> Speed & Quality
            </li>
            <li>
              <FiCheckCircle className={styles.icon} /> Cost Efficiency
            </li>
            <li>
              <FiCheckCircle className={styles.icon} /> Fully Managed Service
            </li>
          </ul>
        </div>

        <div className={styles.card} data-aos="fade-left">
          <h3 className={styles.cardTitle}>Security & Compliance</h3>
          <p className={styles.subtitle}>Your data and IP are protected</p>
          <ul className={styles.list}>
            <li>
              <FiShield className={styles.icon} /> NDA Protection
            </li>
            <li>
              <FiShield className={styles.icon} /> IP Security
            </li>
            <li>
              <FiUsers className={styles.icon} /> Gender-Diverse Teams
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
