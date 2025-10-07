import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import DataIntegrity from "@/components/Privacy-policy/DataIntegrity";
import DataStorage from "@/components/Privacy-policy/DataStorage";
import Disclose from "@/components/Privacy-policy/Disclose";
import Enforcement from "@/components/Privacy-policy/Enforcement";
import GenInformation from "@/components/Privacy-policy/GenInformation";
import Information from "@/components/Privacy-policy/Information";
import PersonalInformation from "@/components/Privacy-policy/PersonalInformation";
import PrivacyPolicy from "@/components/Privacy-policy/PrivacyPolicy";
import React from "react";

export const metadata = {
  title: "QA Testing Services | Software Testing Services - QAonCloud",
};
export default function page() {
  return (
    <>
      <QAoncloudBanner
        title="Privacy Policy "
        image="/images/banners/privacy-policy.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <PrivacyPolicy />
      <PersonalInformation />
      <Disclose />
      <DataStorage />
      <Information />
      <DataIntegrity />
      <Enforcement />
      <GenInformation />
    </>
  );
}
