import { FaChrome, FaCode, FaLaptop, FaBug } from "react-icons/fa";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import styles from "./WhyCBServices.module.css";
import IconCard from "../Common/card/IconCard";
import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
export default function WhyCBServices() {
  return (
    <div className={styles.container}>
      <SectionHeader
        heading="Why Cross Browser Testing is Critical"
        subheading="Mobile app testing ensures consistent performance, security, and usability
        across the ever-growing device landscape."
      />
      <div className={styles.cards}>
        <RoundedIconCard
          icon={<FaChrome />}
          title="Browser Diversity"
          description="Users access websites on Chrome, Firefox, Safari, Edge, and more. Each browser interprets code differently, causing potential inconsistencies."
        />
        <RoundedIconCard
          icon={<FaCode />}
          title="Rendering Differences"
          description="HTML, CSS, and JavaScript can render differently across browsers, leading to layout shifts, broken styles, or non-functional features."
        />
        <RoundedIconCard
          icon={<FaLaptop />}
          title="Device & OS Variability"
          description="A browser’s behavior changes across Windows, macOS, Linux, iOS, and Android, requiring testing across multiple environments."
        />
        <RoundedIconCard
          icon={<FaBug />}
          title="Hidden Bugs"
          description="Issues may appear in one browser but not in another. Cross-browser testing helps catch these bugs before users do."
        />
      </div>
    </div>
  );
}
