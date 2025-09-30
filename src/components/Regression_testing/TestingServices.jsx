import IconCard from "../Common/card/IconCard";
import {
  FaTools, // unit testing
  FaPuzzlePiece, // integration
  FaBullseye, // target / system validation
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
          Icon={FaBullseye}
          FaCheckCircle
          title="Unit Testing"
          description="Test single units of the code"
        />
        <LeftAlignedCard
          Icon={FaPuzzlePiece}
          title="Integration Testing"
          description="Assess if all software modules are tested and perform well as a group."
        />
        <LeftAlignedCard
          Icon={FaTools}
          title="System Testing"
          description="Assess the entire system from end to end"
        />
        <LeftAlignedCard
          Icon={FaCheckCircle}
          title="Acceptance Testing"
          description="Test software applications to validate system acceptability"
        />
      </div>
    </div>
  );
}
