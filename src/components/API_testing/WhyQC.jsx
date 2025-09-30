import {
  FaUserTie, // experts
  FaClipboardList, // tailored plans
  FaBug, // defect/bug analysis
  FaClock, // time-saving
  FaDollarSign, // cost-effective
} from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Expert QA Engineers",
    description:
      "Review and Analysis of existing API specifications, requirements, and use cases",
    icon: <FaUserTie size={50} color="#ff4d6d" />,
  },
  {
    title: "Flexible Engagement",
    description:
      "Tailor-Made Test Plans and test strategies to analyze the API specifications",
    icon: <FaClipboardList size={50} color="#ff4d6d" />,
  },
  {
    title: "Proven Methodology",
    description:
      "Early Defect Analysis helps us mitigate risks and potential threats in advance",
    icon: <FaBug size={50} color="#ff4d6d" />,
  },
  {
    title: "Efficient Workflows",
    description: "Time Saving process with efficient workflows and test plans",
    icon: <FaClock size={50} color="#ff4d6d" />,
  },
  {
    title: "Cost-Effective Testing",
    description: "Cost-Effective testing with robust tools and expert QA teams",
    icon: <FaDollarSign size={50} color="#ff4d6d" />,
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
