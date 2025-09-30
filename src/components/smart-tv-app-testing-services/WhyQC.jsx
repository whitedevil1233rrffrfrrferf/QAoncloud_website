import {
  FiAward,
  FiMonitor,
  FiCheckCircle,
  FiTool,
  FiUsers,
} from "react-icons/fi";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Industry Expertise",
    description:
      "QAonCloud testing experts are trained specialists in testing Smart TV apps. We employ leading experts on our projects to deliver apps with high functionality, performance and compatibility across various platforms and devices.",
    icon: <FiAward size={50} color="#ff4d6d" />,
  },
  {
    title: "Testing on real Devices",
    description:
      "We use real smart devices that run on different operating systems and with different screen resolutions.",
    icon: <FiMonitor size={50} color="#ff4d6d" />,
  },
  {
    title: "100% Test Coverage",
    description:
      "We prioritise test coverage for Smart TV Apps with high-quality testing solutions. Our test experts evaluate every aspect of the smart TV app to identify errors.",
    icon: <FiCheckCircle size={50} color="#ff4d6d" />,
  },
  {
    title: "Access to advanced Tools and Resources",
    description:
      "We have a wide array of testing tools, including automation tools and resources to work efficiently on specific Smart TV App testing requirements. Our experts are trained and experienced to work with advanced tools to guarantee the best results. ",
    icon: <FiTool size={50} color="#ff4d6d" />,
  },
  {
    title: "Experienced QA Teams",
    description:
      "Every QA testing expert is qualified, certified, and experienced in specific domains  to guarantee <br/>high-quality testing services in all our projects. ",
    icon: <FiUsers size={50} color="#ff4d6d" />,
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
