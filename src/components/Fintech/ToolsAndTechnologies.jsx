import BoxCard from "../Common/card/BoxCard";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import classes from "./ToolsAndTechnologies.module.css";
export default function ToolsAndTechnologies() {
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

        <BoxCard title="Jenkins" description="CI/CD" />
        <BoxCard title="OWASP ZAP" description="Security" />
      </div>
    </div>
  );
}
