import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import CPProcess from "@/components/Cross_platform_testing/CPProcess";

import CrossPlatformTestingServices from "@/components/Cross_platform_testing/CrossPlatformTestingServices";
import WhyCPServices from "@/components/Cross_platform_testing/WhyCPServices";
import WhyQC from "@/components/Cross_platform_testing/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function CrossPlatformTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Seamless Experience Across Platforms With Advanced Cross-Platform Testing Services"
        image="/images/banners/Cross-Platform.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <CrossPlatformTestingServices />
      <CPProcess />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
