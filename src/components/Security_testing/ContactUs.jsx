import styles from "./ContactUs.module.css";
export default function ContactUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Get in touch with our Experts </h2>
      <p className={styles.subheading}>
        Reach out for a free consultation or security audit.
      </p>
      <div className={styles.button}>Contact Us</div>
    </div>
  );
}
