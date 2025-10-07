"use client";
import Image from "next/image";
import styles from "./FeaturesSection.module.css";

const features = [
  {
    icon: "/images/Industry Icons/indus-1/FinTech/customer experience - 1.png",
    text: "Enhance user interface for improved customer experience",
  },
  {
    icon: "/images/Industry Icons/indus-1/FinTech/Launch bug - 2.png",
    text: "Launch bug-free and competitive products",
  },
  {
    icon: "/images/Industry Icons/indus-1/FinTech/customer engagement - 3.png",
    text: "Increase customer engagement with a user-centric interface",
  },
  {
    icon: "/images/Industry Icons/indus-1/FinTech/secure transaction - 4.png",
    text: "Secure transaction and sensitive data with seamless integration",
  },
  {
    icon: "/images/Industry Icons/indus-1/FinTech/app performance - 5.png",
    text: "Eliminate bugs and glitches for elevated app performance",
  },
];

export default function FeaturesSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Perks of QA Testing for Fintech</h2>
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
