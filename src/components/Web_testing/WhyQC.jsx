import {
  FiZap,
  FiClipboard,
  FiTrendingDown,
  FiLayers,
  FiAlertTriangle,
} from "react-icons/fi";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Accelerated Testing",
    description:
      "QAonCloud teams carry out test cycles with methods and strategies to expedite testing processes while enforcing the quality of tests with every cycle. ",
    icon: <FiZap size={50} color="#ff4d6d" />,
  },
  {
    title: "Custom Test Plan",
    description:
      "QAonCloud teams build test strategies, tailored to your requirements, for seamless testing capabilities with the help of modern tools, resources, and technology. ",
    icon: <FiClipboard size={50} color="#ff4d6d" />,
  },
  {
    title: "Reduced Costs",
    description:
      "Our testing experts implement cost-effective testing strategies which maximize coverage and ensure that there are no compromises on testing quality.",
    icon: <FiTrendingDown size={50} color="#ff4d6d" />,
  },
  {
    title: "Custom Testing Plan",
    description:
      "QAonCloud guarantees that all testing plans, strategies, and frameworks are customized to business requirements and precise testing needs. ",
    icon: <FiLayers size={50} color="#ff4d6d" />,
  },
  {
    title: "Mitigate Risks",
    description:
      "We help prevent risks and threats to data, privacy, and web app performance with  competent and skilled QA testers in specific domains. managed, or one-time engagement QA testing, our QA testing experts, will ensure high-quality deliverables efficiently.",
    icon: <FiAlertTriangle size={50} color="#ff4d6d" />,
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
