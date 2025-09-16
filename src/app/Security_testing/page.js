import Image from "next/image";
import styles from "./page.module.css";
import Banners from "@/components/Security_testing/Banners";
import TestingServices from "@/components/Security_testing/TestingServices";
import TechnologiesStack from "@/components/Security_testing/TechnologiesStack";
import QAServicesPage from "@/components/Security_testing/QAServicesPage";
import HowSoftwareTesting from "@/components/Security_testing/HowSoftwareTesting";
import ToolsAndTechnologies from "@/components/Security_testing/ToolsAndTechnologies";
import TestingImpact from "@/components/Security_testing/TestingImpact";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function Home() {
  return (
    <>
      <Banners />
      <TestingImpact />
      <TestingServices />
      <TechnologiesStack />
      <QAServicesPage />
      <ContactUs />
      <HowSoftwareTesting />
    </>
  );
}
