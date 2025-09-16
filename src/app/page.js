import Image from "next/image";
import styles from "./page.module.css";
import Banner from "../components/Software_testing/Banner";
import Map from "../components/HomePage/Map";
import Services from "../components/HomePage/Services";
import Solutions from "../components/HomePage/Solutions";
import Industries from "../components/HomePage/Industries";
import WhyQC from "../components/HomePage/WhyQC";
import QualitySoftware from "../components/HomePage/QualitySoftware";
import ClientTestimonials from "../components/HomePage/ClientTestimonials";
export default function Home() {
  return (
    <>
      <Banner />
      <QualitySoftware />
      <Map />

      <Services />
      <Solutions />
      <Industries />
      <WhyQC />
      <ClientTestimonials />
    </>
  );
}
