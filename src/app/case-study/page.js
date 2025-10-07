import CaseStudyList from "@/components/Case-study/CaseStudyList";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";

export const metadata = {
  title: "Software Testing and QA Case Studies - QAonCloud",
  description:
    "Discover how QAonCloud's software testing expertise transformed businesses. Explore our case studies showcasing successful testing strategies and exceptional outcomes.",
  keywords: ["software testing case studies", "QA case study"],
  authors: [{ name: "QAonCloud", url: "https://www.qaoncloud.com/" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.qaoncloud.com/case-study",
  },
  openGraph: {
    title: "Software Testing and QA Case Studies | QAonCloud",
    description:
      "Discover how QAonCloud's software testing expertise transformed businesses. Explore our case studies showcasing successful testing strategies and exceptional outcomes.",
    url: "https://www.qaoncloud.com/case-study",
    siteName: "QAonCloud",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/Case-Study1.jpg",
        width: 1919,
        height: 1371,
        alt: "Software Testing and QA Case Studies | QAonCloud",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Testing and QA Case Studies | QAonCloud",
    description:
      "Discover how QAonCloud's software testing expertise transformed businesses. Explore our case studies showcasing successful testing strategies and exceptional outcomes.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/Case-Study1.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};

export default function CaseStudy() {
  return (
    <div>
      <QAoncloudBanner
        title="Success Stories:
        How Our Solutions Helped Our Clients"
        image="/images/banners/Case Study.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <CaseStudyList />
    </div>
  );
}
