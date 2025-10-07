import React from "react";
import ListComponent from "../Privacy-policy/ListComponent";

export default function ThirdParty() {
  const PersonalInformation = [
    "QAonCloud.com makes every effort to be as precise as possible. QAonCloud however, makes no representations or warranties as to the accuracy, completeness, reliability, currentness, or error-free nature of service descriptions or other content on the sites.",
    "QAonCloud is not responsible for any content, advertising, goods, or other materials from such sites or resources.",
    "The sites are provided `as is`` and `as available` by QAonCloud, and you acknowledge that your use of the sites is entirely at your own risk.",
    "QAonCloud reserves the right, at their sole discretion, to correct any mistakes or omissions or change any portion of the site and remove or delete any content at any time and without notice.",
    "QAonCloud makes no warranty that the site will be free of viruses or other harmful components, that it will be available for use, that it will be uninterrupted or error-free, that defects will be corrected, or that the site, including any storage services or the service, will be free of viruses or other harmful components.",
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
