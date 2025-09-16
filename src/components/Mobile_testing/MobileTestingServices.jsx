import IconUnderlineFlex from "../Common/IconUnderlineFlex/IconUnderlineFlex";
import styles from "./MobileTestingServices.module.css";
export default function MobileTestingServices() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.highlight}>QAonCloud</span> Mobile App Testing
        Services
      </h2>

      <IconUnderlineFlex
        icon="/images/mobile_testing/SmartPhone.svg"
        title="Android Mobile app testing"
        description="QAonCloud performs automated mobile app testing for Android apps with expert teams on board the project. To ensure high-quality apps, we ensure that all functionalities, integrations, and security layers are intact. We use tailor-made strategies for QA testing to guarantee 100% customer satisfaction."
      />

      <IconUnderlineFlex
        icon="/images/mobile_testing/Iphone.svg"
        title="iOS Mobile app testing"
        description="Expert teams at QAonCloud are trained and skilled in QA testing on iOS mobile apps. We analyze the compatibility of app functionalities, front and back end integrations, and more aspects to deliver apps of industry-standard and high quality."
      />
      <IconUnderlineFlex
        icon="/images/mobile_testing/MobileAutomation.svg"
        title="Mobile Automation testing"
        description="Mobile automation testing experts at QAonCloud use custom test scripts to perform automated tests on extensive data. It accelerates the testing process, saves costs with reduced manual labor for repetitive testing, and ensures quick mobile app launches."
      />
      <IconUnderlineFlex
        icon="/images/mobile_testing/MobileWebApps.svg"
        title="Mobile Web Apps"
        description="QAonCloud employs industry knowledge and expert skills to conduct QA testing on mobile web apps to make them compatible with various web platforms, devices, and browsers."
      />
    </section>
  );
}
