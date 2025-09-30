import IconCard from "../Common/card/IconCard";
import {
  FiTarget,
  FiCheckCircle,
  FiUsers,
  FiZap,
  FiUserCheck,
  FiShield,
} from "react-icons/fi";

import classes from "./MobileProcess.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
import Card from "../Common/card/Card";
export default function MobileProcess() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <Card
          title="Usability Testing"
          description="
          Create a User-friendly interface. Utilize user data to enhance mobile application. Enhance aesthetics and functionalities to suit end-users."
        />
        <Card
          title="Mobile Functional Testing"
          description="
          Ensure that all functionalities are compatible. Assess the performance of distinct functions. Meet end-user needs with custom testing strategies. Ensure seamless integration of all functionalities for better UI/UX."
        />
        <Card
          title="Mobile Load And Performance Testing"
          description="
          Use specific loads to test app performance. Enhance app performance to meet evolving needs of the business. Optimize app performance based on well-defined KPIs. Eliminate bandwidth issues and detect memory usage."
        />
        <Card
          title="Compliance Testing"
          description="
          Compliance with standards and regulations. Help mobile apps meet rules specified by the industry. Enhance app functionalities and security to meet industry-specific needs."
        />

        <Card
          title="Mobile Security Testing"
          description="
          Ensure seamless integrations of the app codes. Identify potential risks of breach. Secure apps to prevent loss of data and privacy. Prevent increased downtime with increased security."
        />
        <Card
          title="Mobile Test Automation"
          description="
          Test large data quickly. Save costs with reduced manual labor. Reduce errors while testing with automated test scripts."
        />
        <Card
          title="Mobile Accessibility Testing"
          description="
          Ensure usability and app friendliness. Enhance app quality with an intuitive user interface. Test specialized features and functionalities to increase accessibility."
        />
      </div>
    </div>
  );
}
