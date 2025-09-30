import IconCard from "../Common/card/IconCard";
import { FiBarChart2, FiGlobe, FiSmartphone, FiKey } from "react-icons/fi";

import classes from "./TestingServices.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
export default function TestingServices() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <LeftAlignedCard
          Icon={FiBarChart2}
          title="Data-Driven Automation"
          description="This guarantees reusability, easy maintenance, and better coverage and is also time-efficient."
        />
        <LeftAlignedCard
          Icon={FiGlobe}
          title="Cross-Browser Automation"
          description="It provides better test coverage and enhances the application's performance in different browsers."
        />
        <LeftAlignedCard
          Icon={FiSmartphone}
          title="Cross-Platform Automation"
          description="Provide users with optimal user experience on mobile and web applications."
        />
        <LeftAlignedCard
          Icon={FiKey}
          title="Keyword-Driven Automation"
          description="Reduced need for maintenance in the long run."
        />
      </div>
    </div>
  );
}
