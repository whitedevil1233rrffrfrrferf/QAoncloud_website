import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactUs from "@/components/Security_testing/ContactUs";
import TVProcess from "@/components/smart-tv-app-testing-services/TVProcess";
import TVTestingServices from "@/components/smart-tv-app-testing-services/TVTestingServices";
import WhyQC from "@/components/smart-tv-app-testing-services/WhyQC";
import WhyTVServices from "@/components/smart-tv-app-testing-services/WhyTVServices";

export default function SmartTVTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Elevate streaming experience with our smart TV app testing"
        image="/images/banners/Smart-tv-app-testing.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <TVTestingServices />
      <TVProcess />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
