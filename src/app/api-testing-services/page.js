import HowWeWork from "@/components/API_testing/HowWeWork";
import TestingServices from "@/components/API_testing/TestingServices";
import WhyAPITesting from "@/components/API_testing/WhyAPITesting";
import WhyQC from "@/components/API_testing/WhyQC";
import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactUs from "@/components/Security_testing/ContactUs";

export const metadata = {
  title: "API Testing Services | API Testing Company USA",
  description:
    "Reliable API testing services to ensure performance, security, and functionality. Boost your app’s reliability with our expert testing solutions.",
  keywords: [
    "api testing services",
    "web testing services",
    "web app testing company",
    "api testing company",
    "api web services testing",
    "automate api testing",
    "api testing automation",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "API Testing Services | API Testing Company USA",
    description:
      "Ensure the reliability of your API web services with QAonCloud's Automated API Testing Services. Our team of experts provides efficient and accurate results to help you maintain a seamless API experience",
    url: "https://www.qaoncloud.com/api-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/API.jpg",
        width: 1919,
        height: 1371,
        alt: "API Testing Company USA",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "API Testing Services | API Testing Company USA",
    description:
      "Ensure the reliability of your API web services with QAonCloud's Automated API Testing Services. Our team of experts provides efficient and accurate results to help you maintain a seamless API experience",
    images: ["https://www.qaoncloud.com/public/assets/img/banners/API.jpg"],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical: "https://www.qaoncloud.com/api-testing-services",
};

export default function APITesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Achieve Seamless Integration with API Automation Testing"
        image="/images/banners/API.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <WhyAPITesting />
      <TestingServices />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
