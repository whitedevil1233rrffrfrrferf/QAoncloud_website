import {
  FiShoppingCart,
  FiCreditCard,
  FiTruck,
  FiShield,
} from "react-icons/fi";

import styles from "./Challenges.module.css";
import ChallengesCard from "../Common/ChallengesCard/ChallengesCard";

export default function Challenges() {
  const challenges = [
    {
      icon: <FiShoppingCart size={24} />,
      title: "High Traffic & Scalability",
      description:
        "Handling heavy user traffic during sales and peak seasons without downtime or slow performance.",
    },
    {
      icon: <FiCreditCard size={24} />,
      title: "Payment Reliability",
      description:
        "Ensuring secure and seamless transactions across multiple payment gateways and methods.",
    },
    {
      icon: <FiTruck size={24} />,
      title: " Delivery Management",
      description:
        "Coordinating orders, inventory, and timely deliveries while avoiding errors and delays.",
    },
    {
      icon: <FiShield size={24} />,
      title: "Fraud & Data Security",
      description:
        "Protecting customer information and preventing fraudulent activities across platforms.",
    },
  ];

  return (
    <section className={styles.challenges_section}>
      <div className={styles.challenges_container}>
        <h2 className={styles.challenges_heading}>
          Challenges in Event Management
        </h2>
        <p className={styles.challenges_subtitle}>
          Understanding the unique testing challenges that Event Management
          organizations face
        </p>

        <div className={styles.challenges_grid}>
          {challenges.map((item, index) => (
            <ChallengesCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
