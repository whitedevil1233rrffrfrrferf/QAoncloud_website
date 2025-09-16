"use client";
// components/AutomationTimeline.js
import styles from "./MobileProcess.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FiSearch,
  FiSettings,
  FiCode,
  FiPlay,
  FiTrendingUp,
} from "react-icons/fi";

const steps = [
  {
    step: "Step 1",
    title: "Discovery & Assessment",
    description:
      "Understand business goals, test coverage gaps, and existing tools.",
    icon: <FiSearch />,
  },
  {
    step: "Step 2",
    title: "Strategy & Tool Selection",
    description: "Select the right automation tools, frameworks, and goals.",
    icon: <FiSettings />,
  },
  {
    step: "Step 3",
    title: "Script Development",
    description: "Create reusable, robust test automation scripts.",
    icon: <FiCode />,
  },
  {
    step: "Step 4",
    title: "Test Execution",
    description: "Run automated tests and capture detailed reports.",
    icon: <FiPlay />,
  },
  {
    step: "Step 5",
    title: "Maintenance & Scaling",
    description: "Refine and expand automation as your product evolves.",
    icon: <FiTrendingUp />,
  },
];

export default function MobileProcess() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className={styles.timelineSection}>
      <h2>Our Mobile Testing Process</h2>
      <div className={styles.timelineContainer}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className={styles.icon}>{step.icon}</div>
            <div className={styles.content}>
              <span className={styles.step}>{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
