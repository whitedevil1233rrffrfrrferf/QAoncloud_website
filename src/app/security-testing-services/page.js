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
import Script from "next/script";
/*Meta data */

export const metadata = {
  title: "Security Testing Services | Penetration Testing Company",
  description:
    "Choose QAonCloud for expert security testing & penetration testing services to safeguard your business from threats and vulnerabilities.",
  authors: [{ name: "QAonCloud" }],
  keywords:
    "security testing, web application security testing, security testing companies, penetration testing, vulnerability testing, penetration testing company",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://www.qaoncloud.com/security-testing-services",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "QAonCloud",
    title: "Security Testing Services | Penetration Testing Company USA",
    description:
      "Protect your business and applications with QAonCloud's security testing services, including expert application security testing and penetration testing. Stay ahead of potential threats with our comprehensive approach.",
    url: "https://www.qaoncloud.com/security-testing-services",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/security.jpg",
        width: 1919,
        height: 1371,
        alt: "Security Testing Services USA",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Testing Services | Security Testing Company USA",
    description:
      "Protect your business and applications with QAonCloud's security testing services, including expert application security testing and penetration testing. Stay ahead of potential threats with our comprehensive approach.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/security.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};

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
