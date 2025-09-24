import IconCard from "../Common/card/IconCard";
import {
  FiTarget,
  FiCheckCircle,
  FiUsers,
  FiZap,
  FiUserCheck,
  FiShield,
} from "react-icons/fi";

import classes from "./GameProcess.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
export default function GameProcess() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <LeftAlignedCard
          Icon={FiTarget}
          title="Usability Testing"
          description="Test single components for reliability"
        />
        <LeftAlignedCard
          Icon={FiCheckCircle}
          title="Mobile Functional Testing"
          description="Initial sanity check for core functionality"
        />
        <LeftAlignedCard
          Icon={FiUsers}
          title="Compliance Testing"
          description="UI/UX consistency across platforms"
        />
        <LeftAlignedCard
          Icon={FiZap}
          title="Mobile Security Testing"
          description="Front-to-backend workflow validation"
        />
        <LeftAlignedCard
          Icon={FiUserCheck}
          title="Mobile Test Automation"
          description="Real user scenarios and feedback"
        />
        <LeftAlignedCard
          Icon={FiShield}
          title="Mobile Accessibility Testing"
          description="Ensure updates don't break existing features"
        />
      </div>
    </div>
  );
}
