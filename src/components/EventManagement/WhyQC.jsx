"use client";
import { FaRocket, FaRobot, FaSearch, FaBrain } from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Dedicated QA Experts",
    description:
      "We offer dedicated teams with extensive domain and workflow knowledge for all our projects. We recruit delivery managers, QA testers, and analyst teams through immense screening followed by training that devises the perfect testing strategy.",
    icon: <FaRocket size={50} color="#ff4d6d" />,
  },
  {
    title: "Industry Knowledge and Experience",
    description:
      "Experts at QAonCloud have worked with diverse projects and have incurred deep knowledge of successes and recipes for failure. It gives us a competitive edge to help our clients with proven methods and technologies to guarantee the success of deliverables.",
    icon: <FaRobot size={50} color="#ff4d6d" />,
  },
  {
    title: "Innovation and Competitive Strategies",
    description:
      "We understand that event management solutions must be cutting edge and convenient. We help clients boost software value with insights and analysis of the industry. It helps us develop competitive solutions that last in the market and lead to higher profits.",
    icon: <FaSearch size={50} color="#ff4d6d" />,
  },
  {
    title: "Thorough QA Testing",
    description:
      "An app is only as good as its code. To ensure that the app and its functionality are flawless, QAonCloud uses an invasive approach to identify potential threats. QA testers also help validate the user interface and its impact on customer experience.",
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
