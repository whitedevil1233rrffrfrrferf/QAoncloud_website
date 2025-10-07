import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactUs from "@/components/Security_testing/ContactUs";
import TVProcess from "@/components/smart-tv-app-testing-services/TVProcess";
import TVTestingServices from "@/components/smart-tv-app-testing-services/TVTestingServices";
import WhyQC from "@/components/smart-tv-app-testing-services/WhyQC";
import WhyTVServices from "@/components/smart-tv-app-testing-services/WhyTVServices";

export const metadata = {
  title: "Smart TV App Testing Services | Smart TV App Testing Company USA",
  description:
    "QAoncloud is one of the leading Smart TV Testing Company USA, offers cutting-edge Automated Testing for Smart TV to ensure seamless performance and compatibility.",
  keywords: [
    "Smart TV app testing services",
    "Smart TV app testing company",
    "Smart TV app development testing",
    "Smart TV app testing tools",
    "Smart TV app compatibility testing",
    "Smart TV app performance testing",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Smart TV App Testing Services | Smart TV App Testing Company USA",
    description:
      "QAoncloud is one of the leading Smart TV Testing Company USA, offers cutting-edge Automated Testing for Smart TV to ensure seamless performance and compatibility.",
    url: "https://www.qaoncloud.com/smart-tv-app-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/Smart tv app testing.jpg",
        width: 1919,
        height: 1371,
        alt: "Smart TV App Testing Services",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart TV App Testing Services | Smart TV App Testing Company USA",
    description:
      "QAoncloud is one of the leading Smart TV Testing Company USA, offers cutting-edge Automated Testing for Smart TV to ensure seamless performance and compatibility.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/Smart tv app testing.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical: "https://www.qaoncloud.com/smart-tv-app-testing-services",
};

export default function SmartTVTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Elevate streaming experience with our smart TV app testing"
        image="/images/banners/Smart-tv-app-testing.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <TVTestingServices />
      <TVProcess />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
