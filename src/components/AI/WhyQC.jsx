"use client";
import {
  FaDatabase, // Maintain Technology (datasets, AI training data)
  FaRobot, // Enhance AI Quality
  FaMoneyBillWave, // Cost Saving
  FaBug, // Efficient Debugging
  FaChartLine, // Real-time Data
} from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Maintain Technology",
    description:
      "QAonCloud helps you maintain your AI technology by evaluating datasets and ensuring appropriate and desirable outputs for every input with adequate data training.",
    icon: <FaDatabase size={50} color="#ff4d6d" />,
  },
  {
    title: "Enhance AI Quality",
    description:
      "QAonCloud and its expert teams help improve the accuracy and efficiencies of AI with complete software testing using suitable tools and methods..",
    icon: <FaRobot size={50} color="#ff4d6d" />,
  },
  {
    title: "Cost Saving",
    description:
      "QAonCloud ensures that all deliverables and testing services are delivered on time at a competitive price.",
    icon: <FaMoneyBillWave size={50} color="#ff4d6d" />,
  },
  {
    title: "Efficient Debugging",
    description:
      "QAonCloud uses proven techniques and advanced tools to debug and identify errors, glitches, and issues in the software, enhancing the UI/UX of AI.",
    icon: <FaBug size={50} color="#ff4d6d" />,
  },
  {
    title: "Real-time Data",
    description:
      "QAonCloud uses updated and real-time data for relevant implementations and keeps AI functions accurate for user satisfaction.",
    icon: <FaChartLine size={50} color="#ff4d6d" />,
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
