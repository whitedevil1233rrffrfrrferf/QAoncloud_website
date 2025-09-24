import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import CPProcess from "@/components/Cross_platform_testing/CPProcess";

import CrossPlatformTestingServices from "@/components/Cross_platform_testing/CrossPlatformTestingServices";
import WhyCPServices from "@/components/Cross_platform_testing/WhyCPServices";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function CrossPlatformTesting() {
  return (
    <div>
      <Banners
        heading1="Deliver Bug-Free"
        heading2="Mobile Experiences"
        para="Test your mobile app across 1000+ real devices and OS versions with
                our expert QA team."
        img="/images/banner/Mobile-testing.png"
      />
      <CrossPlatformTestingServices />
      <WhyCPServices />
      <CPProcess />
      <Clients />
      <ContactUs />
    </div>
  );
}
