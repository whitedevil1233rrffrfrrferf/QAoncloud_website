import { FaBolt, FaSyncAlt, FaUsers, FaCheckCircle } from "react-icons/fa";
import IconCard from "../Common/card/IconCard";
import styles from "./WhyAgileTesting.module.css";

export default function WhyAgileTesting() {
  return (
    <div className={styles.container}>
      <h2>Why Agile Testing Matters</h2>
      <div className={styles.CardGrid}>
        <IconCard
          Icon={FaBolt}
          title="Faster Feedback Loops"
          description="Get rapid insights on code quality and functionality, enabling quick adjustments during sprints."
        />
        <IconCard
          Icon={FaSyncAlt}
          title="Adapt with Change"
          description="Easily align testing with evolving requirements, ensuring quality even as priorities shift."
        />
        <IconCard
          Icon={FaUsers}
          title="Team Collaboration"
          description="Bridge the gap between developers, testers, and product owners with shared visibility and goals."
        />
        <IconCard
          Icon={FaCheckCircle}
          title="Continuous Quality"
          description="Embed testing into every sprint to ensure working software is always delivered with confidence."
        />
      </div>
    </div>
  );
}
