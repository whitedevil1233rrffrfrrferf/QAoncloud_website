import IconCard from "../Common/card/IconCard";
import {
  FiTarget,
  FiCheckCircle,
  FiMonitor,
  FiLayers,
  FiUserCheck,
  FiRefreshCcw,
  FiAlertTriangle,
  FiGlobe,
} from "react-icons/fi";

import classes from "./TestingServices.module.css";
import LeftAlignedCard from "../Common/card/LeftAlignedCard";
export default function TestingServices() {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Our Testing Services</h2>
      <div className={classes.CardContainer}>
        <LeftAlignedCard
          Icon={FiAlertTriangle}
          title="Vulnerability Assessment"
          description="Systematic scans to uncover security weaknesses, paired with comprehensive reports and actionable mitigation steps to reduce risk exposure."
        />
        <LeftAlignedCard
          Icon={FiShield}
          title="Penetration Testing"
          description="Ethical hacking simulations that mimic real-world cyberattacks, helping you uncover
vulnerabilities with detailed findings and expert remediation guidance."
        />
        <LeftAlignedCard
          Icon={FiGlobe}
          title="Web Application Security Testing"
          description="Thorough testing of your web applications to detect OWASP Top 10 risks, session
flaws, input validation gaps, and insecure configurations."
        />
        <LeftAlignedCard
          Icon={FiSmartphone}
          title="Mobile Application Security Testing"
          description="Security testing for Android and iOS apps, focusing on data storage, insecure APIs,
permissions, and real-device behavior under threat scenarios."
        />
        <LeftAlignedCard
          Icon={FiServer}
          title="API Security Testing"
          description="Thorough testing of API endpoints for authentication, authorization, and data security
issues, including misconfigurations and injection attacks."
        />
        <LeftAlignedCard
          Icon={FiClipboard}
          title="Security Audits &amp; Compliance Testing"
          description="Full-scale audits to ensure alignment with standards like OWASP, GDPR, PCI-DSS,
and HIPAA — keeping your software safe and regulation-ready."
        />
      </div>
    </div>
  );
}
