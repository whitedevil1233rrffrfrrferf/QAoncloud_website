import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import MobileProcess from "@/components/Mobile_testing/MobileProcess";
import MobileTestingServices from "@/components/Mobile_testing/MobileTestingServices";
import WhyMobileServices from "@/components/Mobile_testing/WhyMobileServices";
import WhyQC from "@/components/Mobile_testing/WhyQc";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function MobileTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Mobile Automation Testing Services to unlock full potential"
        image="/images/banners/Mobile-App-testing.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <MobileTestingServices />

      <MobileProcess />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
