import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import CPProcess from "@/components/Cross_platform_testing/CPProcess";

import CrossPlatformTestingServices from "@/components/Cross_platform_testing/CrossPlatformTestingServices";
import WhyCPServices from "@/components/Cross_platform_testing/WhyCPServices";
import WhyQC from "@/components/Cross_platform_testing/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

// app/cross-platform-testing-services/page.js
export const metadata = {
  title: "Cross Platform Testing Services | Cross Platform Testing USA",
  description:
    "QAoncloud is a cross platform testing company USA offering comprehensive cross platform testing services to ensure seamless performance and compatibility on multiple devices and operating systems. Get your cross platform testing done with QAoncloud today.",
  keywords: [
    "Cross Platform Testing Services",
    "Cross Platform Testing",
    "cross platform testing tools",
    "cross platform browser testing",
    "Cross Platform Testing Company USA",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "Cross Platform Testing Services | Cross Platform Testing USA",
    description:
      "QAoncloud is a cross platform testing company USA offering comprehensive cross platform testing services to ensure seamless performance and compatibility on multiple devices and operating systems. Get your cross platform testing done with QAoncloud today.",
    url: "https://www.qaoncloud.com/cross-platform-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/cross-platform-testing.jpg",
        width: 1919,
        height: 1371,
        alt: "Cross Platform Testing Services | Cross Platform Testing USA",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross Platform Testing Services | Cross Platform Testing USA",
    description:
      "QAoncloud is a cross platform testing company USA offering comprehensive cross platform testing services to ensure seamless performance and compatibility on multiple devices and operating systems. Get your cross platform testing done with QAoncloud today.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/cross-platform-testing.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical: "https://www.qaoncloud.com/cross-platform-testing-services",
};

export default function CrossPlatformTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Seamless Experience Across Platforms With Advanced Cross-Platform Testing Services"
        image="/images/banners/Cross-Platform.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <CrossPlatformTestingServices />
      <CPProcess />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
