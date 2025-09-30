import IconCard from "../Common/card/IconCard";
import {
  FiTarget,
  FiCheckCircle,
  FiUsers,
  FiZap,
  FiUserCheck,
  FiShield,
} from "react-icons/fi";

import classes from "./WebProcess.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
import Card from "../Common/card/Card";
export default function WebProcess() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <Card
          title="Functional Testing"
          description="
          We ensure that the application fully meets client requirements by analyzing each component of the web app in detail. Every function is thoroughly assessed to confirm that it operates as intended, guaranteeing a reliable and seamless user experience."
        />
        <Card
          title="Security Testing"
          description="
          Our security testing practices safeguard data across platforms by preventing leaks and malicious attacks. By identifying potential risks and threats early, we help protect sensitive information while building customer trust through enhanced security measures."
        />
        <Card
          title="Regression Testing"
          description="
          We perform comprehensive regression testing to detect errors and bugs after updates or new releases. This process validates web app quality and performance at every stage."
        />
        <Card
          title="API Testing"
          description="
          With versatile methodologies, our API testing ensures complete end-to-end validation across all layers of the web application. This approach enables more successful test cycles and confirms the reliability, security, and functionality of APIs."
        />

        <Card
          title="Agile Testing"
          description="
          By applying advanced agile testing practices, we adapt to the changing needs of end-users and support timely product deployment. Our approach ensures that evolving requirements are addressed while maintaining high quality and efficient delivery."
        />
        <Card
          title="Cross-Browser and Platform Testing"
          description="
          We test applications for compatibility across leading browsers, devices, and operating systems to validate consistent performance everywhere. Every detail is assessed to ensure high-quality visuals and improved test coverage."
        />
      </div>
    </div>
  );
}
