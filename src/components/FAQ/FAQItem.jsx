import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiHelpCircle } from "react-icons/fi";
import styles from "./FAQItem.module.css";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <div className={styles.header} onClick={() => setOpen(!open)}>
        <div className={styles.icon}>
          <FiHelpCircle size={18} color="#00aaff" />
        </div>
        <h3 className={styles.question}>{question}</h3>
        <div className={styles.arrow}>
          {open ? (
            <FiChevronUp color="#ffa500" />
          ) : (
            <FiChevronDown color="#000" />
          )}
        </div>
      </div>
      {open && (
        <div className={styles.answer}>
          <p className={styles.para}>{answer}</p>
        </div>
      )}
    </div>
  );
}
