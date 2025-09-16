import IconCard from "../Common/card/IconCard";
import styles from "./Benefits.module.css";
import { FiZap, FiShield, FiBarChart2 } from "react-icons/fi";
export default function Benefits() {
  return (
    <div className={styles.container}>
      <h2>Top Benefits of Test Automation</h2>
      <div className={styles.CardContainer}>
        <IconCard
          Icon={FiZap}
          title=" Speed Up Releases"
          description="Test automation accelerates the entire QA process by executing test cases faster than manual testing. It helps your team catch bugs early, ensures smoother releases, and significantly reduces the time-to-market for new features and updates."
        />
        <IconCard
          Icon={FiZap}
          title="Prevent Human Errors"
          description="Manual testing is prone to oversight, especially during repetitive tasks. Automation ensures consistency and accuracy in every test cycle, eliminating human error and delivering reliable results with every build."
        />
        <IconCard
          Icon={FiZap}
          title="Scalable Testing"
          description="As your product grows, so do your test cases. Automated testing empowers you to scale effortlessly by running hundreds of tests across different devices, browsers, and platforms — all at once, without added effort or cost."
        />
      </div>
    </div>
  );
}
