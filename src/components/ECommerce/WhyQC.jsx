"use client";
import { FaRocket, FaRobot, FaSearch, FaBrain } from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Full-Stack Testing Solutions",
    description:
      "End to end software testing services from functionality and integration to security and performance.",
    icon: <FaRocket size={50} color="#ff4d6d" />,
  },
  {
    title: "Expert Teams",
    description:
      "We provide our clients with experienced and skilled QA testers, QA analysts, delivery managers, and QA Lead for every project.",
    icon: <FaRobot size={50} color="#ff4d6d" />,
  },
  {
    title: "Transparent Process",
    description:
      "Robust communication silos are implemented to increase efficiency, collaboration, and transparency.",
    icon: <FaSearch size={50} color="#ff4d6d" />,
  },
  {
    title: "Periodic Test Reports",
    description:
      "Get periodic reports on app performance and bug fixes with complied details and accurate data.",
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
