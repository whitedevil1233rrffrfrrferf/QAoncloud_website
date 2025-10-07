import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactUs from "@/components/Security_testing/ContactUs";
import WebProcess from "@/components/Web_testing/WebProcess";
import WebsiteTestingServices from "@/components/Web_testing/WebTestingServices";
import WhyQC from "@/components/Web_testing/WhyQC";
import WhyWebServices from "@/components/Web_testing/WhyWebServices";

export const metadata = {
  title: "Web Application Testing Services | Web App Testing USA",
  description:
    "QAonCloud is one of the leading Web Application Testing Company offering expert web app testing services. Our team of professionals uses the latest web app testing tools to ensure the quality, performance and compatibility of your web applications.",
  keywords: [
    "web app testing services",
    "web app performance testing",
    "web app testing tools",
    "penetration testing for web application",
    "web application penetration testing",
    "web application security testing",
    "web application testing",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Web Application Testing Service | Web App Testing USA",
    description:
      "QAonCloud is one of the leading Web Application Testing Company offering expert web app testing services. Our team of professionals uses the latest web app testing tools to ensure the quality, performance and compatibility of your web applications.",
    url: "https://www.qaoncloud.com/web-app-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/Web-app-testing.jpg",
        width: 1919,
        height: 1371,
        alt: "Web Application Testing Service | Web App Testing USA",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Application Testing Service | Web App Testing USA",
    description:
      "QAonCloud is one of the leading Web Application Testing Company offering expert web app testing services. Our team of professionals uses the latest web app testing tools to ensure the quality, performance and compatibility of your web applications.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/Web-app-testing.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical: "https://www.qaoncloud.com/web-app-testing-services",
};

export default function WebsiteTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Discover Hidden Bugs with our Website QA Testing Services"
        image="/images/banners/Mobile-App-testing.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <WebsiteTestingServices />

      <WebProcess />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
