import React from "react";
import ListComponent from "../Privacy-policy/ListComponent";

export default function SiteGovernance() {
  const PersonalInformation = [
    "Please take a look at the other policies on the website. These policies apply to your visit to the sites as well.",
    "Suppose any part of these Terms of Use is unlawful, void, or unenforceable for any reason. In that case, that provision shall be deemed severable from the rest of the Terms of Use, and the legality and enforceability of the other sections shall not be affected.",
  ];
  return (
    <div>
      <ListComponent
        header="Site Governance and Severability"
        listItems={PersonalInformation}
      />
    </div>
  );
}
