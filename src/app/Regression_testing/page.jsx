import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import HowWeWork from "@/components/Regression_testing/HowWeWork";
import TestingServices from "@/components/Regression_testing/TestingServices";
import WhyQC from "@/components/Regression_testing/WhyQC";
import WhyRegressionTesting from "@/components/Regression_testing/WhyRegressionTesting";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function RegressionTesting() {
  return (
    <div>
      <Banners
        heading1="Smarter QA with"
        heading2="Automation Testing"
        para="Reduce testing time, enhance product stability, and release with confidence using QAonCloud's automation services."
        img="/images/banner/Automation_testing.png"
      />
      <WhyRegressionTesting />
      <TestingServices />
      <WhyQC />
      <HowWeWork />
      <Clients />
      <ContactUs />
    </div>
  );
}
