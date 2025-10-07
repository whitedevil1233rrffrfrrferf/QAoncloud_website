"use client";
import Image from "next/image";
import styles from "./FeaturesSection.module.css";

const features = [
  {
    icon: "/images/Industry Icons/indus-1/Telecommunication/Functional testing - 1.png",
    text: "Functional testing ensures the application is fully functional as per the requirements",
  },
  {
    icon: "/images/Industry Icons/indus-1/Telecommunication/Eliminating bugs  2.png",
    text: "Eliminating bugs and glitches",
  },
  {
    icon: "/images/Industry Icons/indus-1/Telecommunication/frontend and backend - 3.png",
    text: "Ensures seamless integrations of both frontend and backend",
  },
  {
    icon: "/images/Industry Icons/indus-1/Telecommunication/loading time - 4.png",
    text: "Improves loading time and overall app capabilities",
  },
  {
    icon: "/images/Industry Icons/indus-1/Telecommunication/security and privacy - 5.png",
    text: "Guarantees security and privacy of user data",
  },
  {
    icon: "/images/Industry Icons/indus-1/Telecommunication/UIUX - 6.png",
    text: "Provides robust third-party integrations for a seamless UI/UX",
  },
];

export default function FeaturesSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Perks of QA Testing for Communication</h2>
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
