import SectionHeader from "../Common/SectionHeader/SectionHeader";
import Timeline from "../Common/Timeline/Timeline";
import styles from "./HowWeWork.module.css";
export default function HowWeWork() {
  return (
    <div className={styles.container}>
      <SectionHeader
        heading="How Our Agile Testing Works"
        subheading="Our systematic approach ensures comprehensive security testing that identifies vulnerabilities before they become threats."
      />
      <div className="timelineContainer">
        <Timeline
          step="01"
          title="Planning & Analysis"
          description="We analyze your application architecture, identify critical test scenarios, and create a comprehensive regression testing strategy tailored to your needs."
          icon="fas fa-vial"
        />
        <Timeline
          step="02"
          title="Test Case Design"
          description="Our QA experts design detailed test cases covering all user journeys, edge cases, and integration points to ensure maximum coverage."
          icon="fas fa-vial"
        />
        <Timeline
          step="03"
          title="Automation Setup"
          description="We implement robust automated test frameworks using industry-leading tools, creating maintainable and scalable test suites."
          icon="fas fa-vial"
        />
        <Timeline
          step="04"
          title="Test Execution"
          description="Continuous execution of regression tests across multiple environments, browsers, and devices with real-time monitoring and alerts."
          icon="fas fa-vial"
        />
        <Timeline
          step="05"
          title="Reporting & Analysis"
          description="Detailed test reports with actionable insights, bug tracking, and performance metrics to guide your development decisions."
          icon="fas fa-vial"
          isLast={true}
        />
      </div>
    </div>
  );
}
