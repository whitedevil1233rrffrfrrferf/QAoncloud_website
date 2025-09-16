// pages/TestingServices.js
import IconCard from "../Common/card/IconCard.jsx";
import { FiCheckCircle, FiTrendingUp, FiZap } from "react-icons/fi";
import SectionHeader from "../Common/SectionHeader/SectionHeader.jsx";
import styles from "./TestingServices.module.css";

export default function TestingServices() {
  return (
    <section className={styles.section}>
      <SectionHeader
        heading="Our Testing Services"
        subheading="Comprehensive quality assurance solutions designed to deliver reliable, secure, and high-performing software applications."
      />
      <div className={styles.cardGrid}>
        <IconCard
          Icon={FiZap}
          title="Manual Testing"
          description="Comprehensive manual testing by certified QA professionals to ensure your software meets all requirements and provides excellent user experience."
        />
        <IconCard
          Icon={FiZap}
          title="Automation Testing"
          description="Efficient automated test suites using industry-leading tools to accelerate your testing cycles and improve coverage."
        />
        <IconCard
          Icon={FiZap}
          title="Performance Testing"
          description="Load, stress, and performance testing to ensure your application scales efficiently under various conditions."
        />
        <IconCard
          Icon={FiZap}
          title="Security Testing"
          description="Comprehensive security assessments to identify vulnerabilities and protect your application from potential threats."
        />
      </div>
    </section>
  );
}
