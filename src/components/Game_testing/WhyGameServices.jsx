import { FaGamepad, FaBug, FaNetworkWired, FaLock } from "react-icons/fa";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import styles from "./WhyGameServices.module.css";
import IconCard from "../Common/card/IconCard";
import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
export default function WhyGameServices() {
  return (
    <div className={styles.container}>
      <SectionHeader
        heading="Why Game Testing is Critical"
        subheading="Game testing ensures consistent performance, security, and usability
        across the ever-growing device landscape."
      />
      <div className={styles.cards}>
        <RoundedIconCard
          icon={<FaGamepad />}
          title="Platform Diversity"
          description="Games must run smoothly across consoles, PCs, and mobile devices with varying specs."
        />
        <RoundedIconCard
          icon={<FaBug />}
          title="Complex Bugs"
          description="Gameplay, physics, and AI systems often create hidden bugs that require deep exploratory testing."
        />
        <RoundedIconCard
          icon={<FaNetworkWired />}
          title="Multiplayer & Connectivity"
          description="Testing stability of online matches, latency handling, and server performance is critical."
        />
        <RoundedIconCard
          icon={<FaLock />}
          title="Cheat & Exploit Prevention"
          description="Games are frequent targets for hacks and exploits; strong testing helps maintain fair play."
        />
      </div>
    </div>
  );
}
