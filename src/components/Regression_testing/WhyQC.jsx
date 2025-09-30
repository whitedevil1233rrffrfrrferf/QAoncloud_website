import {
  FaUserTie, // expert QA engineers
  FaHandshake, // flexible engagement
  FaProjectDiagram, // methodology / structured plan
  FaHeadset,
} from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Expert QA Engineers",
    description:
      "Save costs by hiring the best QA testing teams at affordable costs",
    icon: <FaUserTie size={50} color="#ff4d6d" />,
  },
  {
    title: "Flexible Engagement",
    description:
      "Eliminate new bugs with comprehensive regression testing services",
    icon: <FaHandshake size={50} color="#ff4d6d" />,
  },
  {
    title: "Proven Methodology",
    description: "Time-saving processes with a well-structured testing plan",
    icon: <FaProjectDiagram size={50} color="#ff4d6d" />,
  },
  {
    title: "24/7 Support",
    description: "Fast to Market with quick onboarding",
    icon: <FaHeadset size={50} color="#ff4d6d" />,
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
