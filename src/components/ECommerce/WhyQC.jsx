"use client";
import {
  FaCubes, // Full-Stack / end-to-end solutions
  FaUsersCog, // Expert Teams
  FaProjectDiagram, // Transparent Process (workflow clarity)
  FaClipboardCheck, // Periodic Test Reports
  FaRocket, // Quick App Launch
  FaMobileAlt, // Multi-Platform Testing
  FaMoneyBillWave,
} from "react-icons/fa"; // Cost Saving

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Full-Stack Testing Solutions",
    description:
      "End to end software testing services from functionality and integration to security and performance.",
    icon: <FaCubes size={50} color="#ff4d6d" />,
  },
  {
    title: "Expert Teams",
    description:
      "We provide our clients with experienced and skilled QA testers, QA analysts, delivery managers, and QA Lead for every project.",
    icon: <FaUsersCog size={50} color="#ff4d6d" />,
  },
  {
    title: "Transparent Process",
    description:
      "Robust communication silos are implemented to increase efficiency, collaboration, and transparency.",
    icon: <FaProjectDiagram size={50} color="#ff4d6d" />,
  },
  {
    title: "Periodic Test Reports",
    description:
      "Get periodic reports on app performance and bug fixes with complied details and accurate data.",
    icon: <FaClipboardCheck size={50} color="#ff4d6d" />,
  },
  {
    title: "Quick App Launch",
    description:
      "Strategic testing and efficient processes implemented by QA Teams ensure that your e-commerce platform reaches the market on time",
    icon: <FaRocket size={50} color="#ff4d6d" />,
  },
  {
    title: "Multi-Platform Testing",
    description:
      "Get testing services for various devices and platforms by expert teams with the latest technology and proven QA testing methods.",
    icon: <FaMobileAlt size={50} color="#ff4d6d" />,
  },
  {
    title: "Cost Saving",
    description:
      "QAonCloud helps businesses save costs by ensuring that apps are launched with high-quality and enhanced user interfaces.",
    icon: <FaMoneyBillWave size={50} color="#ff4d6d" />,
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
