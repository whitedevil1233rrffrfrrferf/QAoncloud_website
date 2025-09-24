import HowWeWork from "@/components/Agile_testing/HowWeWork";
import TestingServices from "@/components/Agile_testing/TestingServices";
import WhyAgileTesting from "@/components/Agile_testing/WhyAgileTesting";
import WhyQC from "@/components/API_testing/WhyQC";
import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function AgileTesting() {
  return (
    <div>
      <Banners
        heading1="Deliver Bug-Free"
        heading2="Mobile Experiences"
        para="Test your mobile app across 1000+ real devices and OS versions with our expert QA team."
        img="/images/banner/Mobile-testing.png"
      />
      <WhyAgileTesting />
      <TestingServices />
      <WhyQC />
      <HowWeWork />
      <Clients />
      <ContactUs />
    </div>
  );
}
