import SectionHeader from "../Common/SectionHeader/SectionHeader";
import Timeline from "../Common/Timeline/Timeline";
import styles from "./Process.module.css";
export default function Process() {
  return (
    <div className={styles.container}>
      <SectionHeader
        heading="Process of QA Testing at QAonCloud"
        subheading="We put in the best of our efforts for all our Deliverables to guarantee 100% customer satisfaction by working individually or by collaborating with your in-house teams."
      />
      <div className="timelineContainer">
        <Timeline
          step="01"
          title="Strategy and Plan"
          description="A comprehensive Test Strategy and Plan is built in conjunction with your product manager and 
          is customized to your software, timelines, and needs. This master plan document serves as the base for all project testing activities."
          icon="fas fa-vial"
        />
        <Timeline
          step="02"
          title="Test Cases"
          description="The test cases are prepared and aligned with the test strategy and plan document. Test cases are continuously enhanced, updated, and modified with time to keep in sync with your changing needs and documented in the systems of your choice."
          icon="fas fa-vial"
        />
        <Timeline
          step="03"
          title="Mind Map"
          description="With inputs from your team, we prepare the mind map, a great visual representation of your software universe, to show the relationships amongst all of the individual entities that your software interacts with. We usually find this an excellent resource for your team going forward."
          icon="fas fa-vial"
        />
        <Timeline
          step="04"
          title="Automation Scripts"
          description="All automation scripts are generated as per the test strategy formulated above. These scripts are maintained in a code repository which is regularly executed and updated as and when needed. The bug reports from the test runs are shared with you periodically and when required."
          icon="fas fa-vial"
        />
        <Timeline
          step="05"
          title="Bug Reports"
          description="We generate bug reports continuously after every test cycle. Every bug report generated is maintained in the bug tracking tool of your choice."
          icon="fas fa-vial"
        />
        <Timeline
          step="06"
          title="Production Summary"
          description="We will share the daily, monthly & yearly production summary reports that have insights into the overall production metrics and QA tasks. It helps the customer to understand and track the work progress efficiently."
          icon="fas fa-vial"
          isLast={true}
        />
      </div>
    </div>
  );
}
