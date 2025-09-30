import {
  FiTrendingUp, // ROI / growth
  FiSliders, // Customizable / adjustable
  FiLayers, // Scalable / flexible
  FiSend, // Fast launch
  FiAward, // Certification / expertise
} from "react-icons/fi";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Increased  ROI",
    description:
      "QAonCloud follows cost-effective strategies for QA testing for all our projects by maximizing coverage and optimizing testing processes for increased ROI. ",
    icon: <FiTrendingUp size={50} color="#ff4d6d" />,
  },
  {
    title: "Custom QA Testing Plan",
    description:
      "Tailor-made testing strategies formed by our QA experts based on the requirements of your business. These custom plans are designed to ensure high product quality and cross-platform compatibility. ",
    icon: <FiSliders size={50} color="#ff4d6d" />,
  },
  {
    title: "Scalable, Flexible Models",
    description:
      "We have flexible engagement and pricing models for businesses to choose from based on their QA testing requirements. ",
    icon: <FiLayers size={50} color="#ff4d6d" />,
  },
  {
    title: "Quick to Launch",
    description:
      "QAonCloud enforces a quick onboarding process followed by an efficient QA testing process to ensure that your apps are launched to the market in no time.",
    icon: <FiSend size={50} color="#ff4d6d" />,
  },
  {
    title: "Certified QA Testers",
    description:
      "Our test experts are internally certified and are trained in specific domains to help deliver high-quality QA testing services and expertise. ",
    icon: <FiAward size={50} color="#ff4d6d" />,
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
