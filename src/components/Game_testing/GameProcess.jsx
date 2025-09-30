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
import Card from "../Common/card/Card";
export default function GameProcess() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <Card
          title="Security Testing"
          description="
          Improve gaming app security, secure payment gateways and portals, maintaining user data security."
        />
        <Card
          title="AR/VR/MR Testing"
          description="
          Test game's performance on AR/VR/MR platforms, ensure app stability with advanced technology integrations, test for game app usability friendly."
        />
        <Card
          title="Game Console Testing"
          description="
          Evaluate gaming app and integration with various devices, ensure that the game runs well on systems like Xbox360, PS4, 3DS, WiiU, and more."
        />
        <Card
          title="GUI Testing"
          description="
          Test graphical user interface, test graphic rendering, evaluate if GUI performs well on various hardware and software platforms."
        />

        <Card
          title="Functionality Testing"
          description="
          Ensure game functions meet developer requirements, deliver high-quality games and assess game app functionalities, identifying problems like freezes, and crashes due to errors and bugs."
        />
        <Card
          title="Performance Testing"
          description="
          Use key metrics to ensure game quality and performance, ensure the game meets key requirements, identify areas for speed optimization as part of our services, prevent prolonged loading times by ensuring app performance."
        />
      </div>
    </div>
  );
}
