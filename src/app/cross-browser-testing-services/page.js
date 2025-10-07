import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import CBProcess from "@/components/Cross_browser_testing/CBProcess";
import CrossBrowserTestingServices from "@/components/Cross_browser_testing/CrossBrowserTestingServices";
import WhyCBServices from "@/components/Cross_browser_testing/WhyCBServices";
import WhyQC from "@/components/Cross_browser_testing/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

export const metadata = {
  title: "Cross Browser Testing Services | Automated Cross Browser Testing USA",
  description:
    "QAonCloud, a cross browser testing company in the USA, offers a powerful cross browser testing services for seamless cross browser compatibility.",
  keywords: [
    "Cross Browser Testing Services",
    "Cross Browser Testing Company",
    "cross browser testing",
    "cross browser testing tool",
    "what is cross browser testing",
    "automated cross browser testing",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Cross Browser Testing Services - QAonCloud",
    description:
      "QAonCloud, a cross browser testing company in the USA, offers a powerful cross browser testing services for seamless cross browser compatibility.",
    url: "https://www.qaoncloud.com/cross-browser-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/Cross-Browser.jpg",
        width: 1919,
        height: 1371,
        alt: "Cross Browser Testing Services - QAonCloud",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross Browser Testing Services - QAonCloud",
    description:
      "QAonCloud, a cross browser testing company in the USA, offers a powerful cross browser testing services for seamless cross browser compatibility.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/Cross-Browser.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical: "https://www.qaoncloud.com/cross-browser-testing-services",
};

export default function CrossBrowserTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Ensure your website looks great on every browser"
        image="/images/banners/Cross-Browser.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <CrossBrowserTestingServices />

      <CBProcess />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
