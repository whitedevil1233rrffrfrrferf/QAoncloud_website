import {
  FaBug, // bug detection
  FaSyncAlt, // process / iteration
  FaRocket, // product / launch
  FaChartLine, // efficiency / performance
  FaMoneyBillWave,
} from "react-icons/fa";
import IconCard from "../Common/card/IconCard";
import styles from "./WhyRegressionTesting.module.css";

export default function WhyRegressionTesting() {
  return (
    <div className={styles.container}>
      <h2>Why Regression Testing Matters</h2>
      <div className={styles.CardGrid}>
        <IconCard
          Icon={FaBug}
          title="Increased Test Coverage"
          description="Test large datasets over a short period"
        />
        <IconCard
          Icon={FaSyncAlt}
          title="Early bug detection"
          description="Identity and eliminate bugs in the early development phase"
        />
        <IconCard
          Icon={FaRocket}
          title="High-quality product"
          description="Regression testing guarantees an enhanced product with seamless integrations"
        />
        <IconCard
          Icon={FaChartLine}
          title="Higher efficiency"
          description="Using advanced tools and expert skills makes process testing faster and better"
        />
        <IconCard
          Icon={FaMoneyBillWave}
          title="Reduced costs"
          description="By eliminating the need for repetitive bug fixes"
        />
      </div>
    </div>
  );
}
