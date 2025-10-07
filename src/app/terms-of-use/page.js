import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import Cookies from "@/components/terms-of-use/Cookies";
import ElectronicCommunications from "@/components/terms-of-use/ElectronicCommunications";
import Warrenty from "@/components/terms-of-use/Endorsement";
import Endorsement from "@/components/terms-of-use/Endorsement";
import Indemnification from "@/components/terms-of-use/Indemnification";
import IntellectualProperty from "@/components/terms-of-use/IntellectualProperty";
import Liability from "@/components/terms-of-use/Liability";
import PermissibleUse from "@/components/terms-of-use/PermissibleUse";
import PrivacyPolicy from "@/components/terms-of-use/privacy-policy";
import SiteGovernance from "@/components/terms-of-use/SiteGovernance";
import SiteMaterials from "@/components/terms-of-use/SiteMaterials";
import React from "react";

export const metadata = {
  title: "QA Testing Services | Software Testing Services - QAonCloud",
};

export default function page() {
  return (
    <div>
      <QAoncloudBanner
        title="Privacy Policy "
        image="/images/banners/terms-and-conditions.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <PrivacyPolicy />
      <ElectronicCommunications />
      <IntellectualProperty />
      <SiteMaterials />
      <PermissibleUse />
      <Endorsement />
      <Warrenty />
      <Cookies />
      <Liability />
      <Indemnification />
      <SiteGovernance />
    </div>
  );
}
