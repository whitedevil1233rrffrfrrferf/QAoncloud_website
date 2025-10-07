import React from "react";
import ListComponent from "./ListComponent";

export default function Information() {
  const PersonalInformation = [
    "You may be offered the chance to subscribe to and get extra information about our products and services the first time you provide us with registration information through our site. You can adjust your initial options after your first use by contacting our customer care e-mail at enquiry@qaoncloud.com.",
    "You can opt out of receiving commercial e-mails from us at the bottom of each commercial e-mail we send you. In some cases, we may have previously shared your information with third parties before you altered your privacy preferences.",
  ];
  return (
    <ListComponent
      header="How You May Access and Change the Information that QAonCloud Collects"
      listItems={PersonalInformation}
    />
  );
}
