import Head from "next/head";
import styles from "./Banner.module.css";
import Image from "next/image";

import Button from "@/components/Common/Button/Button";

export default function Banners({ heading1, heading2, para, img }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.text}>
            <h1>
              <span className={styles.bold}>{heading1}</span>
              <br />
              <span className={styles.accent}>{heading2}</span>
            </h1>
            <p className={styles.para_text}>{para}</p>
            <div className={styles.stats}>
              <Button content="Get A Free Consultation" bgColor="#2f8fff" />
              <Button content="Get a Free Test Audit" bgColor="#ff6f61" />
              <div className={`${styles.button} ${styles.audit}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src={img}
            alt="QA team illustration"
            width={700}
            height={700}
            style={{ maxWidth: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
