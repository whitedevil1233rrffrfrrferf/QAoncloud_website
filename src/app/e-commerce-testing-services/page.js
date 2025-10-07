import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import Challenges from "@/components/ECommerce/Challenges";
import FeaturesSection from "@/components/ECommerce/FeaturesSection";
import QAServices from "@/components/ECommerce/QAServices";
import ToolsAndTechnologies from "@/components/ECommerce/ToolsAndTechnologies";
import WhyQC from "@/components/ECommerce/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

export const metadata = {
  title: "E-commerce Testing Services | E-commerce Testing Company USA",
  description:
    "QAoncloud, the trusted E-commerce Testing Company USA, offers comprehensive E-commerce Testing Services to ensure seamless user experience and optimal website performance.",
  keywords: [
    "E-commerce Testing Services",
    "E-commerce Testing Company USA",
    "Ecommerce Website and App Testing",
    "E-commerce web testing",
    "E-commerce mobile testing",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "E-commerce Testing Services | E-commerce Testing Company USA",
    description:
      "QAoncloud, the trusted E-commerce Testing Company USA, offers comprehensive E-commerce Testing Services to ensure seamless user experience and optimal website performance.",
    url: "https://www.qaoncloud.com/e-commerce-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/E-commerce.jpg",
        width: 1919,
        height: 1371,
        alt: "E-commerce Testing Services",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Testing Services | E-commerce Testing Company USA",
    description:
      "QAoncloud, the trusted E-commerce Testing Company USA, offers comprehensive E-commerce Testing Services to ensure seamless user experience and optimal website performance.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/E-commerce.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical: "https://www.qaoncloud.com/e-commerce-testing-services",
};

export default function ECommerce() {
  return (
    <div>
      <QAoncloudBanner
        title="E-Commerce Software Testing Services"
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
