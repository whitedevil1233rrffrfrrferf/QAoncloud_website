import {
  FaUserTie, // Skilled Experts
  FaUsersCog, // Team Collaboration
  FaProjectDiagram, // Structured Process
  FaLifeRing, // Continuous Support
} from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Skilled QA Experts",
    description:
      "To ensure ongoing project progress and to provide continuous feedback",
    icon: <FaUserTie size={50} color="#ff4d6d" />,
  },
  {
    title: "Collaborative Engagement",
    description:
      "Integrated testing Teams with clear goals to assist in enhancing software quality",
    icon: <FaUsersCog size={50} color="#ff4d6d" />,
  },
  {
    title: "Structured Methodology",
    description:
      "Lean Governance to deploy quality checkpoints, metrics, and measures",
    icon: <FaProjectDiagram size={50} color="#ff4d6d" />,
  },
  {
    title: "24/7 Support",
    description:
      "Insight Reports to help resolve defects and bugs at the early development stage.",
    icon: <FaLifeRing size={50} color="#ff4d6d" />,
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
