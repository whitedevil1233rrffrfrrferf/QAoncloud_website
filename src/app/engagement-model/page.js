import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import Models from "@/components/EngagementModel/Models";
import PricingModelsTable from "@/components/EngagementModel/PricingModelsTable";
import Table from "@/components/EngagementModel/Table";
import ContactUs from "@/components/Security_testing/ContactUs";
import React from "react";

export const metadata = {
  title: "Business Engagement Model - QAonCloud",
  description:
    "Choose QAonCloud for flexible engagement models that deliver the best outputs for your software testing needs. Experience the benefits of tailored engagement with QAonCloud today.",
  keywords: [
    "Engagement Models",
    "Fully Managed Engagement Models",
    "Jointly Managed Engagement Models",
    "One-Time Engagement model",
  ],
  authors: [{ name: "QAonCloud", url: "https://www.qaoncloud.com/" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.qaoncloud.com/engagement-model",
  },
  openGraph: {
    title: "Business Engagement Model - QAonCloud",
    description:
      "Choose QAonCloud for flexible engagement models that deliver the best outputs for your software testing needs. Experience the benefits of tailored engagement with QAonCloud today.",
    url: "https://www.qaoncloud.com/engagement-model",
    siteName: "QAonCloud",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/engagement1.jpg",
        width: 1919,
        height: 1371,
        alt: "Business Engagement Model - QAonCloud",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Engagement Model - QAonCloud",
    description:
      "Choose QAonCloud for flexible engagement models that deliver the best outputs for your software testing needs. Experience the benefits of tailored engagement with QAonCloud today.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/engagement1.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};

export default function page() {
  return (
    <div>
      <QAoncloudBanner
        title="Discover the Difference "
        image="/images/banners/engagement.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <Models />
      <Table />
      <PricingModelsTable />
      <ContactUs />
      <Clients />
    </div>
  );
}
