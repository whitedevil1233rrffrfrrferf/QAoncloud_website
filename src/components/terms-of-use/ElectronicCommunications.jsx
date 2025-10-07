import React from "react";
import ListComponent from "../Privacy-policy/ListComponent";

export default function ElectronicCommunications() {
  const PersonalInformation = [
    "You agree to receive electronic communications from us.",
    "We may contact you via email, text message, or notices posted on the sites.",
    "You acknowledge that any legal requirement is in writing as satisfied by all agreements, notices, disclosures, and other communications that we provide to you electronically.",
  ];
  return (
    <ListComponent
      header="Electronic Communications"
      listItems={PersonalInformation}
    />
  );
}
