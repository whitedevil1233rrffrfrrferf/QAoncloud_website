import Card from "../Common/card/Card";
import IconCard from "../Common/card/IconCard";
import { FiCheckCircle, FiTrendingUp, FiZap } from "react-icons/fi";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import styles from "./WhyQaoncloud.module.css";
export default function WhyQaoncloud() {
  return (
    <div className={styles.container}>
      <SectionHeader
        heading="Why QaonCloud is the Right QA Partner for You"
        subheading=" With 9+
        years of experience, domain-specific knowledge, and 24x7 QA delivery, we help you launch
        confidently, scale efficiently, and deliver flawless digital experiences your users can trust."
      />

      <div className={styles.cardContainer}>
        <IconCard
          Icon={FiCheckCircle}
          title="9+ Years of Experience"
          description="With nearly a decade of QA excellence, we&#39;ve helped startups and enterprises build reliable,
          scalable, and secure digital products."
        />
        <IconCard
          Icon={FiCheckCircle}
          title="100% Happy Customers"
          description="We deliver quality that builds trust. Every client we’ve worked with continues to rely on us for
          consistent and outcome-driven QA services."
        />
        <IconCard
          Icon={FiCheckCircle}
          title="60% Cost Saving"
          description="Our automation-first approach and optimized test strategies help reduce QA costs without
          compromising on speed or coverage."
        />
        <IconCard
          Icon={FiCheckCircle}
          title="100% Customer Retention"
          description="We focus on long-term relationships, not just one-off projects. Clients stay with us for our
          transparency, delivery, and continuous support."
        />
        <IconCard
          Icon={FiCheckCircle}
          title="75% Women Employees"
          description="Comprehensive manual testing by certified QA professionals to ensure your software meets all requirements and provides excellent user experience."
        />
      </div>
    </div>
  );
}
