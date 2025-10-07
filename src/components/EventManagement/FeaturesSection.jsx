"use client";
import Image from "next/image";
import styles from "./FeaturesSection.module.css";

const features = [
  {
    icon: "/images/Industry Icons/indus-1/Event management/Help track, record - 1.png",
    text: "Higher customer engagement and retention",
  },
  {
    icon: "/images/Industry Icons/indus-1/Event management/data are secured - 2.png",
    text: "More significant profits with an increased success rate",
  },
  {
    icon: "/images/Industry Icons/indus-1/Event management/virtual events - 3.png",
    text: "Bug-free user experience",
  },
  {
    icon: "/images/Industry Icons/indus-1/Event management/performance of all functionalities - 4.png",
    text: "Optimize performance, functionalities, and usability",
  },
];

export default function FeaturesSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Perks of QA Testing for Event Management Application
      </h2>
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
