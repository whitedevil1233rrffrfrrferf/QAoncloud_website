import styles from "./WhyQAoncloud.module.css";
export default function ReverseCard({
  title,
  description,
  icon,
  reverse,
  grayBg,
}) {
  return (
    <div
      className={`${styles.whyItem} ${reverse ? styles.reverse : ""} ${
        grayBg ? styles.grayBg : ""
      }`}
    >
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.icon}>
        <img src={icon} alt={title} />
      </div>
    </div>
  );
}
