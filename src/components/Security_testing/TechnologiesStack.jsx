import BoxCard from "../Common/card/BoxCard";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import classes from "./TechnologiesStack.module.css";
export default function TechnologiesStack() {
  return (
    <div className={classes.technologiesStack}>
      <SectionHeader
        heading="Our Testing Tech Stack"
        subheading="We leverage industry-leading tools and technologies to deliver comprehensive testing solutions that meet modern development needs."
      />

      <div className={classes.container}>
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
