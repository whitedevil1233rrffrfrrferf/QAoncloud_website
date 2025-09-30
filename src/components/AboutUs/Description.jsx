import styles from "./Description.module.css";
import { FaUserCircle, FaEye, FaBullseye } from "react-icons/fa";

const aboutItems = [
  {
    icon: <FaUserCircle />,
    title: "About Us",
    description:
      "QAnCloud is a leading software testing services company, based in Chennai, India. Founded in 2016, QAnCloud’s team specializes in providing manual and automated testing solutions to customers across the globe. Our prime objective is to deliver high-quality testing solutions to our clients by adopting advanced testing methodologies and tools at optimal costs. Over the last few years, QAnCloud has helped many enterprises ranging from startups to MNCs, to release high-quality applications at an accelerated time to market. We have a highly competent workforce and an excellent pool of qualified professionals who provide end to end solutions to various organizations across all industries. We believe that customers are the reason for our existence and build trust based long term relations with our clients. QAnCloud offers simple, flexible, and more cost-effective software testing and QA services that are tailored to your needs.",
  },
  {
    icon: <FaEye />,
    title: "Our Vision",
    description:
      "Our vision is to help you deliver the best customer experience for your applications and empower business for every entrepreneur.",
  },
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    description:
      "At QAnCloud, we endeavor to bring high tech jobs to rural India, to create job opportunities for the rural youth, and also to create a positive impact on their economic status by working from their home town.",
  },
];

export default function Description() {
  return (
    <div>
      <section className={styles.aboutSection}>
        {aboutItems.map((item, index) => (
          <div key={index} className={styles.aboutItem}>
            <div className={styles.header}>
              <div className={styles.inner_header}>
                <div className={styles.icon}>{item.icon}</div>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
