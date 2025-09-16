import { FaRobot, FaShieldAlt, FaClipboardCheck } from "react-icons/fa";
import {
  MdOutlinePhoneIphone,
  MdChecklistRtl,
  MdOutlineAnalytics,
} from "react-icons/md";
import { RiBarChartBoxLine } from "react-icons/ri";
import { FiCode } from "react-icons/fi";
import RoundedIconCard from "../Common/RoundedIconCard/RoundedIconCard";
import styles from "./QAServices.module.css";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
export default function QAServices() {
  return (
    <div className={styles.container}>
      <SectionHeader
        heading="QA Services Offered by QaonCloud"
        subheading="At QaonCloud, we offer a powerful suite of software testing services tailored to your product&#39;s
        needs. From functional testing to automation and security, our QA experts ensure your software
        is fast, secure, and bug-free across all platforms and devices."
      />
      <div className={styles.cardContainer}>
        <RoundedIconCard
          icon={<FaRobot />}
          title="Automation Testing"
          description="Our Automation Testing Services are focused at enabling the organizations to augment their release velocity and accelerate the testing process while reducing overall testing effort."
        />
        <RoundedIconCard
          icon={<MdOutlineAnalytics />}
          title="Performance Testing"
          description="With a team of seasoned QA professionals, we deliver unsurpassed load & performance testing to evaluate the maximum load that can be effectively handled by the system."
        />
        <RoundedIconCard
          icon={<MdOutlinePhoneIphone />}
          title="Mobile Testing"
          description="Being experts in both Manual and Automated mobile testing, we thoroughly check for consistency, usability and optimum functionality."
        />
        <RoundedIconCard
          icon={<FiCode />}
          title="Code Verification"
          description="Code Testing ensures your code is extensible and free of errors. Our experts deliver excellence-oriented code verification testing."
        />
        <RoundedIconCard
          icon={<FaShieldAlt />}
          title="Security Testing"
          description="We perform vulnerability scanning, penetration testing, and auditing to validate security mechanisms and ensure compliance."
        />
        <RoundedIconCard
          icon={<FaClipboardCheck />}
          title="Manual Testing"
          description="Manual Testing offers highly reliable results through thorough validation by our expert team."
        />
      </div>
    </div>
  );
}
