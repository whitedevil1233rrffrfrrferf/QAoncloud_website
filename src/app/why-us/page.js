import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactUs from "@/components/Security_testing/ContactUs";
import WhyQAoncloud from "@/components/why-us/WhyQAoncloud";

export const metadata = {
  title: "Why to choose QAonCloud",
  description:
    "QAonCloud reinvents your product with cutting-edge testing methodologies, expert analysis, transparent communication and customer satisfaction.",
  keywords: ["Why QAonCloud"],
  authors: [{ name: "QAonCloud", url: "https://www.qaoncloud.com/" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.qaoncloud.com/why-us",
  },
  openGraph: {
    title: "Why QAonCloud",
    description:
      "QAonCloud reinvents your product with cutting-edge testing methodologies, expert analysis, transparent communication and customer satisfaction.",
    url: "https://www.qaoncloud.com/why-us",
    siteName: "QAonCloud",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/Why1.jpg",
        width: 1919,
        height: 1371,
        alt: "Why QAonCloud",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why QAonCloud",
    description:
      "QAonCloud reinvents your product with cutting-edge testing methodologies, expert analysis, transparent communication and customer satisfaction.",
    images: ["https://www.qaoncloud.com/public/assets/img/banners/Why1.jpg"],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};

export default function WhyUs() {
  return (
    <div>
      <QAoncloudBanner
        title="Discover the Difference "
        image="/images/banners/Why.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <WhyQAoncloud />
      <ContactUs />
      <Clients />
    </div>
  );
}
