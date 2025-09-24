import IconCard from "../Common/card/IconCard";
import {
  FaPlug,
  FaShieldAlt,
  FaClock,
  FaRandom,
  FaExchangeAlt,
} from "react-icons/fa";

import classes from "./TestingServices.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
export default function TestingServices() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <LeftAlignedCard
          Icon={FaPlug}
          title="Functional Testing"
          description="Verify that each API endpoint returns the expected response for given inputs."
        />
        <LeftAlignedCard
          Icon={FaShieldAlt}
          title="Security Testing"
          description="Check APIs against  data leaks, unauthorized access, and injections."
        />
        <LeftAlignedCard
          Icon={FaClock}
          title="Performance Testing"
          description="Measure API speed, scalability, and reliability under different loads."
        />
        <LeftAlignedCard
          Icon={FaRandom}
          title="Error Handling Testing"
          description="Ensure APIs return proper error codes and messages for invalid or unexpected inputs."
        />
        <LeftAlignedCard
          Icon={FaExchangeAlt}
          title="Integration Testing"
          description="Validate that APIs interact correctly with databases, services, and third-party systems."
        />
      </div>
    </div>
  );
}
