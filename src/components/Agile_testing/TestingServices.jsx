import IconCard from "../Common/card/IconCard";
import {
  FaProjectDiagram, // BDD – collaboration around scenarios
  FaClipboardCheck, // ATDD – acceptance criteria
  FaSearch, // Exploratory Testing – investigation
  FaHandshake, // Collaborative Testing – teamwork
  FaFlagCheckered, // Definition of Done – completion & quality gate
} from "react-icons/fa";

import classes from "./TestingServices.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
export default function TestingServices() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <LeftAlignedCard
          Icon={FaProjectDiagram}
          title="Behaviour Driven Development"
          description="Work collaboratively with developers and stakeholders to define and build tests."
        />
        <LeftAlignedCard
          Icon={FaClipboardCheck}
          title="Acceptance test-driven development"
          description="Understand user perspectives and defines tests around the specific functionality."
        />
        <LeftAlignedCard
          Icon={FaSearch}
          title="Exploratory Testing"
          description="Strategic plan for agile testing with unscripted testing "
        />
        <LeftAlignedCard
          Icon={FaHandshake}
          title="Collaborative Testing"
          description="Work closely with developers and product owners to ensure requirements are met."
        />
        <LeftAlignedCard
          Icon={FaFlagCheckered}
          title="Definition of Done"
          description="Guarantee quality by making testing an integral checkpoint for every completed story."
        />
      </div>
    </div>
  );
}
