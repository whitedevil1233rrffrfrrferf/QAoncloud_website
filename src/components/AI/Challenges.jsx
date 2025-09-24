import { FiCpu, FiDatabase, FiAlertTriangle, FiUsers } from "react-icons/fi";

import styles from "./Challenges.module.css";
import ChallengesCard from "../Common/ChallengesCard/ChallengesCard";

export default function Challenges() {
  const challenges = [
    {
      icon: <FiCpu size={24} />,
      title: "Model Accuracy",
      description:
        "Ensuring AI models deliver reliable predictions without bias or unintended errors.",
    },
    {
      icon: <FiDatabase size={24} />,
      title: "Data Quality",
      description:
        "Managing vast datasets while ensuring cleanliness, consistency, and relevance for training.",
    },
    {
      icon: <FiAlertTriangle size={24} />,
      title: "Ethics & Compliance",
      description:
        "Addressing fairness, transparency, and compliance with evolving AI regulations.",
    },
    {
      icon: <FiUsers size={24} />,
      title: "User Trust",
      description:
        "Building confidence in AI systems by making outputs explainable and user-friendly.",
    },
  ];

  return (
    <section className={styles.challenges_section}>
      <div className={styles.challenges_container}>
        <h2 className={styles.challenges_heading}>Challenges in AI</h2>
        <p className={styles.challenges_subtitle}>
          Understanding the unique testing challenges that AI organizations face
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
