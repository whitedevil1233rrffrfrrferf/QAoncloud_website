import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import MobileProcess from "@/components/Mobile_testing/MobileProcess";
import MobileTestingServices from "@/components/Mobile_testing/MobileTestingServices";
import WhyMobileServices from "@/components/Mobile_testing/WhyMobileServices";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function MobileTesting() {
  return (
    <div>
      <Banners
        heading1="Deliver Bug-Free"
        heading2="Mobile Experiences"
        para="Test your mobile app across 1000+ real devices and OS versions with our expert QA team."
        img="/images/banner/Mobile-testing.png"
      />
      <MobileTestingServices />
      <WhyMobileServices />
      <MobileProcess />
      <Clients />
      <ContactUs />
    </div>
  );
}
