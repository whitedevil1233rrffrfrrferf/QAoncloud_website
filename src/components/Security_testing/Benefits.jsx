// pages/TestingServices.js
import IconCard from "../Common/card/IconCard.jsx";
import { FiCheckCircle, FiTrendingUp, FiZap } from "react-icons/fi";
import SectionHeader from "../Common/SectionHeader/SectionHeader.jsx";
import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section className={styles.section}>
      <SectionHeader
        heading="Benefits of Security Testing?"
        subheading="Comprehensive quality assurance solutions designed to deliver reliable, secure, and high-performing software applications."
      />
      <div className={styles.cardGrid}>
        <IconCard
          Icon={FiZap}
          title="Secure Sensitive Data"
          description="Prevent unauthorized access and protect customer, financial,and business-critical information."
        />
        <IconCard
          Icon={FiZap}
          title="Regulatory Compliance"
          description="Meet industry standards like GDPR, HIPAA, PCI DSS, and others."
        />
        <IconCard
          Icon={FiZap}
          title="Early Threat Detection"
          description="Identify vulnerabilities before attackers do, minimizing business disruption."
        />
        <IconCard
          Icon={FiZap}
          title="Reduced Downtime"
          description="Shield your applications against exploits and minimize the cost of incidents."
        />
        <IconCard
          Icon={FiZap}
          title="Enhanced Brand Reputation"
          description="Build user and stakeholder confidence with robust,proactive security practices."
        />
      </div>
    </section>
  );
}
