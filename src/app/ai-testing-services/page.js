import Challenges from "@/components/AI/Challenges";
import FeaturesSection from "@/components/AI/FeaturesSection";
import QAServices from "@/components/AI/QAServices";
import WhyQC from "@/components/AI/WhyQC";
import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactUs from "@/components/Security_testing/ContactUs";

export const metadata = {
  title: "AI Testing Services | AI Testing Company",
  description:
    "Looking for an AI testing company in USA? QAonCloud provides Artificial Intelligence in Software Testing services to ensure quality and performance. Trust our experts for accurate and reliable results.",
  keywords: [
    "Artificial Intelligence in Software Testing",
    "AI Testing Company",
    "AI in Software Testing",
    "Artificial Intelligence testing Methods",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "AI Testing Services | AI Testing Company USA",
    description:
      "Looking for an AI testing company in USA? QAonCloud provides Artificial Intelligence in Software Testing services to ensure quality and performance. Trust our experts for accurate and reliable results.",
    url: "https://www.qaoncloud.com/ai-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/ai-banner.jpg",
        width: 1919,
        height: 1371,
        alt: "AI Testing Services | AI Testing Company USA",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Testing Services | AI Testing Company USA",
    description:
      "Looking for an AI testing company in USA? QAonCloud provides Artificial Intelligence in Software Testing services to ensure quality and performance. Trust our experts for accurate and reliable results.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/ai-banner.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical: "https://www.qaoncloud.com/ai-testing-services",
};

export default function AITestingServices() {
  return (
    <div>
      <QAoncloudBanner
        title="Implement Superior AI
                With Quality AI Testing Services"
        image="/images/banners/ai.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <FeaturesSection />
      <QAServices />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
