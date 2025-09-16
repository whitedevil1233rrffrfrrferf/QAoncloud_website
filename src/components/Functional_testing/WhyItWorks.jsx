import styles from "./WhyItWorks.module.css";

const steps = [
  {
    number: 1,
    title: "Onboarding",
    description: "Quick project setup and requirements gathering",
  },
  {
    number: 2,
    title: "Test Plan",
    description: "Comprehensive testing strategy development",
  },
  {
    number: 3,
    title: "Execution",
    description: "Thorough testing across all scenarios",
  },
  {
    number: 4,
    title: "Report",
    description: "Detailed insights and recommendations",
  },
];

export default function WhyItWorks() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>How It Works</h2>
      <div className={styles.stepsContainer}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <div className={styles.circle}>{step.number}</div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
