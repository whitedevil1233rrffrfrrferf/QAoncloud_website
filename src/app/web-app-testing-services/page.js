import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactUs from "@/components/Security_testing/ContactUs";
import WebProcess from "@/components/Web_testing/WebProcess";
import WebsiteTestingServices from "@/components/Web_testing/WebTestingServices";
import WhyQC from "@/components/Web_testing/WhyQC";
import WhyWebServices from "@/components/Web_testing/WhyWebServices";

export default function WebsiteTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Discover Hidden Bugs with our Website QA Testing Services"
        image="/images/banners/Mobile-App-testing.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <WebsiteTestingServices />

      <WebProcess />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
