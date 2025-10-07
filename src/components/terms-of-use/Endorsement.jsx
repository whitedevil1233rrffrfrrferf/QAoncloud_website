import React from "react";
import ListComponent from "../Privacy-policy/ListComponent";

export default function Endorsement() {
  const PersonalInformation = [
    "Third-party websites, resources, and advertisements (collectively, third-party sites) may be linked to or referenced on the sites. It is entirely your own responsibility to link to such third-party websites.",
    "Under no circumstances will QAonCloud be held liable, directly or indirectly, for any loss, injury, or damage you may suffer as a result of your use of, or reliance on, any content, information, data, opinions, advice, statements, goods, services, or products offered on such third-party sites.",
    "Any issues should be directed to the administrator or webmaster of the third-party site in question.",
  ];
  return (
    <div>
      <ListComponent
        header="No Endorsement of Third-party Sites"
        listItems={PersonalInformation}
      />
    </div>
  );
}
