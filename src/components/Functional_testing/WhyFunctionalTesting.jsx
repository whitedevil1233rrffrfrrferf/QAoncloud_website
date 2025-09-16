import IconCard from "../Common/card/IconCard";
import styles from "./WhyFunctionalTesting.module.css";
import { FiCheckCircle, FiTrendingUp, FiZap, FiShield } from "react-icons/fi";
export default function WhyFunctionalTesting() {
  return (
    <section className={styles.container}>
      <h2>Why Functional Testing Matters</h2>
      <div className={styles.CardGrid}>
        <IconCard
          Icon={FiCheckCircle}
          title="Detect Early Bugs"
          description="Identify defects early in the cycle to avoid expensive fixes and improve code quality. Increase release velocity and reduce maintenance effort."
        />
        <IconCard
          Icon={FiTrendingUp}
          title="Reduce Crashes by 20%"
          description="Functional testing helps eliminate crash-prone behavior and boosts stability, resulting in a better user experience and higher trust."
        />
        <IconCard
          Icon={FiZap}
          title="Smooth User Flow"
          description="Ensure your users have a seamless journey from start to finish by validating workflows, UI responsiveness, and data accuracy."
        />
        <IconCard
          Icon={FiShield}
          title="Boost Release Confidence"
          description="Ensure your users have a seamless journey from start to finish by validating workflows, UI responsiveness, and data accuracy."
        />
      </div>
    </section>
  );
}
