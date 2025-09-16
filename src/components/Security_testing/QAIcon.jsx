import AosIcon from "./AosIcon";
import styles from "./QAIcon.module.css";

export default function QAIcon() {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.column_wrapper}>
        <div className={styles.section_inner}>
          <h2>Why Choose Our QA Services?</h2>
          <AosIcon
            icon="fa-solid fa-cogs"
            heading="ISTQB Certified Testers"
            description="Our team consists of internationally certified testing
                professionals with proven expertise."
          />
          <AosIcon
            icon="fa-solid fa-cogs"
            heading="Proven QA Processes"
            description="Established testing methodologies and best practices refined
                through hundreds of projects."
          />
          <AosIcon
            icon="fa-solid fa-cogs"
            heading="Scalable On-Demand Teams"
            description="Established testing methodologies and best practices refined
                through hundreds of projects."
          />
          <AosIcon
            icon="fa-solid fa-cogs"
            heading="Scalable On-Demand Teams"
            description="Established testing methodologies and best practices refined
                through hundreds of projects."
          />
        </div>
      </div>
    </div>
  );
}
