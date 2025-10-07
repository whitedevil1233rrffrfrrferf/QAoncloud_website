"use client";
import {
  FaRocket,
  FaShieldAlt,
  FaUserFriends,
  FaTachometerAlt,
  FaMoneyBillWave,
  FaUsersCog,
  FaPaintBrush,
} from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Enhance User Experience",
    description:
      "QAonCloud helps to debug the software using efficient tools to enhance the user interface and increase end-user satisfaction.",
    icon: <FaPaintBrush size={50} color="#ff4d6d" />,
  },
  {
    title: "Data Security ",
    description:
      "QAonCloud ensures that all integrations and coding in the app are firm and solid to prevent breaches or bugs. ",
    icon: <FaShieldAlt size={50} color="#ff4d6d" />,
  },
  {
    title: "Customer Centric Approach",
    description:
      "QAonCloud interprets user behaviour on the apps and uses the data to shape app quality. It helps build high-quality software that is customer-centric and greatly enhances user experience.",
    icon: <FaUserFriends size={50} color="#ff4d6d" />,
  },
  {
    title: "Fast to Market",
    description:
      "A simple and fast onboarding process at QAonCloud ensures an added bonus to our clients.We help businesses reach their target audience and stay ahead in the market.",
    icon: <FaRocket size={50} color="#ff4d6d" />,
  },
  {
    title: "Increased Cost Savings",
    description:
      "We acquire talent at an optimal price with rural outsourcing, to deliver expert services at reasonable prices.Our QA teams deliver high-quality QA testing solutions at cost-saving rates.",
    icon: <FaMoneyBillWave size={50} color="#ff4d6d" />,
  },
  {
    title: "Flexible and reliable teams",
    description:
      "You can choose your convenient partnership model to suit your business needs. Our teams are reliable for meeting deadlines and delivering the best at all costs.",
    icon: <FaUsersCog size={50} color="#ff4d6d" />,
  },
];
export default function WhyQC() {
  return (
    <SliderComponent
      title="Why Choose QAonCloud for Fintech?"
      subtitle="Discover the advantages that make QAonCloud the trusted choice for quality assurance teams worldwide."
      slides={slides}
    />
  );
}
