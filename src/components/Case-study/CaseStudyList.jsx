"use client";
import CaseStudyRow from "./CaseStudyRow";

export default function CaseStudyList() {
  const studies = [
    {
      logo: "/images/client-logo/tokopedia.png",
      alt: "Tokopedia",
      description:
        "Discover how QAonCloud helped in the reduction of Tokopedia application crashes for better app store ratings and user adoption.",
      category: "E Commerce",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/tokopedia.pdf",
    },
    {
      logo: "/images/client-logo/RBT2.png",
      alt: "RedBlackTree",
      description:
        "Discover how RBT ensures their customer’s products are tested and delivered bug free with QAonCloud.",
      category: "HRMS",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/rbt.pdf",
    },
    {
      logo: "/images/client-logo/around_media.png",
      alt: "Around Media",
      description:
        "Learn how QAonCloud helped AroundMedia get off the ground by testing its first VR real estate solution.",
      category: "Real Estate",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/aroundmedia.pdf",
    },
    {
      logo: "/images/client-logo/indihood_logo.png",
      alt: "Indihood",
      description:
        "Learn how our QAonCloud team helped Indihood in achieving application stability by identifying latency issues on time.",
      category: "FinTech",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/indihood.pdf",
    },
    {
      logo: "/images/client-logo/connectworxs.png",
      alt: "ConnectWorks",
      description:
        "Learn how Connectworxs built a modern data platform with the aid of QAonCloud.",
      category: "Event Management",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/tokopedia.pdf",
    },
    {
      logo: "/images/client-logo/aol.png",
      alt: "AOI",
      description:
        "Learn how AOL delivers better content to their readers with the help of QAonCloud.",
      category: "Media",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/rbt.pdf",
    },
    {
      logo: "/images/client-logo/AT nad T.png",
      alt: "Alien Vault",
      description:
        "Discover how QAonCloud hepled AlienValut deliver better marketing to their customers.",
      category: "Cyber Security",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/aroundmedia.pdf",
    },
    {
      logo: "/images/client-logo/stabilitas.png",
      alt: "Stabilitas",
      description:
        "Check out how QA Partnership helped Stabilitas ensure customer data security on their platform.",
      category: "Travel & Tourism",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/indihood.pdf",
    },
    {
      logo: "/images/client-logo/prompto.png",
      alt: "Prompto",
      description:
        "Check out why Prompto opted for QA partnership to uncover functional defects and to enhance quality of their product.",
      category: "Real Estate",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/rbt.pdf",
    },
    {
      logo: "/images/client-logo/venzi.png",
      alt: "Venzi",
      description:
        "Learn how Venzi Inc. achieved complete test coverage for their online Event management solution through Comprehensive Testing.",
      category: "Event Management",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/aroundmedia.pdf",
    },
    {
      logo: "/images/client-logo/Avanti.png",
      alt: "Avanti",
      description:
        "Learn how Avanti achieved bug reduction and faster feature implementation through partnership.",
      category: "Financial Services",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/indihood.pdf",
    },
    {
      logo: "/images/client-logo/IQ-Hive logo.png",
      alt: "IQ-Hive",
      description:
        "Discover how IQ Hive succeeded in ensuring seamless user experience of their MVNE and Reseller platforms.",
      category: "Telecommunications",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/indihood.pdf",
    },
    {
      logo: "/images/client-logo/Arcitecto.png",
      alt: "Arcitecto",
      description:
        "Explore how Architecto achieved quality goals for all the 8 different applications and built a robust QA Process.",
      category: "Real Estate",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/rbt.pdf",
    },
    {
      logo: "/images/client-logo/notabene.png",
      alt: "Notabene",
      description:
        "Learn how Notabene successfully attained high-quality, defect-free builds, witnessed a decrease in customer-reported defects.",
      category: "CryptoCurrency",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/aroundmedia.pdf",
    },
    {
      logo: "/images/client-logo/doxa.png",
      alt: "Doxa",
      description:
        "Find out how Doxa was able to release stable fintech application and accelerated their release cycles.",
      category: "FinTech",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/indihood.pdf",
    },
    {
      logo: "/images/client-logo/Source-whale.png",
      alt: "Source whale",
      description:
        "Discover how Sourcewhale achieved quality goals through critical error fixes in its web app and browser extensions.",
      category: "FinTech",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/aroundmedia.pdf",
    },
    {
      logo: "/images/client-logo/play-ground.png",
      alt: "PlayGround",
      description:
        "Find out how PlayGround ensured the robustness of their web3 social media platform across multiple browsers and devices.",
      category: "Social Media",
      categoryLink: "#",
      buttonText: "Download",
      buttonLink: "https://example.com/indihood.pdf",
    },
  ];

  return (
    <div>
      {studies.map((study, idx) => (
        <CaseStudyRow key={idx} {...study} />
      ))}
    </div>
  );
}
