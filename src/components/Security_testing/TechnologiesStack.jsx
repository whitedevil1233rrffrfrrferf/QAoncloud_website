import BoxCard from "../Common/card/BoxCard";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import classes from "./TechnologiesStack.module.css";
export default function TechnologiesStack() {
  return (
    <div className={classes.technologiesStack}>
      <SectionHeader
        heading="Our Testing Tech Stack"
        subheading="We leverage industry-leading tools and technologies to deliver comprehensive testing solutions that meet modern development needs."
      />

      <div className={classes.container}>
        <BoxCard title="Burp Suite" description="Automation" />
        <BoxCard title="OWASP ZAP" description="Mobile Testing" />
        <BoxCard title="Metasploit" description="Performance" />
        <BoxCard title="Nessus" description="API Testing" />
        <BoxCard title="Nmap" description="Test Management" />
        <BoxCard title="Postman" description="CI/CD" />
        <BoxCard title="Wireshark" description="E2E Testing" />
        <BoxCard title="MobSF" description="Unit Testing" />
        <BoxCard title="Kali Linux" description="Web Testing" />
      </div>
    </div>
  );
}
