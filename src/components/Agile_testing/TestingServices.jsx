import IconCard from "../Common/card/IconCard";
import {
  FaTasks,
  FaPlusCircle,
  FaSync,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

import classes from "./TestingServices.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
export default function TestingServices() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <LeftAlignedCard
          Icon={FaTasks}
          title="Sprint-Based Testing"
          description="Align testing cycles with sprint goals to validate stories and features incrementally."
        />
        <LeftAlignedCard
          Icon={FaPlusCircle}
          title="Continuous Integration Testing"
          description="Run automated tests with every code commit to catch issues early in development."
        />
        <LeftAlignedCard
          Icon={FaSync}
          title="Exploratory Testing"
          description="Adapt test scenarios dynamically to uncover edge cases during rapid iterations."
        />
        <LeftAlignedCard
          Icon={FaUsers}
          title="Collaborative Testing"
          description="Work closely with developers and product owners to ensure requirements are met."
        />
        <LeftAlignedCard
          Icon={FaCheckCircle}
          title="Definition of Done"
          description="Guarantee quality by making testing an integral checkpoint for every completed story."
        />
      </div>
    </div>
  );
}
