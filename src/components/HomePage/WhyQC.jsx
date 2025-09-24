"use client"; // Required in App Router

import Slider from "react-slick";
import Image from "next/image";
import styles from "./WhyQAonCloud.module.css"; // Your own styles (optional)

// const slides = [
//   {
//     title: "Faster Launch. Secure Data",
//     description:
//       "Get to market faster with rapid onboarding while enterprise-grade security (ISO 27001, GDPR) protects your data every step of the way.",
//     emoji: "🚀",
//   },
//   {
//     title: "AI-Powered Testing Excellence",
//     description:
//       "Advanced AI, automation, and modern frameworks deliver smarter, faster, and more accurate QA that keeps you ahead of the curve.",
//     emoji: "🤖",
//   },
//   {
//     title: "Complete Coverage. Zero Gaps.",
//     description:
//       "Our hybrid manual and automated approach tests everything UI, APIs, mobile, web, so your users never encounter issues.",
//     emoji: "🔍",
//   },
//   {
//     title: "Industry Experts Who Get Your Business",
//     description:
//       "Specialized QA engineers with deep experience in healthcare, fintech, e-commerce, and AI deliver precision results tailored to your industry.",
//     emoji: "🧠",
//   },
// ];

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500, // transition animation duration (ms)
//   arrows: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true, // enable auto-sliding
//   autoplaySpeed: 3000, // delay between slides (ms)
//   pauseOnHover: true,
//   className: "slick-slider-custom", // Add this class for global styling
// };

// export default function WhyQC() {
//   return (
//     <div className={styles.wrapper}>
//       <h2 className={styles.heading}>Why QAonCloud?</h2>
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className={styles.card}>
//             <span className={styles.emoji}>{slide.emoji}</span>
//             <h3 className={styles.title}>{slide.title}</h3>
//             <p className={styles.description}>{slide.description}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
import { FaRocket, FaRobot, FaSearch, FaBrain } from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Faster Launch. Secure Data",
    description:
      "Get to market faster with rapid onboarding while enterprise-grade security (ISO 27001, GDPR) protects your data every step of the way.",
    icon: <FaRocket size={50} color="#ff4d6d" />,
  },
  {
    title: "AI-Powered Testing Excellence",
    description:
      "Advanced AI, automation, and modern frameworks deliver smarter, faster, and more accurate QA that keeps you ahead of the curve.",
    icon: <FaRobot size={50} color="#ff4d6d" />,
  },
  {
    title: "Complete Coverage. Zero Gaps",
    description:
      "Our hybrid manual and automated approach tests everything UI, APIs, mobile, web, so your users never encounter issues.",
    icon: <FaSearch size={50} color="#ff4d6d" />,
  },
  {
    title: "Industry Experts Who Get Your Business",
    description:
      "Specialized QA engineers with deep experience in healthcare, fintech, e-commerce, and AI deliver precision results tailored to your industry.",
    icon: <FaBrain size={50} color="#ff4d6d" />,
  },
];
export default function WhyQC() {
  return (
    <SliderComponent
      title="Why QAonCloud?"
      subtitle="Discover the advantages that make QAonCloud the trusted choice for quality assurance teams worldwide."
      slides={slides}
    />
  );
}
