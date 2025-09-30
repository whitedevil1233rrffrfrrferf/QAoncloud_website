import AutomationProcess from "@/components/Automation_testing/AutomationProcess";
import Benefits from "@/components/Automation_testing/Benefits";
import Clients from "@/components/Common/Clients/Clients";
import Tools from "@/components/Automation_testing/Tools";
import Banners from "@/components/Common/Banner/Banner";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import TestingServices from "@/components/Automation_testing/TestingServices";
import WhyQC from "@/components/Automation_testing/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function AutomationTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="QA Automation Testing Services"
        image="/images/banners/Automation.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <Benefits />
      <TestingServices />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
