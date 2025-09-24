import { FaPlug, FaExchangeAlt, FaTachometerAlt, FaLock } from "react-icons/fa";
import IconCard from "../Common/card/IconCard";
import styles from "./WhyAPITesting.module.css";

export default function WhyAPITesting() {
  return (
    <div className={styles.container}>
      <h2>Why API Testing Matters</h2>
      <div className={styles.CardGrid}>
        <IconCard
          Icon={FaPlug}
          title="Verify API Reliability"
          description="Ensure every endpoint responds accurately, consistently, and within expected timeframes."
        />
        <IconCard
          Icon={FaExchangeAlt}
          title="Validate Data Integrity"
          description="Confirm that inputs and outputs match specifications, safeguarding against broken integrations."
        />
        <IconCard
          Icon={FaTachometerAlt}
          title="Test Performance & Scalability"
          description="Measure how your APIs handle load, stress, and edge cases to prevent bottlenecks in production."
        />
        <IconCard
          Icon={FaLock}
          title="Secure API Interactions"
          description="Identify vulnerabilities and enforce authentication, authorization, and data protection standards."
        />
      </div>
    </div>
  );
}
