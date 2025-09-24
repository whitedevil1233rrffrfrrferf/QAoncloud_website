import IconUnderlineFlex from "../Common/IconUnderlineFlex/IconUnderlineFlex";
import styles from "./CrossBrowserTestingServices.module.css";
export default function CrossBrowserTestingServices() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.highlight}>QAonCloud</span> Cross Browser
        Testing Services
      </h2>

      <IconUnderlineFlex
        icon="/images/cross-browser-testing/laptop.svg"
        title="Cross Browser Testing"
        description="QAonCloud experts validate application performance across various devices and Operating systems like iOS and Android to ensure a quality user experience. Our experts test backend and frontend configurations for app compatibility across different browsers."
      />

      <IconUnderlineFlex
        icon="/images/cross-browser-testing/landing-page.svg"
        title="Visual Quality Testing"
        description="Applications must perform flawlessly on various platforms to render a good user experience for the end-user. QAonCloud analyzes discrepancies caused by incompatibilities, including platform-specific issues and poor OS compatibility to enhance UI/UX."
      />
      <IconUnderlineFlex
        icon="/images/cross-browser-testing/settings.svg"
        title="Functional Testing"
        description="QAonCloud experts evaluate several functionalities of a web application to ensure that it performs accurately and as designed. With advanced testing methods, we perform robust QA tests on functions to guarantee superior product delivery and customer satisfaction."
      />
    </section>
  );
}
