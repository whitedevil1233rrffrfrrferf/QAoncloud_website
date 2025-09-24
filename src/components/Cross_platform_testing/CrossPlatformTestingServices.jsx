import IconUnderlineFlex from "../Common/IconUnderlineFlex/IconUnderlineFlex";
import styles from "./CrossPlatformTestingServices.module.css";
export default function CrossPlatformTestingServices() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.highlight}>QAonCloud</span> Cross Platform
        Testing Services
      </h2>

      <IconUnderlineFlex
        icon="/images/cross_platform/web.svg"
        title="Cross-Platform Browser Testing"
        description="QAonCloud delivers cross-browser testing to ensure that functionalities, graphics, and other features perform as they were intended to across various web browsers. We ensure software consistency across browsers with speed and efficiency."
      />

      <IconUnderlineFlex
        icon="/images/cross_platform/responsive-design.svg"
        title="Cross-Platform Testing"
        description="Applications must perform flawlessly on various platforms to render a good user experience for the end-user. QAonCloud analyzes discrepancies caused by incompatibilities, including platform-specific issues and poor OS compatibility to enhance UI/UX."
      />
      <IconUnderlineFlex
        icon="/images/cross_platform/operative-system.svg"
        title="Browser Game Testing"
        description="The QAonCloud team can assist you in raising the calibre of your game by offering qualified quality assurance game testing for browser games designed to run on browser platforms."
      />
    </section>
  );
}
