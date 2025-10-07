import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import Challenges from "@/components/EventManagement/Challenges";
import FeaturesSection from "@/components/EventManagement/FeaturesSection";
import QAServices from "@/components/EventManagement/QAServices";
import ToolsAndTechnologies from "@/components/EventManagement/ToolsAndTechnologies";
import WhyQC from "@/components/EventManagement/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

export const metadata = {
  title: "Event Management Software Testing Services - QAonCloud",
  description:
    "Looking for reliable Event Management App Testing services in the USA? QAonCloud offers top-notch Event Management Software Testing services to help ensure the quality of your event management app. Contact us today to learn more.",
  keywords: [
    "Event Management Software Testing Services",
    "QA for Event Management Company",
    "Event Management Mobile App Security Testing",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Event Management Software Testing Services",
    description:
      "Looking for reliable Event Management App Testing services in the USA? QAonCloud offers top-notch Event Management Software Testing services to help ensure the quality of your event management app. Contact us today to learn more.",
    url: "https://www.qaoncloud.com/event-management-software-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/event-mangement.jpg",
        width: 1919,
        height: 1371,
        alt: "Event Management Software Testing Services",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Management Software Testing Services",
    description:
      "Looking for reliable Event Management App Testing services in the USA? QAonCloud offers top-notch Event Management Software Testing services to help ensure the quality of your event management app. Contact us today to learn more.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/event-mangement.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical:
    "https://www.qaoncloud.com/event-management-software-testing-services",
};

export default function EventManagementTestingServices() {
  return (
    <div>
      <QAoncloudBanner
        title="Event Management Software Testing Services"
        image="/images/banners/event-mangement.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <FeaturesSection />
      <QAServices />

      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
