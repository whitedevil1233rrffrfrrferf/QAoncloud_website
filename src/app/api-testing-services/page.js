import HowWeWork from "@/components/API_testing/HowWeWork";
import TestingServices from "@/components/API_testing/TestingServices";
import WhyAPITesting from "@/components/API_testing/WhyAPITesting";
import WhyQC from "@/components/API_testing/WhyQC";
import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function APITesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Achieve Seamless Integration with API Automation Testing"
        image="/images/banners/API.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <WhyAPITesting />
      <TestingServices />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
