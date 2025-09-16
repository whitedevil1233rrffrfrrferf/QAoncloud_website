// components/IconCard.js
import styles from "./iconCard.module.css";

export default function IconCard({ Icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
