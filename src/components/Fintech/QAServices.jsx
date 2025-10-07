import Card from "../Common/card/Card";
import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
import styles from "./QAServices.module.css";
import {
  FaCogs,
  FaCheckCircle,
  FaRedo,
  FaShieldAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
export default function QAServices() {
  return (
    <div className={styles.solutions}>
      <h2 className={styles.heading}>
        Our Banking & Financial Software Testing Services
      </h2>
      <p className={styles.para}>
        Our full range of QA testing Services are delivered by highly skilled
        and trained QA professionals dedicated <br />
        to timely deliveries with uncompromised quality.
      </p>
      <div className={styles.card_container}>
        <Card
          icon={<FaCogs />}
          title="360° App Testing"
          description="Explores the nooks and corners of the applications.Ensure bug-free interface.Use suitable methodologies for high-quality apps.Build user interfaces that guarantee security and customer satisfaction"
        />
        <Card
          icon={<FaCheckCircle />}
          title="Functional Testing"
          description="QA testing teams use real-time data and analytics.Ensures that all functionalities in the app are intuitive and user-friendly.Replicate real user scenarios and validate all functionalities.Better product quality and enhanced user experience."
        />
        <Card
          icon={<FaRedo />}
          title="Regression Testing"
          description="
          Regression testing for every feature release.Focus on the more complex flows where the system might break
          Complete test coverage in various browsers and devices.Ensures all functionalities  are intuitive and user-friendly"
        />
        <Card
          icon={<FaShieldAlt />}
          title="Security Testing"
          description="
          Tests the security layers of the app.Authentication portals, payment gateways, and other app functionalities with vital customer information.Implementation of industry regulations and standards for BFSI solutions."
        />

        <Card
          icon={<FiDatabase />}
          title="Data Integrity"
          description="
          Uses proven strategies for software testing to keep data secure and intact.Ensures that apps have a solid framework for seamless integration.Maintains a robust database of app usage to induce a better user experience."
        />
        <Card
          icon={<FaTachometerAlt />}
          title="Performance Testing"
          description="
          Ensure high performance and a glitch-free user interface.Helps customers have a quality experience on the app.Building trust and reliability among the BFSI customers."
        />
        <Card
          icon={<FaTachometerAlt />}
          title="Regulatory Compliance Testing"
          description="
          QAonCloud helps applications adhere to regulations and comply with industry best practices, incorporating standards such as PSD2 and EMV for smart payment terminals and automated ATMs."
        />
      </div>
    </div>
  );
}
