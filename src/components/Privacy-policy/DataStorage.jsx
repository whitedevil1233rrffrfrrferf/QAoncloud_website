import React from "react";
import ListComponent from "./ListComponent";

export default function DataStorage() {
  const PersonalInformation = [
    "QAonCloud makes reasonable attempts to ensure that our Internet service providers have security measures to protect your personal information from unauthorized access and disclosure. Your personal information is only accessible by authorized workers and Internet service providers that execute legitimate business duties for QAonCloud. Despite our best efforts, there are inherent security vulnerabilities on the Internet. We urge you to be cautious about handling and disclosing your personal information and any login or password you must use to access our site's services.",
  ];
  return (
    <ListComponent
      header="Data Storage and Security"
      listItems={PersonalInformation}
    />
  );
}
