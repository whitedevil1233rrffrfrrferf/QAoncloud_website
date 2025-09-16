import BoxIcon from "../icon/BoxIcon";
import styles from "./SliderCard.module.css";
export default function SliderCard({ title, description, icon }) {
  return (
    <div className={styles.slider_container}>
      <div className={styles.sliderCard}>
        <BoxIcon icon={icon} size="3.7rem" fontSize="1.7rem" />
        <div className={styles.sliderCardContent}>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
    </div>
  );
}
