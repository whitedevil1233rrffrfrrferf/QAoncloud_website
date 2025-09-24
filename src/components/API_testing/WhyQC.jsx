import { FaRocket, FaRobot, FaSearch, FaBrain } from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Expert QA Engineers",
    description:
      "Our certified testing professionals bring years of experience across diverse industries and technologies.",
    icon: <FaRocket size={50} color="#ff4d6d" />,
  },
  {
    title: "Flexible Engagement",
    description:
      "Scale up or down based on your project needs with our adaptable engagement models and pricing.",
    icon: <FaRobot size={50} color="#ff4d6d" />,
  },
  {
    title: "Proven Methodology",
    description:
      "Battle-tested processes refined through hundreds of successful projects and client partnerships.",
    icon: <FaSearch size={50} color="#ff4d6d" />,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring and support ensures your testing cycles never miss a deadline.",
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
