import React from "react";
import ListComponent from "../Privacy-policy/ListComponent";

export default function Liability() {
  const PersonalInformation = [
    "You acknowledge that your use of the sites and any information supplied or received in connection with them may be insecure and intercepted by third parties.",
    "In no event will QAonCloud be liable for any damages arising out of or in any way connected with the use of the sites or for any information, software, or services obtained through the sites.",
    "This waiver covers any damages or injuries caused by any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, file corruption, communication-line failure, network or system outage, unauthorised access to, alteration of, or use of any record.",
    "You acknowledge and accept that QAonCloud is not responsible for any defamatory, offensive, or unlawful activity by any user of the sites.",
    "To the fullest extent permitted by law, the restrictions mentioned above and exclusions shall apply to you in any proceedings of any type.",
  ];
  return (
    <div>
      <ListComponent
        header="Limitation of Liability"
        listItems={PersonalInformation}
      />
    </div>
  );
}
