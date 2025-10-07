import React from "react";
import ListComponent from "./ListComponent";

export default function Disclose() {
  const PersonalInformation = [
    "QAonCloud may use your personal information to send you updates about special events, new services, payment confirmations or other promotions that may interest you via mail, e-mail, or mobile device. Return e-mail addresses are also used to respond to e-mails we receive from you. Except to comply with US laws, your e-mail address will not be shared with unrelated third parties for use in their direct marketing campaigns. To help safeguard QAonCloud and our Internet service providers from fraud, we may additionally use your IP address or unique device identification numbers.",
    "Additional uses of your non-personal and personal information enable us to customize products and services to your unique needs. We reserve the right to share aggregate data and non-personally identifiable information with third parties, and we may also utilize aggregated non-personal data to better our site.",
  ];
  return (
    <ListComponent
      header="Your Personal Information: How We Use and Disclose It"
      listItems={PersonalInformation}
    />
  );
}
