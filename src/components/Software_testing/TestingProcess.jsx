import SectionHeader from "../Common/SectionHeader/SectionHeader";
import Timeline from "../Common/Timeline/Timeline";
import styles from "./TestingProcess.module.css";
export default function TestingProcess() {
  return (
    <div className={styles.container}>
      <SectionHeader
        heading="Our Testing Process(Workflow)"
        subheading="At QaonCloud, our QA workflow is designed for speed, precision, and transparency. We follow a
        structured, step-by-step approach to ensure nothing slips through the cracks."
      />

      <div className={styles.TimelineContainer}>
        <Timeline
          step="01"
          title="Planning"
          description="We analyze requirements and define a risk-based test strategy aligned with your goals,
          timelines, and user expectations."
          icon="fas fa-vial"
        />
        <Timeline
          step="02"
          title="Test Design"
          description="We create high-coverage test cases mapped to real-world scenarios, ensuring every critical
          function is tested thoroughly."
          icon="fas fa-vial"
        />
        <Timeline
          step="03"
          title="Setup"
          description="Our team prepares test environments that reflect real user conditions across devices, browsers,
          and integrations."
          icon="fas fa-vial"
        />
        <Timeline
          step="04"
          title="Execution"
          description="We run manual and automated tests, logging and tracking defects using tools like JIRA, for
          fast, transparent issue resolution."
          icon="fas fa-vial"
        />
        <Timeline
          step="05"
          title="Reporting"
          description="Detailed reports highlight bugs, trends, and improvement areas—empowering your team to
          make informed release decisions."
          icon="fas fa-vial"
          isLast={true}
        />
      </div>
    </div>
  );
}
