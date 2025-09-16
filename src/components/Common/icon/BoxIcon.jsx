import styles from "./BoxIcon.module.css";
export default function BoxIcon({
  icon,
  bgColor = "#eaf4ff",
  size = "50px",
  fontSize = "1.5rem",
}) {
  return (
    <div className={styles.featureItem}>
      <div
        className={styles.iconWrapper}
        style={{ backgroundColor: bgColor, width: size, height: size }}
      >
        <i className={`${icon} ${styles.icon}`} style={{ fontSize }}></i>
      </div>
    </div>
  );
}
