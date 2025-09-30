"use client";
import styles from "./ContactSection.module.css";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ContactInfo() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1s)
    });
  }, []);
  return (
    <div className={styles.info} data-aos="fade-right">
      <h2 className={styles.heading}>Find Us Easy Way</h2>

      <div className={styles.item}>
        <FaLocationDot className={styles.icon} />
        <div className={styles.text}>
          <h3>Address</h3>
          <p>
            39159 Paseo Padre Pkwy ste 207, <br />
            Fremont, California 94538, USA.
          </p>
        </div>
      </div>

      <div className={styles.item}>
        <FaPhone className={styles.icon} />
        <div className={styles.text}>
          <h3>Phone</h3>
          <p>+1 (415) 573-3307</p>
        </div>
      </div>

      <div className={styles.item}>
        <FaEnvelope className={styles.icon} />
        <div className={styles.text}>
          <h3>Email</h3>
          <p>contactus@qaoncloud.com</p>
        </div>
      </div>
    </div>
  );
}
