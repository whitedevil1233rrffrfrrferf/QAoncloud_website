import styles from "./TestingImpact.module.css";

export default function TestingImpact() {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.heading}>Our security Testing Impact</h1>
      <div className={styles.container}>
        <div className={styles.metric}>
          <h2>21,381</h2>
          <span>
            No. of Test Cases
            <br />
            Executed
          </span>
        </div>
        <div className={styles.metric}>
          <h2>2869</h2>
          <p>
            No. of Test scenarios
            <br />
            Executed
          </p>
        </div>
        <div className={styles.metric}>
          <h2>13887</h2>
          <p>
            No. of defects
            <br />
            logged
          </p>
        </div>
        <div className={styles.metric}>
          <h2>719</h2>
          <p>
            No. of critical issues /<br />
            Major crashes
          </p>
        </div>
        <div className={styles.metric}>
          <h2>334</h2>
          <p>
            No. of Test Cases
            <br />
            Automated
          </p>
        </div>
        <div className={styles.metric}>
          <h2>258</h2>
          <p>
            No. of TestScripts
            <br />
            Designed
          </p>
        </div>
      </div>
    </div>
  );
}
