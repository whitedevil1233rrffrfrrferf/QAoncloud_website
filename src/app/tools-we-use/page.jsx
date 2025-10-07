import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactUs from "@/components/Security_testing/ContactUs";
import ToolsComponent from "@/components/Tools/ToolsComponent";

export const metadata = {
  title: "Tools We Used For Software Testing",
  description:
    "Discover the powerful tools we utilize at QAonCloud to ensure comprehensive software testing. We leverage the latest technologies to deliver top-notch results.",
  keywords: [
    "tools we used for software testing",
    "CRM Tools",
    "CMS Tools",
    "Automation Tools",
  ],
  authors: [{ name: "QAonCloud", url: "https://www.qaoncloud.com/" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.qaoncloud.com/tools-we-use",
  },
  openGraph: {
    title: "Tools We Used For Software Testing",
    description:
      "Discover the powerful tools we utilize at QAonCloud to ensure comprehensive software testing. We leverage the latest technologies to deliver top-notch results.",
    url: "https://www.qaoncloud.com/tools-we-use",
    siteName: "QAonCloud",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/tools_we_use/tool-we-use.jpg",
        width: 1919,
        height: 1371,
        alt: "Tools We Used For Software Testing",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools We Used For Software Testing",
    description:
      "Discover the powerful tools we utilize at QAonCloud to ensure comprehensive software testing. We leverage the latest technologies to deliver top-notch results.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/tools_we_use/tool-we-use.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};

export default function ToolsWeUse() {
  return (
    <div>
      <QAoncloudBanner
        title="Discover Our Arsenal Of Testing Tools That Drive Our Success"
        image="/images/banners/Tools-we-use.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <ToolsComponent />
      <ContactUs />
      <Clients />
    </div>
  );
}
