import Image from "next/image";
import styles from "./ImageComponent.module.css";
export default function ImageComponent() {
  return (
    <div className={styles.container}>
      <h2>Start your journey with QAoncloud ?</h2>
      <div>
        <Image
          src="/images/how_we_work/how-we-work.png"
          width={400}
          height={400}
          alt="How-we-work"
          className={styles.img}
        />
      </div>
    </div>
  );
}
