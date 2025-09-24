import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import ContactUs from "@/components/Security_testing/ContactUs";
import TVProcess from "@/components/TV_testing/TVProcess";
import TVTestingServices from "@/components/TV_testing/TVTestingServices";
import WhyTVServices from "@/components/TV_testing/WhyTVServices";

export default function SmartTVTesting() {
  return (
    <div>
      <Banners
        heading1="Deliver Bug-Free"
        heading2="Mobile Experiences"
        para="Test your mobile app across 1000+ real devices and OS versions with our expert QA team."
        img="/images/banner/Mobile-testing.png"
      />
      <TVTestingServices />
      <WhyTVServices />
      <TVProcess />
      <Clients />
      <ContactUs />
    </div>
  );
}
