import IconCard from "../Common/card/IconCard";
import {
  FiTarget,
  FiCheckCircle,
  FiUsers,
  FiZap,
  FiUserCheck,
  FiShield,
} from "react-icons/fi";

import classes from "./CBProcess.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
import Card from "../Common/card/Card";
export default function CBProcess() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <Card
          title="Manual Multi Browser Testing"
          description="
          Identify the list of browsers, assess the compatibility of the apps, execute manual test cases by QA testers, and run tests across multiple browsers based on priority."
        />
        <Card
          title="Automated Multi Browser Testing"
          description="
          Maximized time and cost-saving with reduced manual effort, automation test scripts for more accurate testing, and enhanced productivity and app quality with more extensive coverage."
        />
      </div>
    </div>
  );
}
