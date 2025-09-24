import { FaBug, FaSyncAlt, FaRocket, FaShieldAlt } from "react-icons/fa";
import IconCard from "../Common/card/IconCard";
import styles from "./WhyRegressionTesting.module.css";

export default function WhyRegressionTesting() {
  return (
    <div className={styles.container}>
      <h2>Why Regression Testing Matters</h2>
      <div className={styles.CardGrid}>
        <IconCard
          Icon={FaBug}
          title="Catch Hidden Breaks"
          description="Detect unintended issues introduced by new code changes, updates, or bug fixes before they reach your users."
        />
        <IconCard
          Icon={FaSyncAlt}
          title="Maintain Consistency"
          description="Ensure existing features continue to work seamlessly across every new release or patch."
        />
        <IconCard
          Icon={FaRocket}
          title="Accelerate Safe Releases"
          description="Deliver updates faster with confidence, knowing regression testing safeguards core functionality."
        />
        <IconCard
          Icon={FaShieldAlt}
          title="Protect User Experience"
          description="Preserve the quality, stability, and trust your users expect by preventing disruptions in critical workflows."
        />
      </div>
    </div>
  );
}
