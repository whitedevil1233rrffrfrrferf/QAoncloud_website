import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import FAQSection from "@/components/FAQ/FAQSection";
import ContactUs from "@/components/Security_testing/ContactUs";
import Clients from "@/components/Common/Clients/Clients";
export const metadata = {
  title: "FAQ | QAonCloud",
  description:
    "Have questions? Explore our faq page for comprehensive information on our services, pricing, engagement models, and more",
  keywords: ["FAQ"],
  authors: [{ name: "QAonCloud", url: "https://www.qaoncloud.com/" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.qaoncloud.com/faq",
  },
  openGraph: {
    title: "FAQ | QAonCloud",
    description:
      "Have questions? Explore our faq page for comprehensive information on our services, pricing, engagement models, and more",
    url: "https://www.qaoncloud.com/faq",
    siteName: "QAonCloud",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/FAQ1.jpg",
        width: 1919,
        height: 1371,
        alt: "FAQ",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | QAonCloud",
    description:
      "Have questions? Explore our faq page for comprehensive information on our services, pricing, engagement models, and more.",
    images: ["https://www.qaoncloud.com/public/assets/img/banners/FAQ1.jpg"],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};

export default function FAQ() {
  return (
    <div>
      <QAoncloudBanner
        title="Frequently Asked Questions "
        image="/images/banners/FAQ.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <FAQSection />;
      <ContactUs />
      <Clients />
    </div>
  );
}
