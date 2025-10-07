import React from "react";
import ListComponent from "../Privacy-policy/ListComponent";

export default function IntellectualProperty() {
  const PersonalInformation = [
    "QAonCloud, its divisions, its third-party licensors and others' trademarks, trade dress, logos, and service marks (collectively, the trademarks) displayed on the sites are registered and unregistered trademarks of QAonCloud.",
    "Without the authorisation of QAonCloud, you are not entitled to use any of the trademarks displayed on the sites.",
    "You may not utilise any hyper or HTML links, meta tags, or any other hidden text utilizing QAonCloud's trademarks.",
  ];
  return (
    <div>
      <ListComponent
        header="Intellectual Property"
        listItems={PersonalInformation}
      />
    </div>
  );
}
