import Industries from "@/components/Software_testing/Industries";
import Banner from "@/components/Software_testing/Banner";
import TestingProcess from "@/components/Software_testing/TestingProcess";
import WhyQaoncloud from "@/components/Software_testing/WhyQaoncloud";
import QAServices from "@/components/Software_testing/QAServices";

export default function SecurityTestingPage() {
  return (
    <div>
      <Banner />
      <WhyQaoncloud />
      <QAServices />
      <TestingProcess />
      <Industries />
    </div>
  );
}
