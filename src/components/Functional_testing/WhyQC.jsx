import {
  FaRocket,
  FaRobot,
  FaSearch,
  FaBrain,
  FaUserTie,
  FaCertificate,
  FaCogs,
  FaProjectDiagram,
  FaHandshake,
} from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Seasoned QA Experts",
    description: "Qualified QA Experts with 10+ years of experience",
    icon: <FaUserTie size={50} color="#ff4d6d" />,
  },
  {
    title: "Certified Professionals",
    description:
      "Qualified QA Experts with internationally recognized certifications",
    icon: <FaCertificate size={50} color="#ff4d6d" />,
  },
  {
    title: "Modern Tech Stack",
    description:
      "Latest Frameworks, tools, and technology for functional testing",
    icon: <FaCogs size={50} color="#ff4d6d" />,
  },
  {
    title: "Proven Strategy",
    description:
      "Proven Functional Testing Strategy for testing and enhancing app quality.",
    icon: <FaProjectDiagram size={50} color="#ff4d6d" />,
  },
  {
    title: "Faster Launch",
    description:
      "Accelerated Launch with quick onboarding and efficient QA testing",
    icon: <FaRocket size={50} color="#ff4d6d" />,
  },
  {
    title: "Trusted Partner",
    description:
      "Industry Recognised as a trusted partner for scalable and reliable QA testing",
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
