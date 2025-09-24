import IconCard from "../Common/card/IconCard";
import {
  FaTools,
  FaPlusCircle,
  FaBullseye,
  FaProjectDiagram,
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
          Icon={FaTools}
          title="Corrective Regression"
          description="Re-run existing test cases when no major code changes are made."
        />
        <LeftAlignedCard
          Icon={FaPlusCircle}
          title="Progressive Regression"
          description="Update and run test cases when new features are introduced."
        />
        <LeftAlignedCard
          Icon={FaBullseye}
          title="Selective Regression"
          description="Test only the impacted modules using a subset of test cases."
        />
        <LeftAlignedCard
          Icon={FaProjectDiagram}
          title="Partial Regression"
          description="Validate interaction between updated code and existing functionality."
        />
        <LeftAlignedCard
          Icon={FaCheckCircle}
          title="Complete Regression"
          description="Full system validation after major changes or multiple releases."
        />
      </div>
    </div>
  );
}
