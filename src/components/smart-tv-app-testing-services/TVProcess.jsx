import IconCard from "../Common/card/IconCard";
import {
  FiTarget,
  FiCheckCircle,
  FiUsers,
  FiZap,
  FiUserCheck,
  FiShield,
} from "react-icons/fi";

import classes from "./TVProcess.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
import Card from "../Common/card/Card";
export default function TVProcess() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <Card
          title="Cross-device Testing"
          description="
          Test Smart TV App compatibility across various devices, models, resolutions and operating systems."
        />
        <Card
          title="Functional Testing"
          description="
          Assess every functionality of the App across different smart TVs to meet the requirements."
        />
        <Card
          title="Automation Testing"
          description="
          Increase testing efficiency and accuracy with automation techniques."
        />
        <Card
          title="Performance Testing"
          description="
          Test app performance across devices and features for enhanced user experience."
        />
      </div>
    </div>
  );
}
