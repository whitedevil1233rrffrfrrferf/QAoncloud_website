// components/TestimonialCard.js
import styles from "./testimonialCard.module.css";

export default function TestimonialCard({
  quote,
  name,
  title,
  companyLink,
  companyName,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>❝</div>
      <span className={styles.quote}>"{quote}"</span>
      <hr className={styles.divider} />
      <p className={styles.name}>{name}</p>
      <p className={styles.title}>{title}</p>
      <a href={companyLink} className={styles.company}>
        {companyName}
      </a>
    </div>
  );
}
