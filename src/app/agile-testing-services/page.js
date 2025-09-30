import HowWeWork from "@/components/Agile_testing/HowWeWork";
import TestingServices from "@/components/Agile_testing/TestingServices";
import WhyAgileTesting from "@/components/Agile_testing/WhyAgileTesting";
import WhyQC from "@/components/Agile_testing/WhyQC";

import Banners from "@/components/Common/Banner/Banner";
import Clients from "@/components/Common/Clients/Clients";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactUs from "@/components/Security_testing/ContactUs";

export default function AgileTesting() {
  return (
    <div>
      <QAoncloudBanner
        title="Agile Software Testing Services"
        image="/images/banners/Agile.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <WhyAgileTesting />
      <TestingServices />
      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
