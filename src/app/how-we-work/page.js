import Clients from "@/components/Common/Clients/Clients";
import ExpertTeams from "@/components/how-we-work/ExpertTeams";
import ImageComponent from "@/components/how-we-work/ImageComponent";
import Process from "@/components/how-we-work/Process";
import WhyQAoncloud from "@/components/how-we-work/WhyQAoncloud";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function HowWeWork() {
  return (
    <div>
      <WhyQAoncloud />
      <ExpertTeams />
      <ImageComponent />
      <Process />
      <ContactUs />
      <Clients />
    </div>
  );
}
