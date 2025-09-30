import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import HowWeWork from "@/components/Regression_testing/HowWeWork";
import TestingServices from "@/components/Regression_testing/TestingServices";
import WhyQC from "@/components/Regression_testing/WhyQC";
import WhyRegressionTesting from "@/components/Regression_testing/WhyRegressionTesting";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function RegressionTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Software Regression Testing Services"
        image="/images/banners/security.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <WhyRegressionTesting />
      <TestingServices />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
