import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import Challenges from "@/components/ECommerce/Challenges";
import QAServices from "@/components/ECommerce/QAServices";
import ToolsAndTechnologies from "@/components/ECommerce/ToolsAndTechnologies";
import WhyQC from "@/components/ECommerce/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function ECommerce() {
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
      <ToolsAndTechnologies />
      <Clients />
      <ContactUs />
    </div>
  );
}
