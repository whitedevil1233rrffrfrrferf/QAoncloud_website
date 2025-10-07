import Image from "next/image";
import Banner from "@/components/Common/Banner/Banner";

import WhyFunctionalTesting from "@/components/Functional_testing/WhyFunctionalTesting";
import TestingServices from "@/components/Functional_testing/TestingServices";
import WhyItWorks from "@/components/Functional_testing/WhyItWorks";
import WhatYouGet from "@/components/Functional_testing/WhatYouGet";
import ProvenResults from "@/components/Functional_testing/ProvenResults";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import WhyQC from "@/components/Functional_testing/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";
import Clients from "@/components/Common/Clients/Clients";
export const metadata = {
  title: "Functional Software Testing Services",
  description:
    "QAonCloud offers expert functional testing services to keep your software running smoothly. We identify and fix issues to enhance performance and user experience.",
  authors: [{ name: "QAonCloud" }],
  keywords:
    "functional testing USA,functional testing services,functional testing company,quality functional testing,regression testing,regression testing company,qa testing",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.qaoncloud.com/functional-testing-services",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "QAonCloud",
    title: "Functional Testing Services | Functional Testing USA - QAonCloud",
    description:
      "QAonCloud offers comprehensive functional testing services to ensure the seamless performance of your applications. Our expert team uses the latest tools and techniques to deliver accurate results in a timely manner.",
    url: "https://www.qaoncloud.com/functional-testing-services",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/fuctional-testing.jpg",
        width: 1919,
        height: 1371,
        alt: "Functional Testing Services",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Functional Testing Services - QAonCloud",
    description:
      "QAonCloud offers comprehensive functional testing services to ensure the seamless performance of your applications. Our expert team uses the latest tools and techniques to deliver accurate results in a timely manner.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/fuctional-testing.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};
export default function Home() {
  return (
    <div>
      <QAoncloudBanner
        title="Functional Testing Services"
        image="/images/banners/functional-testing.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <WhyFunctionalTesting />
      <TestingServices />

      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
