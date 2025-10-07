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
          title="Functional Testing"
          description="Comprehensive assessment of all app functionalities to ensure seamless front-end and back-end integrations. Validate key features, eliminate bugs, and enhance the interface for a smooth user experience. Back-end verification prevents crashes and blockers."
        />
        <Card
          icon={<FaRobot />}
          title="Load Testing"
          description="Evaluate app performance under heavy traffic and varying conditions. Conduct conditional and environment-based analyses to ensure sustainability during customer surges. Detailed load test reports help improve app speed and reliability."
        />

        <Card
          icon={<FaRobot />}
          title="Usability Testing"
          description="
          Assess the user interface and overall customer experience to build customer-centric solutions. Analyze real-time behavior and user patterns to optimize usability and maximize success rates."
        />
        <Card
          icon={<FaRobot />}
          title="Regression Testing"
          description="
          Perform thorough regression tests before every update or software modification to ensure smooth launches and bug-free enhancements."
        />
        <Card
          icon={<FaRobot />}
          title="Cross-Browser Testing"
          description="
          Test the E-Commerce site across multiple browsers to verify stability, speed, and functionality. Ensure seamless performance, compatibility, and consistent user experience across all platforms."
        />
        <Card
          icon={<FaRobot />}
          title="Payment Gateway Testing"
          description="
          Evaluate the performance, security, and integration of payment gateways. Strengthen payment portals, secure user data, and verify third-party integrations for smooth, safe, and successful transactions."
        />
        <Card
          icon={<FaRobot />}
          title="Mobile Testing"
          description="
          Deploy mobile apps with QAonCloud’s robust testing strategy using real devices, emulators, and simulators. Validate performance across browsers and platforms with automation for faster cycles. Implement user-centric test plans and load testing to optimize speed, capacity, and satisfaction."
        />
        <Card
          icon={<FaRobot />}
          title="Performance Testing"
          description="
          Ensure a smooth and responsive user experience through tailored performance tests using open-source and COTS toolsets. Simulate various workloads, seasonal fluctuations, and upgrade scenarios. Identify and fix errors proactively to enhance software performance and code quality."
        />
      </div>
    </div>
  );
}
