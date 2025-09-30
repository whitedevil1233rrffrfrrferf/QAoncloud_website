import SectionHeader from "../Common/SectionHeader/SectionHeader";
import ReverseCard from "./ReverseCard";
import styles from "./WhyQAoncloud.module.css";
export default function WhyQAoncloud() {
  const whyItems = [
    {
      title: "Product Mindset",
      description:
        "We dig deeper into what customers want from the software and implement the ideas to add value to the engagement. Our keen focus on product quality and customer-centric solutions ensures negative testing to uncover bugs before the launch. Thus, we deliver a superior experience for our customers.",
      icon: "/images/why_QAoncloud/img_1.png",
      reverse: false,
      grayBg: true,
    },
    {
      title: "Speed to Market",
      description:
        "We use streamlined processes to begin projects on time and work diligently on every aspect of the testing process with high efficiencies. QAonCloud guarantees that you meet all deadlines on time and craft productive testing strategies to launch your products quickly to the market.",
      icon: "/images/why_QAoncloud/img_2.png",
      reverse: true,
      grayBg: false,
    },
    {
      title: "IP Protection",
      description:
        "Your IP rights remain with you, and all ideas are protected under NDA. We perform black-box testing and access your apps through a secured environment for maximum safety.",
      icon: "/images/why_QAoncloud/img_4.png",
      reverse: false,
      grayBg: true,
    },
    {
      title: "Reliable Teams",
      description:
        "We hire our teams through rigorous screening and all monitor activities under CCTV for safety. We build trust among our teams and clients through transparent communication silos. Physical security measures with biometric access and restriction to important floors ensure that your data is safe with us.",
      icon: "/images/why_QAoncloud/img_7.png",
      reverse: true,
      grayBg: false,
    },
    {
      title: "Cost-Effective",
      description:
        "QAonCloud uses an innovative rural shoring model to provide opportunities for high talent distributed universally. We train every QA tester to meet industry standards and exceed expectations in delivering the best for our clients at competitive costs.",
      icon: "/images/why_QAoncloud/img_3.png",
      reverse: false,
      grayBg: true,
    },
    {
      title: "Fully Flexible",
      description:
        "QAonCloud testing models allow you to scale up or down with flexible contracts. Our testing process begins with a simple onboarding process to save time while keeping contracts dynamic to suit your business needs.",
      icon: "/images/why_QAoncloud/img_5.png",
      reverse: true,
      grayBg: false,
    },
    {
      title: "Qualified Testers",
      description:
        "All our QA testers are qualified, certified, and trained before taking up a project for our clients. Our testers are selected based on their skills, knowledge, and expertise on the subject matter on every level to solve critical issues with an innovative approach.",
      icon: "/images/why_QAoncloud/img_6.png",
      reverse: false,
      grayBg: true,
    },
  ];
  return (
    <section className={styles.whySection}>
      <SectionHeader
        heading="Why QAoncloud?"
        subheading="QAonCloud is an enthusiastic team of software testers that craft quality software and use a proven approach toward our deliverables."
      />
      {whyItems.map((item, index) => (
        <ReverseCard key={index} {...item} />
      ))}
    </section>
  );
}
