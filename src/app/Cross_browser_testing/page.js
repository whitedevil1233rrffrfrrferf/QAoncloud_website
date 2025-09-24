import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import CBProcess from "@/components/Cross_browser_testing/CBProcess";
import CrossBrowserTestingServices from "@/components/Cross_browser_testing/CrossBrowserTestingServices";
import WhyCBServices from "@/components/Cross_browser_testing/WhyCBServices";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function CrossBrowserTesting() {
  return (
    <div>
      <Banners
        heading1="Deliver Bug-Free"
        heading2="Mobile Experiences"
        para="Test your mobile app across 1000+ real devices and OS versions with
                            our expert QA team."
        img="/images/banner/Mobile-testing.png"
      />
      <CrossBrowserTestingServices />
      <WhyCBServices />
      <CBProcess />
      <Clients />
      <ContactUs />
    </div>
  );
}
