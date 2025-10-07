import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import MobileProcess from "@/components/Mobile_testing/MobileProcess";
import MobileTestingServices from "@/components/Mobile_testing/MobileTestingServices";
import WhyMobileServices from "@/components/Mobile_testing/WhyMobileServices";
import WhyQC from "@/components/Mobile_testing/WhyQc";
import ContactUs from "@/components/Security_testing/ContactUs";

export const metadata = {
  title: "Mobile Testing Services | Mobile App Testing Company",
  description:
    "Get reliable Mobile Application Testing Services to find bugs, improve performance, and ensure a smooth user experience for your app.",
  keywords: [
    "mobile application testing",
    "mobile testing company",
    "mobile testing services",
    "testing mobile applications",
    "mobile automation testing",
    "compatibility testing",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Mobile App Testing Services | Mobile App Testing USA",
    description:
      "QAonCloud is a leading Mobile Application Testing Company providing comprehensive and reliable mobile app testing services. Our experts ensure top-quality testing for both iOS and Android applications to guarantee their seamless performance.",
    url: "https://www.qaoncloud.com/mobile-app-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/mob-app-testing.jpg",
        width: 1919,
        height: 1371,
        alt: "Mobile App Testing Services | Mobile App Testing USA",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Testing Services | Mobile App Testing USA",
    description:
      "QAonCloud is a leading Mobile Application Testing Company providing comprehensive and reliable mobile app testing services. Our experts ensure top-quality testing for both iOS and Android applications to guarantee their seamless performance.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/mob-app-testing.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical: "https://www.qaoncloud.com/mobile-app-testing-services",
};

export default function MobileTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Mobile Automation Testing Services to unlock full potential"
        image="/images/banners/Mobile-App-testing.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <MobileTestingServices />

      <MobileProcess />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
