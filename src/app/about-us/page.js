import AboutUsBanner from "@/components/AboutUs/AboutUsBanner";
import Description from "@/components/AboutUs/Description";
import Journey from "@/components/AboutUs/Journey";
import Leadership from "@/components/AboutUs/Leadership";
export const metadata = {
  title: "About QAonCloud QA and Testing Experience",
  description:
    "QAonCloud, established in 2016, is a global leader in providing comprehensive manual and automated software testing services. Our team of experts specializes in delivering top-notch QA solutions tailored to your unique requirements.",
  keywords: [
    "App testing services",
    "QA Services",
    "Software testing",
    "Software Testing Company",
    "Software Testing Services",
    "QA testing company USA",
  ],
  authors: [{ name: "QAonCloud", url: "https://www.qaoncloud.com/" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.qaoncloud.com/about-us",
  },
  openGraph: {
    title: "About QAonCloud QA and Testing Experience",
    description:
      "QAonCloud, established in 2016, is a global leader in providing comprehensive manual and automated software testing services. Our team of experts specializes in delivering top-notch QA solutions tailored to your unique requirements.",
    url: "https://www.qaoncloud.com/about-us",
    siteName: "QAonCloud",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/about/About-us.webp",
        width: 1919,
        height: 1371,
        alt: "About QAonCloud QA and Testing Experience",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About QAonCloud QA and Testing Experience",
    description:
      "QAonCloud, established in 2016, is a global leader in providing comprehensive manual and automated software testing services. Our team of experts specializes in delivering top-notch QA solutions tailored to your unique requirements.",
    images: [
      "https://www.qaoncloud.com/public/assets/img/about/about-us-banner.png",
    ],
    creator: "@QAonCloud",
    site: "@QAonCloud",
  },
};

export default function AboutUs() {
  return (
    <div>
      <AboutUsBanner />
      <Description />
      <Journey />
      <Leadership />
    </div>
  );
}
