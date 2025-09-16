import QAIcon from "./QAIcon";
import styles from "./QAServicesPage.module.css";
import TrustedSection from "./TrustedSection";
export default function QAServicesPage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <QAIcon />
          <div className={styles.rightColumn}>
            <div className={styles.TrustedSection}>
              <TrustedSection className={styles.TrustedSection} />
            </div>
            <div className={styles.box}>
              <span className={styles.percent}>99.9%</span>
              <span className={styles.para}>Client Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
