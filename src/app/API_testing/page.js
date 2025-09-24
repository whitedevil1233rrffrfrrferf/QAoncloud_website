import HowWeWork from "@/components/API_testing/HowWeWork";
import TestingServices from "@/components/API_testing/TestingServices";
import WhyAPITesting from "@/components/API_testing/WhyAPITesting";
import WhyQC from "@/components/API_testing/WhyQC";
import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function APITesting() {
  return (
    <div>
      <Banners
        heading1="Deliver Bug-Free"
        heading2="Mobile Experiences"
        para="Test your mobile app across 1000+ real devices and OS versions with our expert QA team."
        img="/images/banner/Mobile-testing.png"
      />
      <WhyAPITesting />
      <TestingServices />
      <WhyQC />
      <HowWeWork />
      <Clients />
      <ContactUs />
    </div>
  );
}
