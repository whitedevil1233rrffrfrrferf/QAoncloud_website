import React from "react";
import ListComponent from "../Privacy-policy/ListComponent";

export default function Indemnification() {
  const PersonalInformation = [
    "You agree to hold QAonCloud harmless from and against any claims, liability, losses, actions, suits, costs, and expenses (including attorneys' fees) arising out of or incurred by any breach by you of these Terms of Use.",
    "QAonCloud reserves the right to assume the exclusive defence and control of any issue otherwise subject to your indemnification at its own expense.",
    "QAonCloud.com and its divisions have no obligation to repay, defend, indemnify, or hold you blameless for any loss, damage, or liability resulting from, relating to, or arising out of these Terms of Use or the sites.",
  ];
  return (
    <div>
      <ListComponent header="Indemnification" listItems={PersonalInformation} />
    </div>
  );
}
