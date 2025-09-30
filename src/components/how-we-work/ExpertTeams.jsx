import Card from "../Common/card/Card";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import styles from "./ExpertTeams.module.css";
export default function ExpertTeams() {
  return (
    <div className={styles.container}>
      <SectionHeader
        heading="Expert Teams at QAonCloud for Software Testing"
        subheading="QAonCloud hosts expert teams on every level to work on diverse projects for your business. Our team structure ensures the right partnership for all your software testing needs."
      />
      <div className={styles.card_container}>
        <Card
          title="QA Delivery Managers"
          description="
          They oversee the overall engagement of all the teams and meet with them frequently for progress and challenge assessments"
        />
        <Card
          title="QA Architects"
          description="
          QA Architects are consultants delegated with new software testing efforts, application release strategy, developing the testing strategy and planning it with your dev team"
        />
        <Card
          title="QA Leads"
          description="
          QA Leads schedules, manages, directs the QA teams with detailed documentation of everyday tasks, and assesses team performance to guarentee quality deliverables"
        />
      </div>
    </div>
  );
}
