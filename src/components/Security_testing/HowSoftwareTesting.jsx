import SectionHeader from "../Common/SectionHeader/SectionHeader";
import Timeline from "../Common/Timeline/Timeline";
import styles from "./HowSoftwareTesting.module.css";
export default function HowSoftwareTesting() {
  return (
    <div className={styles.container}>
      <SectionHeader
        heading="How Our Security Testing Works"
        subheading="Our systematic approach ensures comprehensive security testing that identifies vulnerabilities before they become threats."
      />
      <div className="timelineContainer">
        <Timeline
          step="01"
          title="Requirement Gathering"
          description="We understand your application, tech stack, compliance needs, and business goals to define
            testing scope and risk areas."
          icon="fas fa-tasks"
        />
        <Timeline
          step="02"
          title="Threat Modeling"
          description="We identify potential attack vectors, entry points, and sensitive data flows using industry frameworks and threat intelligence."
          icon="fas fa-project-diagram"
        />
        <Timeline
          step="03"
          title="Test Strategy &  Planning"
          description="Our team designs a tailored security testing approach, from tool selection to test case creation based on your risk profile."
          icon="fas fa-cogs"
        />
        <Timeline
          step="04"
          title="Execution & Exploitation"
          description="We conduct vulnerability scans, manual checks, and ethical hacking (if required) to uncover real-world security flaws."
          icon="fas fa-bug"
        />
        <Timeline
          step="05"
          title="Reporting & Recommendations"
          description="We deliver detailed reports outlining vulnerabilities, severity levels, and step-by-step remediation guidance to strengthen your defenses."
          icon="fas fa-file-alt"
          isLast={true}
        />
      </div>
    </div>
  );
}
