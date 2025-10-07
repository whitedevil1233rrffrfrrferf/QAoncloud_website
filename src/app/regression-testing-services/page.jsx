import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import HowWeWork from "@/components/Regression_testing/HowWeWork";
import TestingServices from "@/components/Regression_testing/TestingServices";
import WhyQC from "@/components/Regression_testing/WhyQC";
import WhyRegressionTesting from "@/components/Regression_testing/WhyRegressionTesting";
import ContactUs from "@/components/Security_testing/ContactUs";

export const metadata = {
  title:
    "Automated Regression Testing Services | Software Regression Testing Company",
  description:
    "Identify and fix defects with QAonCloud's regression testing services. Ensure your application's stability and functionality with thorough testing.",
  authors: [{ name: "QAonCloud" }],
  keywords:
    "website regression testing,regression testing services,functional regression testing,agile regression testing,automated regression testing,regression testing company,regression testing tools",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://www.qaoncloud.com/regression-testing-services",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "QAonCloud",
    title: "Regression Testing Services | Regression Testing Company USA",
    description:
      "Ensure the continuous stability and performance of your applications with QAonCloud's regression testing services. Our team of experts uses the latest tools and techniques to deliver efficient and accurate results.",
    url: "https://www.qaoncloud.com/regression-testing-services",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/regression.jpg",
        width: 1919,
        height: 1371,
        alt: "Regression Testing Services",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regression Testing Services | Regression Testing Company USA",
    description:
      "Ensure the continuous stability and performance of your applications with QAonCloud's regression testing services. Our team of experts uses the latest tools and techniques to deliver efficient and accurate results.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/regression.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};
export default function RegressionTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Software Regression Testing Services"
        image="/images/banners/security.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <WhyRegressionTesting />
      <TestingServices />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
