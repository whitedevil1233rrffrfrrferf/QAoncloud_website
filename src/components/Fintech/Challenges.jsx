import { FiShield, FiFileText, FiUsers, FiClock } from "react-icons/fi";

import styles from "./Challenges.module.css";
import ChallengesCard from "../Common/ChallengesCard/ChallengesCard";

export default function Challenges() {
  const challenges = [
    {
      icon: <FiShield size={24} />,
      title: "Security & Compliance",
      description:
        "Ensuring compliance with strict financial regulations and maintaining data security.",
    },
    {
      icon: <FiFileText size={24} />,
      title: "Complex Integrations",
      description:
        "Testing intricate systems with multiple third-party integrations and APIs.",
    },
    {
      icon: <FiUsers size={24} />,
      title: "User Experience",
      description:
        "Delivering seamless experiences across all digital touchpoints and devices.",
    },
    {
      icon: <FiClock size={24} />,
      title: "Real-time Processing",
      description:
        "Ensuring high-performance testing for real-time transactions and data processing.",
    },
  ];

  return (
    <section className={styles.challenges_section}>
      <div className={styles.challenges_container}>
        <h2 className={styles.challenges_heading}>Challenges in Banking</h2>
        <p className={styles.challenges_subtitle}>
          Understanding the unique testing challenges that banking organizations
          face
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
