import AutomationProcess from "@/components/Automation_testing/AutomationProcess";
import Benefits from "@/components/Automation_testing/Benefits";
import Clients from "@/components/Common/Clients/Clients";
import Tools from "@/components/Automation_testing/Tools";
import Banners from "@/components/Common/Banner/Banner";

export default function AutomationTesting() {
  return (
    <div>
      <Banners
        heading1="Smarter QA with"
        heading2="Automation Testing"
        para="Reduce testing time, enhance product stability, and release with confidence using QAonCloud's automation services."
        img="/images/banner/Automation_testing.png"
      />
      <Benefits />
      <AutomationProcess />
      <Tools />

      <Clients />
    </div>
  );
}
