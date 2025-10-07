import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ExpertTeams from "@/components/how-we-work/ExpertTeams";
import ImageComponent from "@/components/how-we-work/ImageComponent";
import Process from "@/components/how-we-work/Process";
import WhyQAoncloud from "@/components/how-we-work/WhyQAoncloud";
import ContactUs from "@/components/Security_testing/ContactUs";
export const metadata = {
  title: "QAonCloud's Approach to QA & Testing Services",
  description:
    "At QAonCloud, our team closely collaborates with clients, understanding their requirements, to ensure the highest quality standards are met.",
  keywords: ["QA Approach"],
  authors: [{ name: "QAonCloud", url: "https://www.qaoncloud.com/" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.qaoncloud.com/how-we-work",
  },
  openGraph: {
    title: "QAonCloud's Approach to QA & Testing Services",
    description:
      "At QAonCloud, our team closely collaborates with clients, understanding their requirements, to ensure the highest quality standards are met.",
    url: "https://www.qaoncloud.com/how-we-work",
    siteName: "QAonCloud",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/how_we_work/how-it-work.jpg",
        width: 1919,
        height: 1371,
        alt: "QAonCloud's Approach to QA & Testing Services",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QAonCloud's Approach to QA & Testing Services",
    description:
      "At QAonCloud, our team closely collaborates with clients, understanding their requirements, to ensure the highest quality standards are met.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/how_we_work/how-it-work.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};
export default function HowWeWork() {
  return (
    <div>
      <QAoncloudBanner
        title="Success Stories:
              How Our Solutions Helped Our Clients"
        image="/images/banners/How-it-works.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <WhyQAoncloud />
      <ExpertTeams />
      <ImageComponent />
      <Process />
      <ContactUs />
      <Clients />
    </div>
  );
}
