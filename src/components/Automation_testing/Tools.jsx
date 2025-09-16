import BoxCard from "../Common/card/BoxCard";
import styles from "./Tools.module.css";
export default function Tools() {
  return (
    <div className={styles.container}>
      <h2>Tools & Technologies</h2>
      <div className={styles.CardContainer}>
        <BoxCard title="Selenium" description="Automation" />
        <BoxCard title="Appium" description="Mobile Testing" />
        <BoxCard title="JMeter" description="Performance" />
        <BoxCard title="Postman" description="API Testing" />
        <BoxCard title="TestRail" description="Test Management" />
        <BoxCard title="Jenkins" description="CI/CD" />
        <BoxCard title="Cypress" description="E2E Testing" />
        <BoxCard title="Jest" description="Unit Testing" />
        <BoxCard title="Playwright" description="Web Testing" />
        <BoxCard title="K6" description="Load Testing" />
        <BoxCard title="OWASP ZAP" description="Security" />
        <BoxCard title="Jira" description="Project Management" />
      </div>
    </div>
  );
}
