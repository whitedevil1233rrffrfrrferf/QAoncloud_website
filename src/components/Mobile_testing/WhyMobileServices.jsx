import { FaMobileAlt, FaSyncAlt, FaWifi, FaShieldAlt } from "react-icons/fa";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import styles from "./WhyMobileServices.module.css";
import IconCard from "../Common/card/IconCard";
import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
export default function WhyMobileServices() {
  return (
    <div className={styles.container}>
      <SectionHeader
        heading="Why Mobile Testing is Critical"
        subheading="Mobile app testing ensures consistent performance, security, and usability
        across the ever-growing device landscape."
      />
      <div className={styles.cards}>
        <RoundedIconCard
          icon={<FaMobileAlt />}
          title="Device Fragmentation"
          description="Hundreds of devices, screen sizes, and hardware configurations make uniform performance a challenge."
        />
        <RoundedIconCard
          icon={<FaSyncAlt />}
          title="Frequent OS Updates"
          description="Regular Android and iOS updates can break functionalities overnight if not tested in advance."
        />
        <RoundedIconCard
          icon={<FaWifi />}
          title="Network Variability"
          description="Apps must perform well on both high-speed Wi-Fi and unstable mobile data connections."
        />
        <RoundedIconCard
          icon={<FaShieldAlt />}
          title="Security Risks"
          description="Mobile apps are prime targets for cyber threats; robust testing ensures user data stays safe."
        />
      </div>
    </div>
  );
}
