import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
import styles from "./QAServices.module.css";
import { FaRobot, FaShieldAlt, FaClipboardCheck } from "react-icons/fa";
export default function QAServices() {
  return (
    <div className={styles.solutions}>
      <h2 className={styles.heading}>Our BCommunication Testing Services</h2>
      <p className={styles.para}>
        Our full range of QA testing Services are delivered by highly skilled
        and trained QA professionals dedicated <br />
        to timely deliveries with uncompromised quality.
      </p>
      <div className={styles.card_container}>
        <RoundedIconCard
          icon={<FaRobot />}
          title="Functional Testing"
          description="QA testing teams use real-time data and analytics.Ensures that all functionalities in the app are intuitive and user-friendly.Replicate real user scenarios and validate all functionalities.Better product quality and enhanced user experience."
        />
        <RoundedIconCard
          icon={<FaRobot />}
          title="Mobile Testing"
          description="QA testing teams use real-time data and analytics.Ensures that all functionalities in the app are intuitive and user-friendly.Replicate real user scenarios and validate all functionalities.Better product quality and enhanced user experience."
        />
        <RoundedIconCard
          icon={<FaRobot />}
          title="Regression Testing"
          description="
          Regression testing for every feature release.Focus on the more complex flows where the system might break
          Complete test coverage in various browsers and devices.Ensures all functionalities  are intuitive and user-friendly"
        />
        <RoundedIconCard
          icon={<FaRobot />}
          title="Security Testing"
          description="
          Tests the security layers of the app.Authentication portals, payment gateways, and other app functionalities with vital customer information.Implementation of industry regulations and standards for BFSI solutions."
        />

        <RoundedIconCard
          icon={<FaRobot />}
          title="Data Testing"
          description="
          Uses proven strategies for software testing to keep data secure and intact.Ensures that apps have a solid framework for seamless integration.Maintains a robust database of app usage to induce a better user experience."
        />
        <RoundedIconCard
          icon={<FaRobot />}
          title="Automation Testing"
          description="
          Ensure high performance and a glitch-free user interface.Helps customers have a quality experience on the app.Building trust and reliability among the BFSI customers."
        />
      </div>
    </div>
  );
}
