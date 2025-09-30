import {
  FaShieldAlt, // shield / protection
  FaKey, // access
  FaClock, // time / load
  FaMoneyBillWave, // security / restriction
  FaGlobe,
} from "react-icons/fa";
import IconCard from "../Common/card/IconCard";
import styles from "./WhyAPITesting.module.css";

export default function WhyAPITesting() {
  return (
    <div className={styles.container}>
      <h2>Why API Testing Matters</h2>
      <div className={styles.CardGrid}>
        <IconCard
          Icon={FaShieldAlt}
          title="Secure protection"
          description="Protects the app from malicious code and breakage"
        />
        <IconCard
          Icon={FaKey}
          title="Core access"
          description="Does not need access to app UI and aids in parallel app development"
        />
        <IconCard
          Icon={FaClock}
          title="Time effective"
          description="Lesser time to test and easy to maintain"
        />
        <IconCard
          Icon={FaMoneyBillWave}
          title="Cost-saving"
          description="Speeds up development workflows, which reduces overall costs"
        />
        <IconCard
          Icon={FaGlobe}
          title="Language Independent"
          description="No need for code languages to execute API testing"
        />
      </div>
    </div>
  );
}
