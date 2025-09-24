import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
import styles from "./QAServices.module.css";
import { FaRobot, FaShieldAlt, FaClipboardCheck } from "react-icons/fa";
export default function QAServices() {
  return (
    <div className={styles.solutions}>
      <h2 className={styles.heading}>Our Event Management Testing Services</h2>
      <p className={styles.para}>
        Our full range of QA testing Services are delivered by highly skilled
        and trained QA professionals dedicated <br />
        to timely deliveries with uncompromised quality.
      </p>
      <div className={styles.card_container}>
        <RoundedIconCard
          icon={<FaRobot />}
          title="Analytics Testing"
          description="Monitor and report vital analytics.Evaluate individual features and make performance reports.Enhance app performance based on the detailed reports."
        />
        <RoundedIconCard
          icon={<FaRobot />}
          title="Functional Testing"
          description="Monitor, test, and validate app functions at various user levels.Ensure quality design and aesthetics.Assess integrations and scan codes for gaps or bugs"
        />
        <RoundedIconCard
          icon={<FaRobot />}
          title="Usability Testing"
          description="
          Pre-event preparation & practice cycle testing.Assure the best user experience with agile testing.
          Use real-time data on user behavior to enhance UX/UI"
        />
        <RoundedIconCard
          icon={<FaRobot />}
          title="Localization Testing"
          description="
          Manage, and monitor all localization testing.Identify unique issues impacting audiences.Incorporate demographic specifics to enhance the app’s overall value.Ensure high performance and a glitch-free user interface"
        />

        <RoundedIconCard
          icon={<FaRobot />}
          title="Data Integrity"
          description="
          Uses proven strategies for software testing to keep data secure and intact.Ensures that apps have a solid framework for seamless integration.Maintains a robust database of app usage to induce a better user experience."
        />
        <RoundedIconCard
          icon={<FaRobot />}
          title="Performance Testing"
          description="
          Ensure high performance and a glitch-free user interface.Helps customers have a quality experience on the app.Building trust and reliability among the BFSI customers."
        />
      </div>
    </div>
  );
}
