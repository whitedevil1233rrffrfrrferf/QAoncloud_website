import IconUnderlineFlex from "../Common/IconUnderlineFlex/IconUnderlineFlex";
import styles from "./WebTestingServices.module.css";
export default function WebTestingServices() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.highlight}>QAonCloud</span> Automated Web
        Testing Services Services
      </h2>

      <IconUnderlineFlex
        icon="/images/web_app_testing/usability.svg"
        title="Web Usability Testing"
        description="Web applications need to maintain standard quality and have ease of use abilities. QAonCloud uses industry best web automation tools for QA testing that focus on app quality, intuition, and aesthetic appeal. We overcome usability issues and defects with detailed QA."
      />

      <IconUnderlineFlex
        icon="/images/web_app_testing/page-speed.svg"
        title="Web Performance Testing"
        description="Web applications must have higher performance under various conditions and loads. We assess your complex app structures and systems to analyze your web app responsiveness and stability. Our expert teams devise robust testing strategies to guarantee speed and enhanced user interface."
      />
      <IconUnderlineFlex
        icon="/images/web_app_testing/checklist.svg"
        title="Web Compliance Testing"
        description="QAonCloud assesses if the web app meets the industry compliances like HIPAA, GAMP, PCI DSS, and regulations to enhance product value."
      />
      <IconUnderlineFlex
        icon="/images/web_app_testing/accessibility.svg"
        title="Web Accessibility Testing"
        description="Web applications must be made with as many user-friendly elements as possible, including making them accessible for users with disabilities for higher web app value and quality. QAonCloud provides validation services against WCAG 2.1 and ADA standards and other requirements for your web application."
      />
    </section>
  );
}
