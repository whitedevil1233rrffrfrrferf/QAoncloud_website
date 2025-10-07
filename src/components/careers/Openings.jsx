import styles from "./Openings.module.css";
export default function ContactUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Want to join our team? </h2>
      <p className={styles.subheading}>Send your resume to us via email</p>
      <a href="mailto:yourcompany@example.com" className={styles.button}>
        Upload Resume
      </a>
    </div>
  );
}
