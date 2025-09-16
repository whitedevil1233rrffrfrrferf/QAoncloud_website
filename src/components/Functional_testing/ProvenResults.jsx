import styles from "./ProvenResults.module.css";

export default function ProvenResults() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Proven Results</h2>

      <div className={styles.stats}>
        <div className={styles.statBlock}>
          <h3 className={styles.statValue}>10M+</h3>
          <p className={styles.statLabel}>Test Cases Executed</p>
        </div>
        <div className={styles.statBlock}>
          <h3 className={styles.statValue}>99.8%</h3>
          <p className={styles.statLabel}>Defect Acceptance Rate</p>
        </div>
        <div className={styles.statBlock}>
          <h3 className={styles.statValue}>3 Days</h3>
          <p className={styles.statLabel}>Average Onboarding Time</p>
        </div>
      </div>

      <div className={styles.testimonialBox}>
        <p className={styles.quote}>
          <em>
            "The functional testing team helped us identify critical issues
            before launch, saving us months of rework and significantly
            improving our user satisfaction scores."
          </em>
        </p>
        <p className={styles.author}>— Sarah Chen, CTO at TechStart</p>
      </div>
    </div>
  );
}
