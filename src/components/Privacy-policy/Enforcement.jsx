import React from "react";
import ListComponent from "./ListComponent";

export default function Enforcement() {
  const PersonalInformation = [
    "QAonCloud uses a self-assessment technique and periodically validates that the policy is accurate and complete for the information meant to be covered by our privacy principles. Anybody with concerns about using and sharing personal information can contact us using the information provided to settle any complaints or disputes in compliance with the standards.",
  ];
  return <ListComponent header="Enforcement" listItems={PersonalInformation} />;
}
