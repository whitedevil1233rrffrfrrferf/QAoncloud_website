import IconUnderlineFlex from "../Common/IconUnderlineFlex/IconUnderlineFlex";
import styles from "./GameTestingServices.module.css";
export default function WebTestingServices() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.highlight}>QAonCloud</span> Automated Game
        Testing Services Services
      </h2>

      <IconUnderlineFlex
        icon="/images/game_testing/Mobile Games Testing.png"
        title="Mobile Game Testing"
        description="We perform mobile game testing for iOS and Android to guarantee the right logical structure, perfect operation, user-friendly interface, and security."
      />

      <IconUnderlineFlex
        icon="/images/game_testing/Desktop Games Testing.png"
        title="Desktop Game Testing"
        description="We review the requirements, flow, and architecture of the game before we begin testing in order to establish a thorough test strategy. Our services are designed to provide various post-production game testing, such as Alpha and Beta tests."
      />
      <IconUnderlineFlex
        icon="/images/game_testing/Browser Games Testing.png"
        title="Browser Game Testing"
        description="The QAonCloud team can assist you in raising the calibre of your game by offering qualified quality assurance game testing for browser games designed to run on browser platforms."
      />
    </section>
  );
}
