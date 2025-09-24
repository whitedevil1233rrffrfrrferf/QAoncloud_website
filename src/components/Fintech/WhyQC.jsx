"use client";
import { FaRocket, FaRobot, FaSearch, FaBrain } from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Cost-Efficient",
    description:
      "QAonCloud employs highly efficient techniques with QA teams experienced in sophisticated QA practices delivering competitive Fintech apps for your business at reasonable costs.",
    icon: <FaRocket size={50} color="#ff4d6d" />,
  },
  {
    title: "Speed to market",
    description:
      "QAonCloud has a simple, fast, and hassle-free onboarding process to avoid delayed launches to market. We work parallel with development teams by taking up software testing responsibilities.",
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
      title="Why Choose QAonCloud for Fintech?"
      subtitle="Discover the advantages that make QAonCloud the trusted choice for quality assurance teams worldwide."
      slides={slides}
    />
  );
}
