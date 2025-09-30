"use client";
import styles from "./ContactSection.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ContactForm() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1s)
    });
  }, []);
  return (
    <div className={styles.form} data-aos="fade-left">
      <h2 className={styles.heading}>Contact Us</h2>

      <form>
        <input type="text" placeholder="Name" className={styles.input} />
        <input type="email" placeholder="E-mail" className={styles.input} />
        <input type="text" placeholder="Phone" className={styles.input} />
        <input
          type="text"
          placeholder="Company Name"
          className={styles.input}
        />
        <input type="text" placeholder="Role" className={styles.input} />
        <textarea
          placeholder="Requirements"
          className={styles.textarea}
        ></textarea>

        {/* Replace with real reCAPTCHA component later */}
        <div className={styles.captchaBox}>
          <p style={{ color: "red", fontSize: "14px" }}>
            Localhost is not in the list of supported domains for this site key.
          </p>
          <div className={styles.fakeCaptcha}>reCAPTCHA box</div>
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
