// components/TestingServiceCard.js
import styles from "./LeftAlignedCard.module.css";

export default function LeftAlignedCard({ Icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.icon}>
          <Icon />
        </div>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
}
