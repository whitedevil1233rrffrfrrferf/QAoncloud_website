import TechnologiesStack from "@/components/Security_testing/TechnologiesStack";
import QAServicesPage from "@/components/Security_testing/QAServicesPage";
import HowSoftwareTesting from "@/components/Security_testing/HowSoftwareTesting";
import ToolsAndTechnologies from "@/components/Security_testing/ToolsAndTechnologies";
import TestingImpact from "@/components/Security_testing/TestingImpact";
import ContactUs from "@/components/Security_testing/ContactUs";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import Benefits from "@/components/Security_testing/Benefits";
import TestingServices from "@/components/Security_testing/TestingServices";
import WhyQC from "@/components/Security_testing/WhyQC";
import Clients from "@/components/Common/Clients/Clients";

export default function Home() {
  return (
    <>
      <QAoncloudBanner
        title="Elevating Security through Dynamic Application Security Testing"
        image="/images/banners/security.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      {/* <TestingImpact /> */}
      <Benefits />
      <TestingServices />
      <HowSoftwareTesting />
      <TechnologiesStack />
      {/* <QAServicesPage /> */}
      <WhyQC />
      <ContactUs />
      <Clients />
    </>
  );
}
