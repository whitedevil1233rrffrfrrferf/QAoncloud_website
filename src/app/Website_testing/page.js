import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import ContactUs from "@/components/Security_testing/ContactUs";
import WebProcess from "@/components/Web_testing/WebProcess";
import WebsiteTestingServices from "@/components/Web_testing/WebTestingServices";
import WhyWebServices from "@/components/Web_testing/WhyWebServices";

export default function WebsiteTesting() {
  return (
    <div>
      <Banners
        heading1="Deliver Bug-Free"
        heading2="Web Experiences"
        para="Test your web app across 1000+ real devices and OS versions with our expert QA team."
        img="/images/banner/Automation_testing.png"
      />
      <WebsiteTestingServices />
      <WhyWebServices />
      <WebProcess />
      <ContactUs />
      <Clients />
    </div>
  );
}
