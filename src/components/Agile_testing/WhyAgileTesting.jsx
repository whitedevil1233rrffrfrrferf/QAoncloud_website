import {
  FaBolt, // fast, TDD
  FaInfinity, // continuous development
  FaRocket, // quick to market
  FaUsers, // customer-centric
  FaCloud, // tech implementations (AI & Cloud)
} from "react-icons/fa";

import IconCard from "../Common/card/IconCard";
import styles from "./WhyAgileTesting.module.css";

export default function WhyAgileTesting() {
  return (
    <div className={styles.container}>
      <h2>Why Agile Testing Matters</h2>
      <div className={styles.CardGrid}>
        <IconCard
          Icon={FaBolt}
          title="Test-Driven Development"
          description="To implement accurate functionalities with an established success rate"
        />
        <IconCard
          Icon={FaInfinity}
          title="Continuous Development"
          description="Reduced development cost and time with continuous integration and development"
        />
        <IconCard
          Icon={FaRocket}
          title="Quick to Market"
          description="DevOps methodology to launch products faster by 50%"
        />
        <IconCard
          Icon={FaUsers}
          title="Customer-Centric Approach"
          description="Use customer behavior data to craft tailor-made apps"
        />
        <IconCard
          Icon={FaCloud}
          title="Tech Savvy Implementations"
          description="Leverage AI and cloud technology to enhance app functionalities"
        />
      </div>
    </div>
  );
}
