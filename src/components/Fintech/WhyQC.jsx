"use client";
import {
  FaRocket,
  FaRobot,
  FaSearch,
  FaBrain,
  FaWallet,
  FaCheckDouble,
  FaBolt,
  FaUsers,
} from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Cost-Efficient",
    description:
      "QAonCloud employs highly efficient techniques with QA teams experienced in sophisticated QA practices delivering competitive Fintech apps for your business at reasonable costs.",
    icon: <FaWallet size={50} color="#ff4d6d" />,
  },
  {
    title: "Speed to market",
    description:
      "QAonCloud has a simple, fast, and hassle-free onboarding process to avoid delayed launches to market. We work parallel with development teams by taking up software testing responsibilities.",
    icon: <FaRocket size={50} color="#ff4d6d" />,
  },
  {
    title: "Higher Efficiency",
    description:
      "QAonCloud uses robust tools and technology that induces collaboration and increases efficiency. We follow a dynamic work model and a modern approach to software testing.",
    icon: <FaBolt size={50} color="#ff4d6d" />,
  },
  {
    title: "Customer -centric Solutions",
    description:
      "QAonCloud uses detailed insights on user behaviour and ensures that the software functionalities are structured to meet their needs. ",
    icon: <FaUsers size={50} color="#ff4d6d" />,
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
