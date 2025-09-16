import Image from "next/image";
import Banner from "@/components/Common/Banner/Banner";

import WhyFunctionalTesting from "@/components/Functional_testing/WhyFunctionalTesting";
import TestingServices from "@/components/Functional_testing/TestingServices";
import WhyItWorks from "@/components/Functional_testing/WhyItWorks";
import WhatYouGet from "@/components/Functional_testing/WhatYouGet";
import ProvenResults from "@/components/Functional_testing/ProvenResults";

export default function Home() {
  return (
    <div>
      <Banner
        heading1="Functional Testing"
        heading2="Services"
        para="Ensure your application works flawlessly—every feature, every user journey"
        img="/images/banner/software_testing.jpg"
      />
      <WhyFunctionalTesting />
      <TestingServices />
      <WhyItWorks />
      <WhatYouGet />
      <ProvenResults />
    </div>
  );
}
