import styles from "./AboutUsBanner.module.css";
export default function AboutUsBanner() {
  return (
    <div className={styles.container}>
      <img src="/images/banner/About-us.webp" className={styles.img}></img>
    </div>
  );
}
