import React from "react";
import ListComponent from "./ListComponent";

export default function GenInformation() {
  const PersonalInformation = [
    "This privacy policy may be updated by QAonCloud periodically, and you should review it each time you visit one of our Sites. QAonCloud is dedicated to safeguarding your personal information. Please get in touch with us if you have any questions or complaints concerning our efforts to protect your privacy or if you require additional information about the QAonCloud privacy policy.",
  ];
  return (
    <ListComponent
      header="General Information and Privacy Support Contact"
      listItems={PersonalInformation}
    />
  );
}
