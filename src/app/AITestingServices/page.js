import Challenges from "@/components/AI/Challenges";
import QAServices from "@/components/AI/QAServices";
import WhyQC from "@/components/AI/WhyQC";
import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function AITestingServices() {
  return (
    <div>
      <Banners
        heading1="Deliver Bug-Free"
        heading2="Mobile Experiences"
        para="Test your mobile app across 1000+ real devices and OS versions with our expert QA team."
        img="/images/banner/Mobile-testing.png"
      />
      <Challenges />
      <QAServices />
      <WhyQC />
      <Clients />
      <ContactUs />
    </div>
  );
}
