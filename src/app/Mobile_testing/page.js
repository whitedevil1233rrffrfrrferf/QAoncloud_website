import Banners from "@/components/Common/Banner/Banner";
import MobileProcess from "@/components/Mobile_testing/MobileProcess";
import MobileTestingServices from "@/components/Mobile_testing/MobileTestingServices";
import WhyMobileServices from "@/components/Mobile_testing/WhyMobileServices";

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
    </div>
  );
}
