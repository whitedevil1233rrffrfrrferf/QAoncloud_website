import Image from "next/image";
import Button from "../Common/Button/Button";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h1>
            Get Your App Tested By
            
            Remote , Flexible ,
            On-Demand Teams
          </h1>
          <p>
            QAoncloud offers tailor-made testing solutions to fit your business
            needs and guarentees huge benefits compared to the in-house team.
            Our fully competent workforce delivers highly flexible, reliable
          </p>

          <div className={styles.buttons}>
            <Button content="Contact Us" bgColor="#2f8fff" />
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/banner/software_testing.jpg"
              alt="Software testing team illustration"
              width={550}
              height={400}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
