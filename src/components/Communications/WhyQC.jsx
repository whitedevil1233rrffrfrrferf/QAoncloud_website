"use client";
import { FaRocket, FaRobot, FaSearch, FaBrain } from "react-icons/fa";

import SliderComponent from "../Common/Slider/SliderComponent";

const slides = [
  {
    title: "Enhance User Experience",
    description:
      "QAonCloud helps to debug the software using efficient tools to enhance the user interface and increase end-user satisfaction.",
    icon: <FaRocket size={50} color="#ff4d6d" />,
  },
  {
    title: "Data Security ",
    description:
      "QAonCloud ensures that all integrations and coding in the app are firm and solid to prevent breaches or bugs. We scan through schemas, tables, and other data sets within the app code for vulnerabilities and strategize their elimination.",
    icon: <FaRobot size={50} color="#ff4d6d" />,
  },
  {
    title: "Customer Centric Approach",
    description:
      "QAonCloud interprets user behaviour on the apps and uses the data to shape app quality. It helps build high-quality software that is customer-centric and greatly enhances user experience.",
    icon: <FaSearch size={50} color="#ff4d6d" />,
  },
  {
    title: "Fast to Market",
    description:
      "A simple and fast onboarding process at QAonCloud ensures an added bonus to our clients. By meeting market demands on time and the quick launch of updates and improvements, we help businesses reach their target audience and stay ahead in the market.",
    icon: <FaBrain size={50} color="#ff4d6d" />,
  },
  {
    title: "Increased Cost Savings",
    description:
      "We acquire talent at an optimal price with rural outsourcing, to deliver expert services at reasonable prices. QA teams are recruited after intense screening, followed by training by industry experts to deliver high-quality QA testing solutions at cost-saving rates.",
    icon: <FaBrain size={50} color="#ff4d6d" />,
  },
  {
    title: "Flexible and reliable teams",
    description:
      "You can choose your convenient partnership model to suit your business needs. You can scale up or down based on demand. Our teams can be scheduled to work at your convenient time and are reliable for meeting deadlines and delivering the best at all costs.",
    icon: <FaBrain size={50} color="#ff4d6d" />,
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
