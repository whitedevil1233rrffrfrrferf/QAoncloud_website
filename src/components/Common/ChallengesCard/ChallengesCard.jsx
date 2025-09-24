import styles from "./ChallengesCard.module.css";
export default function ChallengesCard({ icon, title, description }) {
  return (
    <div className={styles.challenge_card}>
      <div className={styles.challenge_icon}>{icon}</div>
      <h3 className={styles.challenge_title}>{title}</h3>
      <p className={styles.challenge_description}>{description}</p>
    </div>
  );
}
