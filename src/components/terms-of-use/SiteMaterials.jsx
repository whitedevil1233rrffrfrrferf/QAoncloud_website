import React from "react";
import ListComponent from "../Privacy-policy/ListComponent";

export default function SiteMaterials() {
  const PersonalInformation = [
    "All materials displayed on or contained within the sites, including but not limited to layout, colour schemes, design, text, editorial materials, informational text, photographs, illustrations, artwork, other graphic or digital materials, and names (collectively, the materials), are the property of QAonCloud and are protected by copyright, trademark, patent.",
    "You acknowledge and agree that the sites and materials are the property of QAonCloud and that you will not obtain any rights on the materials.",
    "Any reproduction of the content you produce must include all of our copyright and other notices.",
    "You may not Reproduce, modify, publish, transmit, display, perform, distribute, disseminate, broadcast, circulate, or otherwise exploit any content on the sites, including, but not limited to, any materials, in whole or in part, to any third party.",
    "You may not Participate in the transfer, license, or sale of any content on the sites, including, but not limited to, any materials.",
    "You may not Create derivative works of any content on the sites. No part of the content on the sites may be saved on a computer.",
    "All rights not expressly granted are reserved in this document.",
  ];
  return (
    <div>
      <ListComponent header="Sites Materials" listItems={PersonalInformation} />
    </div>
  );
}
