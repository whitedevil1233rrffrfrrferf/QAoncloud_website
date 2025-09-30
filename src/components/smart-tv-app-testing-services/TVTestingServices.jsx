import IconUnderlineFlex from "../Common/IconUnderlineFlex/IconUnderlineFlex";
import styles from "./TVTestingServices.module.css";
export default function TVTestingServices() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.highlight}>QAonCloud</span> Smart TV Application
        Testing Services
      </h2>
      <IconUnderlineFlex
        icon="/images/smarttv_testing/Streaming Device Testing.png"
        title="Streaming Device Testing"
        description="Enabling users to experience seamless Smart TV streaming on various devices and platforms without glitches or crashes."
      />
      <IconUnderlineFlex
        icon="/images/smarttv_testing/For Smart TV Manufacturers.png"
        title=" Smart TV Manufacturers"
        description="Helping build platform-agnostic apps compatible with all Smart TVs. Test features with the 'Dektec' playout plugin and perform Black box testing to guarantee high-quality apps."
      />
      <IconUnderlineFlex
        icon="/images/smarttv_testing/For Smart TV Developers.png"
        title=" Smart TV Developers"
        description="Offer user interface testing to verify consistency across devices, platforms, and models. Ensure that the app performs seamlessly across all the platforms and TV operating systems."
      />
      <IconUnderlineFlex
        icon="/images/smarttv_testing/For Smart TV Operators.png"
        title=" Smart TV Operators"
        description="Evaluates the entire Smart TV ecosystem and meet consumer configurations of Smart TV in conjunction with other devices (web, mobile, STB). We test overall app performance and user experience and ensure that the app supports all content, including DRM-protected content."
      />
    </section>
  );
}
