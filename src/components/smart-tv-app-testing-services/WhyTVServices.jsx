import { FaTv, FaGamepad, FaArrowsAlt, FaGlobe } from "react-icons/fa";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import styles from "./WhyTVServices.module.css";
import IconCard from "../Common/card/IconCard";
import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
export default function WhyTVServices() {
  return (
    <div className={styles.container}>
      <SectionHeader
        heading="Why Smart TV Testing is Critical"
        subheading="TV testing ensures consistent performance, security, and usability
        across the ever-growing device landscape."
      />
      <div className={styles.cards}>
        <RoundedIconCard
          icon={<FaTv />}
          title="Platform Diversity"
          description="Smart TVs run on Android TV, Apple TV, Fire TV, Roku, and more — each with unique requirements and compatibility issues."
        />
        <RoundedIconCard
          icon={<FaGamepad />}
          title="Input Responsiveness"
          description="Testing ensures smooth response times for remote controls, game controllers, and voice commands across devices."
        />
        <RoundedIconCard
          icon={<FaArrowsAlt />}
          title="Resolution & Scaling"
          description="Games and apps must adapt to different resolutions, aspect ratios, and screen sizes without breaking UI or gameplay."
        />
        <RoundedIconCard
          icon={<FaGlobe />}
          title="Network Dependence"
          description="Smart TVs often rely on streaming; we test performance under varied Wi-Fi conditions to avoid lag or buffering."
        />
      </div>
    </div>
  );
}
