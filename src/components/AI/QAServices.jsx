import Card from "../Common/card/Card";
import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
import styles from "./QAServices.module.css";
import { FaRobot, FaShieldAlt, FaClipboardCheck } from "react-icons/fa";
export default function QAServices() {
  return (
    <div className={styles.solutions}>
      <h2 className={styles.heading}>Our E-Commerce Testing Services</h2>
      <p className={styles.para}>
        Our full range of QA testing Services are delivered by highly skilled
        and trained QA professionals dedicated <br />
        to timely deliveries with uncompromised quality.
      </p>
      <div className={styles.card_container}>
        <Card
          icon={<FaRobot />}
          title="Data Curation and Validation"
          description="Evaluate AI efficiency by analyzing the quality of training data. Ensure well-structured and adequate datasets for accurate model outputs and reliable AI performance."
        />
        <Card
          icon={<FaRobot />}
          title="AI Software Testing"
          description="Guarantee high-quality data processing and actionable insights. Assess model validation, learnability, algorithm efficiency, and empathy. Conduct QA testing across NLP, image processing, machine learning, and deep learning systems."
        />
        <Card
          icon={<FaRobot />}
          title="Performance Testing"
          description="
          Perform extensive performance and security testing to ensure system stability and compliance. Validate adherence to regulatory standards for secure and reliable operations."
        />
      </div>
    </div>
  );
}
