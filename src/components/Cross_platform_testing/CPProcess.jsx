import IconCard from "../Common/card/IconCard";
import {
  FiTarget,
  FiCheckCircle,
  FiUsers,
  FiZap,
  FiUserCheck,
  FiShield,
} from "react-icons/fi";

import classes from "./CPProcess.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
import Card from "../Common/card/Card";
export default function CPProcess() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <Card
          title="Application Compatibility Testing"
          description="
          Analyze app requirements, ensure preferred operation abilities, and asses app compatibility across software, hardware, networks and browsers."
        />
        <Card
          title="Software Compatibility Testing"
          description="
          Comprehensive QA testing for software compatibility, testing across various environments, and help develop and upscale plans for bug fixes."
        />
        <Card
          title="Browser Compatibility Testing"
          description="
          Implement accurate testing strategies, recognize functional defects, identify layout discrepancies, and optimize app performance in commonly used browsers."
        />
        <Card
          title="Database Compatibility Testing"
          description="
          Address various database layers testing, test data access, business UI and database, and offer data verification and more robust testing services."
        />

        <Card
          title="Mobile Device Compatibility Testing"
          description="
          Maximize test coverage, minimize risks by testing against devices, and test critical security requirements for devices."
        />
      </div>
    </div>
  );
}
