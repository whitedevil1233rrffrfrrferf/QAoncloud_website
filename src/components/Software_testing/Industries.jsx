import styles from "./Industries.module.css";
import {
  FaCreditCard,
  FaShoppingCart,
  FaPhoneAlt,
  FaRobot,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Industries() {
  const industries = [
    { icon: <FaCreditCard />, name: "Fintech" },
    { icon: <FaShoppingCart />, name: "E-commerce" },
    { icon: <FaPhoneAlt />, name: "Telecommunication" },
    { icon: <FaRobot />, name: "Artificial Intelligence" },
    { icon: <FaCalendarAlt />, name: "Event Management" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Industries We Serve</h2>
      <p className={styles.subheading}>
        At QaonCloud, we bring domain-specific expertise to every project. Our
        QA solutions are customized to meet the unique challenges and compliance
        needs of various industries.
      </p>
      <div className={styles.grid}>
        {industries.map((industry, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{industry.icon}</div>
            <p className={styles.label}>{industry.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
