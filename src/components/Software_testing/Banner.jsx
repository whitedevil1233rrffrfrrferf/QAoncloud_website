import Head from "next/head";
import styles from "./banner.module.css";
import Image from "next/image";

import Button from "../Common/Button/Button";

export default function Banners() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.text}>
            <h1>
              <span className={styles.bold}>Impact-Driven Software </span>
              <br />
              <span className={styles.accent}>Testing Services</span>
            </h1>
            <p className={styles.para_text}>
              Accelerate your product launch with our end-to-end QA solutions
              tailored to your business goals.
            </p>
            <div className={styles.stats}>
              <Button content="Get A Free Consultation" bgColor="#2f8fff" />
              <Button content="Get a Free Test Audit" bgColor="#ff6f61" />
              <div className={`${styles.button} ${styles.audit}`}></div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src="/images/banner/software_testing.jpg"
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
