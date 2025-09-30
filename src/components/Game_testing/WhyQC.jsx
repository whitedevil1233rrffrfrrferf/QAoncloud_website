import { FiZap, FiUsers, FiClock, FiHeart, FiShield } from "react-icons/fi";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Quality Game Testing Solutions",
    description:
      "QAonCloud game app testing consultants give you thorough answers to all inquiries about your project and the kinds of testing it necessitate, regardless of whether you demand in-depth information. ",
    icon: <FiZap size={50} color="#ff4d6d" />,
  },
  {
    title: "Collaborative Teams",
    description:
      "QAonCloud features an open communication system that has been created through time, as well as a transparent working approach. We choose the best working schedule and take into account your preferences regardless of the time zone or location of our customers.",
    icon: <FiUsers size={50} color="#ff4d6d" />,
  },
  {
    title: "On-time Deliveries",
    description:
      "We prioritize every project and ensure timely, high-quality results. We always adhere to deadlines and conduct a complete project analysis before delivery. ",
    icon: <FiClock size={50} color="#ff4d6d" />,
  },
  {
    title: "Long-Term Relationship",
    description:
      "We offer long-term collaborations by continuously offering comprehensive game testing services and support services. You can always count on and trust us for your various game testing requirements.   ",
    icon: <FiHeart size={50} color="#ff4d6d" />,
  },
  {
    title: "Mitigate Risks",
    description:
      "We help prevent risks and threats to data, privacy, and web app performance with  competent and skilled QA testers in specific domains. managed, or one-time engagement QA testing, our QA testing experts, will ensure high-quality deliverables efficiently.",
    icon: <FiShield size={50} color="#ff4d6d" />,
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
