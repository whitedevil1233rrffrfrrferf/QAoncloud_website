import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import Challenges from "@/components/Communications/Challenges";
import FeaturesSection from "@/components/Communications/FeaturesSection";
import QAServices from "@/components/Communications/QAServices";
import ToolsAndTechnologies from "@/components/Communications/ToolsAndTechnologies";
import WhyQC from "@/components/Communications/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

export const metadata = {
  title: "Telecom App Testing Services | Telecom Software Testing - QAonCloud",
  description:
    "QAoncloud, the leading Telecommunications Testing Company USA, offers comprehensive Telecom Software Testing Services to ensure reliable and efficient telecommunications.",
  keywords: [
    "Telecommunications Software Testing Services",
    "Telecom Testing Company USA",
    "Application Testing Services for Telecom",
    "Testing Services for Telecom Industry",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Telecom Testing Services | Telecommunication Testing Services",
    description:
      "QAoncloud, the leading Telecommunications Testing Company USA, offers comprehensive Telecom Software Testing Services to ensure reliable and efficient telecommunications.",
    url: "https://www.qaoncloud.com/telecom-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/telecom.jpg",
        width: 1919,
        height: 1371,
        alt: "Telecom Testing Services | Telecommunication Testing Services",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telecom Testing Services | Telecommunication Testing Services",
    description:
      "QAoncloud, the leading Telecommunications Testing Company USA, offers comprehensive Telecom Software Testing Services to ensure reliable and efficient telecommunications.",
    images: ["https://www.qaoncloud.com/public/assets/img/banners/telecom.jpg"],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical: "https://www.qaoncloud.com/telecom-testing-services",
};

export default function CommunicationsTestingServices() {
  return (
    <div>
      <QAoncloudBanner
        title="Telecom App Testing Services"
        image="/images/banners/fintech.webp"
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
