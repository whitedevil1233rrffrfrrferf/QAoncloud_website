import Card from "../Common/card/Card";
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
        <Card
          icon={<FaRobot />}
          title="Analytics Testing"
          description="Monitor and report vital analytics.Evaluate individual features and make performance reports.Enhance app performance based on the detailed reports."
        />
        <Card
          icon={<FaRobot />}
          title="Functional Testing"
          description="Monitor, test, and validate app functions at various user levels.Ensure quality design and aesthetics.Assess integrations and scan codes for gaps or bugs"
        />
        <Card
          icon={<FaRobot />}
          title="Usability Testing"
          description="
          Pre-event preparation & practice cycle testing.Assure the best user experience with agile testing.
          Use real-time data on user behavior to enhance UX/UI"
        />
        <Card
          icon={<FaRobot />}
          title="Localization Testing"
          description="
          Manage, and monitor all localization testing.Identify unique issues impacting audiences.Incorporate demographic specifics to enhance the app’s overall value.Ensure high performance and a glitch-free user interface"
        />

        <Card
          icon={<FaRobot />}
          title="Regression Testing"
          description="
         QA testing of the E-Commerce site is done across multiple browsers. Complete regression checks are performed before every event, focusing on key features like ticketing and event attendance. Fixed bugs from earlier cycles are quickly verified."
        />
        <Card
          icon={<FaRobot />}
          title="Mobile Testing"
          description="
         Performance, security, and payment gateway integrations are thoroughly assessed. All app features are tested for compatibility across devices and operating systems. Advanced technology ensures flawless performance and complete customer satisfaction."
        />
        <Card
          icon={<FaRobot />}
          title="Load Testing"
          description="
         QAonCloud deploys mobile apps with rich features and an excellent UI/UX. Load testing checks if the app performs well under sudden surges. Quality code and proven methods enhance app speed and overall user experience."
        />
      </div>
    </div>
  );
}
