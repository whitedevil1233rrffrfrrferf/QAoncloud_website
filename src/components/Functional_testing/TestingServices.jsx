import IconCard from "../Common/card/IconCard";
import {
  FiTarget,
  FiCheckCircle,
  FiUsers,
  FiZap,
  FiUserCheck,
  FiShield,
} from "react-icons/fi";

import classes from "./TestingServices.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
export default function TestingServices() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <LeftAlignedCard
          Icon={FiTarget}
          title="Unit Testing"
          description="Test single components for reliability"
        />
        <LeftAlignedCard
          Icon={FiCheckCircle}
          title="Smoke Testing"
          description="Initial sanity check for core functionality"
        />
        <LeftAlignedCard
          Icon={FiUsers}
          title="Interface Testing"
          description="UI/UX consistency across platforms"
        />
        <LeftAlignedCard
          Icon={FiZap}
          title="Integration Testing"
          description="Front-to-backend workflow validation"
        />
        <LeftAlignedCard
          Icon={FiUserCheck}
          title="User Acceptance Testing"
          description="Real user scenarios and feedback"
        />
        <LeftAlignedCard
          Icon={FiShield}
          title="Regression Testing"
          description="Ensure updates don't break existing features"
        />
      </div>
    </div>
  );
}
