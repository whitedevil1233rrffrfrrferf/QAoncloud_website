import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import GameProcess from "@/components/Game_testing/GameProcess";
import GameTestingServices from "@/components/Game_testing/GameTestingServices";
import WhyGameServices from "@/components/Game_testing/WhyGameServices";
import WhyQC from "@/components/Game_testing/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";
export default function Gametesting() {
  return (
    <div>
      <QAoncloudBanner
        title=" QA Game Testing Services"
        image="/images/banners/Game-app-testing.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <GameTestingServices />

      <GameProcess />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
