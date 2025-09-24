import { FiUsers, FiMonitor, FiWifi, FiAlertTriangle } from "react-icons/fi";

import styles from "./Challenges.module.css";
import ChallengesCard from "../Common/ChallengesCard/ChallengesCard";

export default function Challenges() {
  const challenges = [
    {
      icon: <FiUsers size={24} />,
      title: "Crowd Management",
      description:
        "Handling large attendee volumes, registrations, and check-ins without delays or bottlenecks.",
    },
    {
      icon: <FiMonitor size={24} />,
      title: "Hybrid & Virtual Events",
      description:
        "Ensuring smooth experiences across live, virtual, and hybrid platforms with minimal technical glitches.",
    },
    {
      icon: <FiWifi size={24} />,
      title: "Connectivity Issues",
      description:
        "Managing Wi-Fi, streaming, and app reliability to avoid disruptions during key event moments.",
    },
    {
      icon: <FiAlertTriangle size={24} />,
      title: "Risk & Contingency",
      description:
        "Preparing for last-minute changes, cancellations, or on-site emergencies with robust backup plans.",
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
