import React from "react";
import ListComponent from "../Privacy-policy/ListComponent";
import styles from "./PermissibleUse.module.css";

export default function PermissibleUse() {
  const PersonalInformation = [
    "To delete, modify, hack, or attempt to change or alter any of the materials on the sites",
    "To solicit others to perform or participate in any unlawful acts",
    "To violate any international, federal, or state regulations, rules, laws, or local ordinances",
    "To infringe or violate our intellectual property rights or the intellectual property rights of others",
    "To harass, abuse, insult, or harm others",
    "To submit false or misleading information",
    "To upload or transmit viruses or any other type of malicious code",
    "To collect or track the personal information of others",
    "To spam, phish, pharm, pretext, spider, crawl, or scrape",
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Permissible Use</h2>
      <p className={styles.subtext}>
        You agree not to use the sites for any of the following purposes:
      </p>
      <ListComponent listItems={PersonalInformation} />
      <p className={styles.subtext}>
        If you violate any of the banned uses, we retain the right to
        discontinue your usage of our sites.
      </p>
      <p className={styles.subtext}>
        We may completely cooperate with any law enforcement agency or authority
        and any court order that requests or directs the identification of
        anybody suspected of using the services for criminal reasons..
      </p>
    </div>
  );
}
