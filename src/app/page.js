import Image from "next/image";
import styles from "./page.module.css";
import Banner from "../components/Software_testing/Banner";
import Map from "../components/HomePage/Map";
import Services from "../components/HomePage/Services";
import Solutions from "../components/HomePage/Solutions";
import Industries from "../components/HomePage/Industries";
import WhyQC from "../components/HomePage/WhyQC";
import QualitySoftware from "../components/HomePage/QualitySoftware";
import ClientTestimonials from "../components/HomePage/ClientTestimonials";
import ContactUs from "@/components/Security_testing/ContactUs";
export const metadata = {
  title: "QA Testing Services | Software Testing Services - QAonCloud",
  description:
    "QAonCloud is a leading Software Testing Company in the USA & UK, providing comprehensive QA Software Testing Services to businesses of all sizes.",
  keywords:
    "App testing services, QA Services, Software testing, Software Testing Company, Software Testing Services, QA testing company USA",
  authors: [{ name: "QAonCloud", url: "https://www.qaoncloud.com" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.qaoncloud.com/",
  },
  openGraph: {
    title: "QA Testing Services | Software Testing Company USA - QAonCloud",
    description:
      "QAonCloud is a leading Software Testing Company in the USA that provides comprehensive QA Software Testing Services to businesses of all sizes.",
    url: "https://www.qaoncloud.com/",
    siteName: "QAonCloud",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/wp/wp-content/uploads/2022/12/Event-managment-_1_.webp",
        width: 1919,
        height: 1371,
        alt: "QA Testing Services | Software Testing Company USA - QAonCloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QA Testing Services | Software Testing Company USA - QAonCloud",
    description:
      "QAonCloud is a leading Software Testing Company in the USA that provides comprehensive QA Software Testing Services to businesses of all sizes.",
    images: [
      "https://www.qaoncloud.com/public/assets/wp/wp-content/uploads/2022/12/Event-managment-_1_.webp",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  icons: {
    icon: "/favicon.ico", // ✅ path relative to /public
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
export default function Home() {
  return (
    <>
      <Banner />
      <QualitySoftware />
      <Map />

      <Services />
      <Solutions />
      <Industries />
      <WhyQC />
      <ClientTestimonials />
      <ContactUs />
    </>
  );
}
