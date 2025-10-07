import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import Challenges from "@/components/Fintech/Challenges";
import FeaturesSection from "@/components/Fintech/FeaturesSection";
import QAServices from "@/components/Fintech/QAServices";
import ToolsAndTechnologies from "@/components/Fintech/ToolsAndTechnologies";
import WhyQC from "@/components/Fintech/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

export const metadata = {
  title: "Banking & Financial App Testing Services",
  description:
    "QAoncloud, the leading Banking Software Testing Company USA, offers comprehensive FinTech Software Testing Services to ensure the security and reliability of your financial technology solutions.",
  keywords: [
    "FinTech Software Testing Services",
    "Fintech app testing",
    "fintech app security",
    "fintech app cybersecurity",
    "fintech testing",
    "fintech app testing services",
    "fintech application testing",
    "financial app testing",
    "testing a fintech application",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "FinTech Software Testing Services | Banking Software Testing Services USA",
    description:
      "QAoncloud, the leading Banking Software Testing Company USA, offers comprehensive FinTech Software Testing Services to ensure the security and reliability of your financial technology solutions.",
    url: "https://www.qaoncloud.com/fintech-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/fintec.jpg",
        width: 1919,
        height: 1371,
        alt: "FinTech Software Testing Services | Banking Software Testing Services USA",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FinTech Software Testing Services | Banking Software Testing Services USA",
    description:
      "QAoncloud, the leading Banking Software Testing Company USA, offers comprehensive FinTech Software Testing Services to ensure the security and reliability of your financial technology solutions.",
    images: ["https://www.qaoncloud.com/public/assets/img/banners/fintec.jpg"],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical: "https://www.qaoncloud.com/fintech-testing-services",
};

export default function FinTechTestingServices() {
  return (
    <div>
      <QAoncloudBanner
        title="FinTech Software Testing Services For Fintech Applications "
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
