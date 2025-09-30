import {
  FaUserTie,
  FaCertificate,
  FaCogs,
  FaProjectDiagram,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Seasoned QA Experts",
    description:
      "Increased test coverage with numerous tests executed over a short time.",
    icon: <FaUserTie size={50} color="#ff4d6d" />,
  },
  {
    title: "Certified Professionals",
    description: "Reduced Costs with streamlined automation processes",
    icon: <FaCertificate size={50} color="#ff4d6d" />,
  },
  {
    title: "Modern Tech Stack",
    description: "Less Manual Labour by automating large volume test scripts",
    icon: <FaCogs size={50} color="#ff4d6d" />,
  },
  {
    title: "Proven Strategy",
    description:
      "Enhanced Product Quality with accurate, thorough testing and reduced human error",
    icon: <FaProjectDiagram size={50} color="#ff4d6d" />,
  },
  {
    title: "Faster Launch",
    description:
      "Quick Time to Market with reduced execution time and faster test cycles",
    icon: <FaRocket size={50} color="#ff4d6d" />,
  },
  {
    title: "Trusted Partner",
    description:
      "Increased ROI with extensive automation tools to ensure optimal app performance",
    icon: <FaHandshake size={50} color="#ff4d6d" />,
  },
];
export default function WhyQC() {
  return (
    <SliderComponent
      title="Perks of Hiring Functional Testing Software Experts at QAonCloud"
      subtitle="Discover the advantages that make QAonCloud the trusted choice for quality assurance teams worldwide."
      slides={slides}
    />
  );
}
