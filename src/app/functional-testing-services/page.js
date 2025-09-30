import Image from "next/image";
import Banner from "@/components/Common/Banner/Banner";

import WhyFunctionalTesting from "@/components/Functional_testing/WhyFunctionalTesting";
import TestingServices from "@/components/Functional_testing/TestingServices";
import WhyItWorks from "@/components/Functional_testing/WhyItWorks";
import WhatYouGet from "@/components/Functional_testing/WhatYouGet";
import ProvenResults from "@/components/Functional_testing/ProvenResults";
import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import WhyQC from "@/components/Functional_testing/WhyQC";
import ContactUs from "@/components/Security_testing/ContactUs";
import Clients from "@/components/Common/Clients/Clients";

export default function Home() {
  return (
    <div>
      <QAoncloudBanner
        title="Functional Testing Services"
        image="/images/banners/functional-testing.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <WhyFunctionalTesting />
      <TestingServices />

      <WhyQC />
      <ContactUs />
      <Clients />
    </div>
  );
}
