import Difference from "@/components/careers/Difference";
import Openings from "@/components/careers/Openings";
import Testimonials from "@/components/careers/Testimonials";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";

export const metadata = {
  title: "Join Our Team: Explore Exciting Career Opportunities at QAonCloud",
  description:
    "Unlock your tech career opportunities at QAonCloud. Join our expert team and unleash your potential today! Check out our latest opening positions.",
  keywords: ["Careers"],
  authors: [{ name: "QAonCloud", url: "https://www.qaoncloud.com/" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.qaoncloud.com/careers",
  },
  openGraph: {
    title: "Join Our Team: Explore Exciting Career Opportunities at QAonCloud",
    description:
      "Unlock your tech career opportunities at QAonCloud. Join our expert team and unleash your potential today! Check out our latest opening positions.",
    url: "https://www.qaoncloud.com/careers",
    siteName: "QAonCloud",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/hiring-1.jpg",
        width: 1919,
        height: 1371,
        alt: "Join Our Team: Explore Exciting Career Opportunities at QAonCloud",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Our Team: Explore Exciting Career Opportunities at QAonCloud",
    description:
      "Unlock your tech career opportunities at QAonCloud. Join our expert team and unleash your potential today! Check out our latest opening positions.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/hiring-1.jpg",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};

export default function Careers() {
  return (
    <div>
      <QAoncloudBanner
        title="Working at QAoncloud"
        image="/images/banners/hiring.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <Difference />
      <Openings />
      <Testimonials />
    </div>
  );
}
