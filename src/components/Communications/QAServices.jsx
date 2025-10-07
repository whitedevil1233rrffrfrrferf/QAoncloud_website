import Card from "../Common/card/Card";
import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
import styles from "./QAServices.module.css";
import { FaRobot, FaShieldAlt, FaClipboardCheck } from "react-icons/fa";
export default function QAServices() {
  return (
    <div className={styles.solutions}>
      <h2 className={styles.heading}>
        Our Telecom Communication Software Testing Services
      </h2>
      <p className={styles.para}>
        Our full range of QA testing Services are delivered by highly skilled
        and trained QA professionals dedicated <br />
        to timely deliveries with uncompromised quality.
      </p>
      <div className={styles.card_container}>
        <Card
          icon={<FaRobot />}
          title="Functional Testing"
          description="QA testing teams use real-time data and analytics.Ensures that all functionalities in the app are intuitive and user-friendly.Replicate real user scenarios and validate all functionalities.Better product quality and enhanced user experience."
        />
        <Card
          icon={<FaRobot />}
          title="Mobile Testing"
          description="QA testing teams use real-time data and analytics.Ensures that all functionalities in the app are intuitive and user-friendly.Replicate real user scenarios and validate all functionalities.Better product quality and enhanced user experience."
        />
        <Card
          icon={<FaRobot />}
          title="Regression Testing"
          description="
          Regression testing for every feature release.Focus on the more complex flows where the system might break
          Complete test coverage in various browsers and devices.Ensures all functionalities  are intuitive and user-friendly"
        />
        <Card
          icon={<FaRobot />}
          title="Performance Testing"
          description="
          Perform complete assessment of app functionalities, assess the app performance under various loads, measure loading speed and run time, and enhance overall app performance to meet customer needs"
        />
        <Card
          icon={<FaRobot />}
          title="Data Testing"
          description="
          Ensure high-quality data in the app backend and front end, screen schemas, tables, and other data for vulnerabilities, and test if all functions give positive outcomes."
        />
        <Card
          icon={<FaRobot />}
          title="Security Testing"
          description="
          Tests the security layers of the app.Authentication portals, payment gateways, and other app functionalities with vital customer information.Implementation of industry regulations and standards for BFSI solutions."
        />

        <Card
          icon={<FaRobot />}
          title="Data Testing"
          description="
          Uses proven strategies for software testing to keep data secure and intact.Ensures that apps have a solid framework for seamless integration.Maintains a robust database of app usage to induce a better user experience."
        />
        <Card
          icon={<FaRobot />}
          title="Automation Testing"
          description="
          Ensure high performance and a glitch-free user interface.Helps customers have a quality experience on the app.Building trust and reliability among the BFSI customers."
        />
      </div>
    </div>
  );
}
