"use client";
import Image from "next/image";
import styles from "./FeaturesSection.module.css";

const features = [
  {
    icon: "/images/Industry Icons/indus-1/AI/quality_data.png",
    text: "Increases AI efficiency with quality data training and ai testing tools",
  },
  {
    icon: "/images/Industry Icons/indus-1/AI/accurate_outputs.png",
    text: "Use data training for accurate outputs",
  },
  {
    icon: "/images/Industry Icons/indus-1/AI/user_experience.png",
    text: "Enhance user experience with mission-critical data",
  },
  {
    icon: "/images/Industry Icons/indus-1/AI/security_of_ai_tech.png",
    text: "Improve performance and security of AI tech",
  },
];

export default function FeaturesSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Perks of QA testing for E-Commerce</h2>
      <section className={styles.section}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={feature.icon}
                alt={feature.text}
                width={60}
                height={60}
                className={styles.icon}
              />
              <p className={styles.text}>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
