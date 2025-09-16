import styles from "./TrustedSection.module.css";
export default function TrustedSection() {
  return (
    <div className={styles.trustedSection}>
      <h3>Trusted by Leading Companies</h3>
      <div className={styles.companyGrid}>
        <div className={styles.companyBox}>TechCorp</div>
        <div className={styles.companyBox}>InnovateLabs</div>
        <div className={styles.companyBox}>SecureApp</div>
        <div className={styles.companyBox}>DataFlow</div>
        <div className={styles.companyBox}>CloudTech</div>
        <div className={styles.companyBox}>AgileWorks</div>
      </div>
    </div>
  );
}
