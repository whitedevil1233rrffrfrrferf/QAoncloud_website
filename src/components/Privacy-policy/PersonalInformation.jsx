import React from "react";
import ListComponent from "./ListComponent";

export default function PersonalInformation() {
  const PersonalInformation = [
    "QAonCloud may gather information about you, your computer access points, mobile devices, and the web browser to connect to our site through various technologies. We may use cookies to customize the experience on our site. You do not have to accept our cookies; you can change your browser to block or delete them. Some portions of our Sites may take longer to load or only function properly if you accept or delete them.",
    "Cookies may be served under the rules of some countries if individuals have given their consent after receiving clear and thorough information, particularly about the reasons for which their data will be processed. You can provide effective consent by utilizing your browser settings. You should check your browser settings before using the QAonCloud site to confirm that the settings reflect your approval.",
    "Each time you visit our site, QAonCloud may gather extra information from your web browsers, such as the pages you visit, time spent on each page or part of the site, and promotions or advertising you click on. Your Internet Protocol (IP) address, the type of browser you used to access our sites, and the time and the address of the referring website may all be included in this information.",
    "Our Internet service providers may use other conventional web-based technologies to evaluate your movements while visiting our site. These technologies assist us in determining the efficacy of product and service campaigns and marketing programs, allowing us to modify and optimize the services available on or via our site.",
    "You can opt to share your personal information with a non-connected third party for purposes other than QAonCloud-related communications, business, or services.",
    "QAonCloud would treat sensitive personal data obtained from a person carefully and securely.",
  ];
  return (
    <ListComponent
      header="How QAonCloud Collects Personal Information"
      listItems={PersonalInformation}
    />
  );
}
