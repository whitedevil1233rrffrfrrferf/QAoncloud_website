import IconCard from "../Common/card/IconCard";
import {
  FaLock, // security lock
  FaProjectDiagram, // structured architecture
  FaTachometerAlt, // speed/load
  FaTasks, // functional checklists
} from "react-icons/fa";

import classes from "./TestingServices.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
export default function TestingServices() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <LeftAlignedCard
          Icon={FaLock}
          title="API Security Testing"
          description="Perform security testing on features like Authentication, permission settings and other controls"
        />
        <LeftAlignedCard
          Icon={FaProjectDiagram}
          title="Web API Testing"
          description="Covers both functionality and the architectural pattern of the app for a complete assessment of the functionalities."
        />
        <LeftAlignedCard
          Icon={FaTachometerAlt}
          title="API Load Testing"
          description="Use various specific load cases to estimate if the app or software can perform optimally under different loads"
        />
        <LeftAlignedCard
          Icon={FaTasks}
          title="Functional API Testing"
          description="Ensures that all aspects are validated based on all functionalities and API Layers."
        />
      </div>
    </div>
  );
}
