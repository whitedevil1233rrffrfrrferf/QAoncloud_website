import AutomationProcess from "@/components/Automation_testing/AutomationProcess";
import Benefits from "@/components/Automation_testing/Benefits";
import Clients from "@/components/Common/Clients/Clients";
import Tools from "@/components/Automation_testing/Tools";
import Banners from "@/components/Common/Banner/Banner";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import TestingServices from "@/components/Automation_testing/TestingServices";
import WhyQC from "@/components/Automation_testing/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

export const metadata = {
  title: "Test Automation Services | QA Automation Testing Company USA",
  description:
    "Boost software quality with our Test Automation Services. Faster testing, fewer bugs, and seamless deployment. Get reliable automation today!",
  authors: [{ name: "QAonCloud" }],
  keywords:
    "automation testing services,test automation,test automation services,test automation framework,test automation strategy,automation testing,automated qa testing",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://www.qaoncloud.com/automation-testing-services",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "QAonCloud",
    title:
      "Automation Testing Services | Automation Testing Company USA | QAonCloud",
    description:
      "Get the most efficient and accurate testing results with QAonCloud's Test Automation Services. We are a leading automation testing company, delivering QA Automation Services that meet the highest standards.",
    url: "https://www.qaoncloud.com/automation-testing-services",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/Automation.jpg",
        width: 1919,
        height: 1371,
        alt: "Automation Testing Services USA",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Testing Services | QAonCloud",
    description:
      "Get the most efficient and accurate testing results with QAonCloud's Test Automation Services. We are a leading automation testing company, delivering QA Automation Services that meet the highest standards.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/Automation.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};

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
