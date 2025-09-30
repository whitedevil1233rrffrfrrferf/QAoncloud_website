import IconCard from "../Common/card/IconCard";
import styles from "./WhyFunctionalTesting.module.css";
import {
  FiCheckCircle,
  FiTrendingUp,
  FiZap,
  FiShield,
  FiDollarSign,
  FiCpu,
  FiSmile,
} from "react-icons/fi";
export default function WhyFunctionalTesting() {
  return (
    <section className={styles.container}>
      <h2>Why Functional Testing Matters</h2>
      <div className={styles.CardGrid}>
        <IconCard
          Icon={FiCheckCircle}
          title="Detect defects in advance"
          description="Identify and eliminate defects in the early stage of product development"
        />
        <IconCard
          Icon={FiTrendingUp}
          title="Isolate potential risks"
          description="Remove defects with lesser time to resolution"
        />
        <IconCard
          Icon={FiZap}
          title="Smooth Updates"
          description="Retain software quality and smoothly introduce new enhancements"
        />
        <IconCard
          Icon={FiDollarSign}
          title="Cost-saving"
          description="The minimized need for re-work, improved software quality at reasonable costs"
        />
        <IconCard
          Icon={FiCpu}
          title="Enhance functional performance"
          description="Ensure that all functions in the software perform exactly how they were designed to perform"
        />
        <IconCard
          Icon={FiSmile}
          title="Superior Customer Experience"
          description="user-centric testing strategies to meet specific customer needs"
        />
      </div>
    </section>
  );
}
