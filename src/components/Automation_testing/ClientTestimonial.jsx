import styles from "./ClientTestimonial.module.css";

export default function ClientTestimonial() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialContainer}>
        <p className={styles.quote}>
          "QAonCloud helped us cut QA time by 60% and improve test reliability."
        </p>
        <div className={styles.underline}></div>
        <p className={styles.client}>Happy Client</p>
      </div>
    </section>
  );
}
