import HowWeWork from "@/components/Agile_testing/HowWeWork";
import TestingServices from "@/components/Agile_testing/TestingServices";
import WhyAgileTesting from "@/components/Agile_testing/WhyAgileTesting";
import WhyQC from "@/components/Agile_testing/WhyQC";

import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactUs from "@/components/Security_testing/ContactUs";
export const metadata = {
  title: "Agile Software Testing Services | Agile Testing Company",
  description:
    "Expert Agile Software Testing services ensuring fast, reliable, and high-quality software delivery with continuous testing & automation.",
  keywords: [
    "Agile Testing Services",
    "Agile Software Testing Company",
    "what is agile testing",
    "agile testing life cycle",
    "testing metrics in agile",
    "agile testing process",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Agile Testing Services | Agile Software Testing Company",
    description:
      "Accelerate your software development with QAonCloud's Agile Testing Services. As a leading Agile Software Testing Company in the USA, we deliver efficient and effective results to ensure the success of your project",
    url: "https://qaoncloud.com/agile-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/Agile.jpg",
        width: 1919,
        height: 1371,
        alt: "Agile Software Testing Company",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agile Testing Services | Agile Software Testing Company",
    description:
      "Accelerate your software development with QAonCloud's Agile Testing Services. As a leading Agile Software Testing Company in the USA, we deliver efficient and effective results to ensure the success of your project",
    images: ["https://www.qaoncloud.com/public/assets/img/banners/Agile.jpg"],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical: "https://www.qaoncloud.com/agile-testing-services",
};

export default function AgileTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Agile Software Testing Services"
        image="/images/banners/Agile.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <WhyAgileTesting />
      <TestingServices />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
