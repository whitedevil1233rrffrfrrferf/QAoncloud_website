import styles from "./services.module.css";
import Card from "../Common/card/Card";
import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
import { FaRobot, FaShieldAlt, FaClipboardCheck } from "react-icons/fa";
import {
  MdOutlinePhoneIphone,
  MdChecklistRtl,
  MdOutlineAnalytics,
} from "react-icons/md";
function Solutions() {
  return (
    <div className={styles.solutions}>
      <h1 className={styles.heading}>Solutions</h1>
      <p className={styles.para}>
        Our full range of QA testing Services are delivered by highly skilled
        and trained QA professionals dedicated <br />
        to timely deliveries with uncompromised quality.
      </p>
      <div className={styles.card_container}>
        <RoundedIconCard
          icon={<FaRobot />}
          title="Mobile Testing"
          description="Deliver exceptional mobile experiences across every device. Our comprehensive mobile testing covers performance optimization, usability validation, and security assessment to ensure your app performs brilliantly in users' hands.
"
        />
        <RoundedIconCard
          icon={<FaRobot />}
          title="Web Testing"
          description="Create web experiences that work everywhere, every time. We rigorously test your website's functionality, visual consistency, and security across all browsers and devices, ensuring flawless performance for every visitor.
"
        />
        <RoundedIconCard
          icon={<FaRobot />}
          title="Game Testing"
          description="
          Elevate your game to professional standards. Our specialized game testing identifies performance issues, eliminates bugs,
          and optimizes gameplay to deliver the smooth, engaging experience that keeps players coming back"
        />
        <RoundedIconCard
          icon={<FaRobot />}
          title="Smart TV Testing"
          description="
          Optimize your Smart TV applications for living room entertainment. We test across multiple platforms and interfaces to ensure
          your apps are intuitive, responsive, and deliver premium viewing experiences on every Smart TV."
        />

        <RoundedIconCard
          icon={<FaRobot />}
          title="Cross-Platform Testing"
          description="
          One codebase, unlimited reach. Our cross-platform testing ensures your software delivers consistent functionality
          and visual excellence across all devices and operating systems, maximizing your market potential."
        />
        <RoundedIconCard
          icon={<FaRobot />}
          title="Cross-Browser Testing"
          description="
          Guarantee consistent web experiences regardless of browser choice. We meticulously test your website across Chrome,
          Firefox, Safari, Edge, and more, ensuring every user enjoys the same high-quality experience."
        />
      </div>
    </div>
  );
}

export default Solutions;
