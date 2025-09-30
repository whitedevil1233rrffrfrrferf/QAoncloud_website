import {
  FiShield,
  FiDollarSign,
  FiSend,
  FiUsers,
  FiSettings,
} from "react-icons/fi";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Experienced QA Teams",
    description:
      "Our mobile app development firms have years of experience in specific domains to cater to various project needs foryour business. We employ teams with skills and training in sophisticated tools and technology to deliver competitive mobile apps. ",
    icon: <FiShield size={50} color="#ff4d6d" />,
  },
  {
    title: "Cost-Effective Testing",
    description:
      "Our rural outsourcing model helps us deliver QA testing solutions at competitive prices. We provide custom QA testing services that enhance mobile app performance and UI/UX that fetches you an advantage in the market, guaranteeing an increased ROI.",
    icon: <FiDollarSign size={50} color="#ff4d6d" />,
  },
  {
    title: "Fast to Market",
    description:
      "QAonCloud uses a quick onboarding process to jump-start your journey with us. We employ smart, effective QA testing solutions that show no compromises on deliverables and, at the same time, ensure a timely launch to the market. ",
    icon: <FiSend size={50} color="#ff4d6d" />,
  },
  {
    title: "Collaborative Teams",
    description:
      "We have specialized QA teams with expertise in various aspects of QA testing. Our teams use efficient communication silos to collaborate with other testing teams and developers to ensure high-quality apps and complete customer satisfaction. ",
    icon: <FiUsers size={50} color="#ff4d6d" />,
  },
  {
    title: "Custom QA Testing Models",
    description:
      "QAonCloud has flexible and scalable models for businesses for your various mobile app testing needs. Be it fully managed, jointly managed, or one-time engagement QA testing, our QA testing experts, will ensure high-quality deliverables efficiently.",
    icon: <FiSettings size={50} color="#ff4d6d" />,
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
