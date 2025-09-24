import { FiWifi, FiPhone, FiLayers, FiActivity } from "react-icons/fi";

import styles from "./Challenges.module.css";
import ChallengesCard from "../Common/ChallengesCard/ChallengesCard";

export default function Challenges() {
  const challenges = [
    {
      icon: <FiWifi size={24} />,
      title: "Network Reliability",
      description:
        "Ensuring uninterrupted service quality across high-traffic networks and varied geographies.",
    },
    {
      icon: <FiPhone size={24} />,
      title: "Seamless Connectivity",
      description:
        "Testing end-to-end communication systems to guarantee smooth calls, messaging, and data transfer.",
    },
    {
      icon: <FiLayers size={24} />,
      title: "System Integration",
      description:
        "Validating interoperability between legacy infrastructure, cloud platforms, and third-party services.",
    },
    {
      icon: <FiActivity size={24} />,
      title: "High Performance",
      description:
        "Ensuring communication platforms handle peak loads without compromising on speed or reliability.",
    },
  ];

  return (
    <section className={styles.challenges_section}>
      <div className={styles.challenges_container}>
        <h2 className={styles.challenges_heading}>
          Challenges in Communications
        </h2>
        <p className={styles.challenges_subtitle}>
          Understanding the unique testing challenges that communications
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
