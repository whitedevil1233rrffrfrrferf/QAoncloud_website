import {
  FiTrendingDown,
  FiTrendingUp,
  FiActivity,
  FiUsers,
  FiLayers,
  FiSend,
  FiAward,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Reduced Costs",
    description:
      "QAonCloud offers high-end QA testing services with techniques and strategies that reduce businesses' costs by up to 40%. ",
    icon: <FiTrendingDown size={50} color="#ff4d6d" />,
  },
  {
    title: "Efficient Testing",
    description:
      "Our testing teams implement proven methods and technology for QA testing to enhance testing efficiencies with periodic reports and optimize test cycles based on accurate data.",
    icon: <FiActivity size={50} color="#ff4d6d" />,
  },
  {
    title: "Increased Customer Satisfaction",
    description:
      "By ensuring that web apps are compatible across various platforms, QAonCloud helps you enhance customer experience and induce trust in the brand.  ",
    icon: <FiUsers size={50} color="#ff4d6d" />,
  },
  {
    title: "Flexible Testing Models",
    description:
      "With QAonCloud, you can choose a jointly managed, fully managed, or a one-time engagement QA testing model based on your business requirements.  ",
    icon: <FiSettings size={50} color="#ff4d6d" />,
  },
  {
    title: "Experienced QA Teams",
    description:
      "Every QA testing expert is qualified, certified, and experienced in specific domains  to guarantee <br/>high-quality testing services in all our projects. ",
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
