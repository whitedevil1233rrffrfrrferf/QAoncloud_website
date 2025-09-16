import styles from "./RoundedIconCard.module.css";

export default function RoundedIconCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconCircle}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
