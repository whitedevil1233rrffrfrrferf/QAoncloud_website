import IconCard from "../Common/card/IconCard";
import styles from "./Benefits.module.css";
import {
  FiDatabase,
  FiTrendingUp,
  FiClock,
  FiDollarSign,
  FiCheckCircle,
} from "react-icons/fi";
export default function Benefits() {
  return (
    <div className={styles.container}>
      <h2>Top Benefits of Test Automation</h2>
      <div className={styles.CardContainer}>
        <IconCard
          Icon={FiDatabase}
          title=" Test Big Data"
          description="Scrutinize and test large, complex codes easily and quickly"
        />
        <IconCard
          Icon={FiTrendingUp}
          title="Increase App efficiency"
          description="Use automation test scripts specific to native platforms"
        />
        <IconCard
          Icon={FiClock}
          title="Faster Testing"
          description="Perform tests faster than manual testing across platforms, browsers, devices, etc"
        />
        <IconCard
          Icon={FiDollarSign}
          title="Minimal Overhead costs"
          description="Involves cost-effective procedures with automated test cycles"
        />
        <IconCard
          Icon={FiCheckCircle}
          title="Accuracy"
          description="Eliminate human errors and repeat the tasks any number of times with accuracy"
        />
      </div>
    </div>
  );
}
