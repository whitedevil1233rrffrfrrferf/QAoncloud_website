"use client";
import {
  FaUsersCog, // Dedicated Teams
  FaIndustry, // Industry Knowledge
  FaLightbulb, // Innovation & Strategies
  FaCheckCircle, // Thorough QA Testing
} from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Dedicated QA Teams",
    description:
      "We offer dedicated teams with extensive domain and workflow knowledge for all our projects. We recruit teams through immense screening followed by training that devises the perfect testing strategy.",
    icon: <FaUsersCog size={50} color="#ff4d6d" />,
  },
  {
    title: "Industry Knowledge and Experience",
    description:
      "Experts at QAonCloud have worked with diverse projects and have incurred deep knowledge of successes and recipes for failure.",
    icon: <FaIndustry size={50} color="#ff4d6d" />,
  },
  {
    title: "Innovation and Competitive Strategies",
    description:
      "We help clients boost software value with insights and analysis of the industry. It helps us develop competitive solutions that last in the market and lead to higher profits.",
    icon: <FaLightbulb size={50} color="#ff4d6d" />,
  },
  {
    title: "Thorough QA Testing",
    description:
      "An app is only as good as its code. QAonCloud uses an invasive approach to identify potential threats. QA testers also help validate the user interface and its impact on customer experience.",
    icon: <FaCheckCircle size={50} color="#ff4d6d" />,
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
