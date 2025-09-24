import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import Challenges from "@/components/EventManagement/Challenges";
import QAServices from "@/components/EventManagement/QAServices";
import ToolsAndTechnologies from "@/components/EventManagement/ToolsAndTechnologies";
import WhyQC from "@/components/EventManagement/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function EventManagementTestingServices() {
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
      <ToolsAndTechnologies />
      <WhyQC />
      <Clients />
      <ContactUs />
    </div>
  );
}
