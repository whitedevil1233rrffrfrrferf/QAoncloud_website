import IconCard from "../Common/card/IconCard";
import {
  FiTarget,
  FiCheckCircle,
  FiMonitor,
  FiLayers,
  FiUserCheck,
  FiRefreshCcw,
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
          description="Test individual components of the source code"
        />
        <LeftAlignedCard
          Icon={FiCheckCircle}
          title="Smoke Testing"
          description="Initial test on the application to qualify it for further testing"
        />
        <LeftAlignedCard
          Icon={FiMonitor}
          title="Interface Testing"
          description="Test the visual aspects of the software"
        />
        <LeftAlignedCard
          Icon={FiLayers}
          title="Integration Testing"
          description="Validate frontend and backend integrations to guarantee the smooth functioning of the app."
        />
        <LeftAlignedCard
          Icon={FiUserCheck}
          title="User Acceptance Testing"
          description=" Perform specific tasks on the app to analyze the app performance and its functionalities."
        />
        <LeftAlignedCard
          Icon={FiRefreshCcw}
          title="Regression Testing"
          description="Ensure updates don't break existing features"
        />
      </div>
    </div>
  );
}
