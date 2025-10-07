import React from "react";
import ListComponent from "./ListComponent";

export default function DataIntegrity() {
  const PersonalInformation = [
    "QAonCloud will only process personal information in compatible ways and relevant to the purposes for which it was obtained or authorised by you. QAonCloud will take reasonable steps to ensure that personal data is accurate, complete, current, and reliable for its intended use.",
  ];
  return (
    <ListComponent header="Data Integrity" listItems={PersonalInformation} />
  );
}
