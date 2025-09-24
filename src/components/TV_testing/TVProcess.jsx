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
export default function TVProcess() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <LeftAlignedCard
          Icon={FiTarget}
          title="Functional Testing"
          description="Test single components for reliability"
        />
        <LeftAlignedCard
          Icon={FiCheckCircle}
          title="Security Testing"
          description="Initial sanity check for core functionality"
        />
        <LeftAlignedCard
          Icon={FiUsers}
          title="Automation Testing"
          description="UI/UX consistency across platforms"
        />
        <LeftAlignedCard
          Icon={FiZap}
          title="Regression Testing"
          description="Front-to-backend workflow validation"
        />
        <LeftAlignedCard
          Icon={FiUserCheck}
          title="API Testing"
          description="Real user scenarios and feedback"
        />
        <LeftAlignedCard
          Icon={FiShield}
          title="Agile Testing"
          description="Ensure updates don't break existing features"
        />
        <LeftAlignedCard
          Icon={FiShield}
          title="Cross-Browser Testing"
          description="Ensure updates don't break existing features"
        />
      </div>
    </div>
  );
}
