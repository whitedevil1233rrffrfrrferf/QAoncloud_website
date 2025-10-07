import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import GameProcess from "@/components/Game_testing/GameProcess";
import GameTestingServices from "@/components/Game_testing/GameTestingServices";
import WhyGameServices from "@/components/Game_testing/WhyGameServices";
import WhyQC from "@/components/Game_testing/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

export const metadata = {
  title: "Mobile Game Testing Services | Game Testing Services",
  description:
    "QAoncloud, the leading Game Testing Company in USA & UK, offers unparalleled Video Game Testing services to ensure a seamless and bug-free gaming experience.",
  keywords: [
    "mobile game testing",
    "Game Testing Services",
    "Video Game Testing Services",
    "Game Testing Company",
    "Mobile Game Testing",
    "qa game testing",
  ],
  authors: [{ name: "QAonCloud" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Game Testing Services | Mobile Game Testing Services",
    description:
      "QAoncloud, the leading Game Testing Company USA, offers unparalleled Mobile Game Testing services to ensure a seamless and bug-free gaming experience.",
    url: "https://www.qaoncloud.com/game-testing-services",
    siteName: "QAonCloud",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/game-testing.jpg",
        width: 1919,
        height: 1371,
        alt: "Game Testing Services | Mobile Game Testing Services",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Testing Services | Mobile Game Testing Services",
    description:
      "QAoncloud, the leading Game Testing Company USA, offers unparalleled Mobile Game Testing services to ensure a seamless and bug-free gaming experience.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/game-testing.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
  canonical: "https://www.qaoncloud.com/game-testing-services",
};

export default function Gametesting() {
  return (
    <div>
      <QAoncloudBanner
        title=" QA Game Testing Services"
        image="/images/banners/Game-app-testing.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <GameTestingServices />

      <GameProcess />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
