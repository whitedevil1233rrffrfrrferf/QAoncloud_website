import React from "react";
import ListComponent from "../Privacy-policy/ListComponent";

export default function Cookies() {
  const PersonalInformation = [
    "To enable QAonCloud to review visitors and pages that a user visits during each site session, they may use industry practices and methods such as cookies, clear GIFs, web beacons, IP addresses, log files and other tracking technology.",
    "You agree to use such web tracking technology and to all legal uses of personal and non-personal information obtained through tracking technology used by QAonCloud and third-party service providers.",
  ];
  return (
    <div>
      <ListComponent
        header="Use of “Cookies” and Tracking Technology"
        listItems={PersonalInformation}
      />
    </div>
  );
}
