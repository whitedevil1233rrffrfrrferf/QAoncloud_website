import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import CBProcess from "@/components/Cross_browser_testing/CBProcess";
import CrossBrowserTestingServices from "@/components/Cross_browser_testing/CrossBrowserTestingServices";
import WhyCBServices from "@/components/Cross_browser_testing/WhyCBServices";
import WhyQC from "@/components/Cross_browser_testing/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function CrossBrowserTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Ensure your website looks great on every browser"
        image="/images/banners/Cross-Browser.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <CrossBrowserTestingServices />

      <CBProcess />
      <WhyQC />
      <Clients />
      <ContactUs />
    </div>
  );
}
