import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import GameProcess from "@/components/Game_testing/GameProcess";
import GameTestingServices from "@/components/Game_testing/GameTestingServices";
import WhyGameServices from "@/components/Game_testing/WhyGameServices";
import ContactUs from "@/components/Security_testing/ContactUs";
export default function Gametesting() {
  return (
    <div>
      <Banners
        heading1="Deliver Bug-Free"
        heading2="Mobile Experiences"
        para="Test your mobile app across 1000+ real devices and OS versions with
      our expert QA team."
        img="/images/banner/Mobile-testing.png"
      />
      <GameTestingServices />
      <WhyGameServices />
      <GameProcess />
      <Clients />
      <ContactUs />
    </div>
  );
}
