import {
  FaRocket,
  FaRobot,
  FaSearch,
  FaBrain,
  FaUserShield,
  FaHandshake,
  FaProjectDiagram,
  FaHeadset,
  FaLock,
} from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Expert QA Engineers",
    description:
      "Get 24x7 access to certified security experts ready to protect your systems",
    icon: <FaUserShield size={50} color="#ff4d6d" />,
  },
  {
    title: "Flexible Engagement",
    description: "Flexible engagement models that adapt to your business needs",
    icon: <FaHandshake size={50} color="#ff4d6d" />,
  },
  {
    title: "Proven Methodology",
    description:
      "Proven track record in securing both modern and legacy tech environments",
    icon: <FaProjectDiagram size={50} color="#ff4d6d" />,
  },
  {
    title: "24/7 Support",
    description:
      "Clear reports, open communication, and expert support for remediation",
    icon: <FaHeadset size={50} color="#ff4d6d" />,
  },
  {
    title: "Data Security & Compliance",
    description:
      "Strict data protection backed by NDAs and enterprise-grade security policies",
    icon: <FaLock size={50} color="#ff4d6d" />,
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
