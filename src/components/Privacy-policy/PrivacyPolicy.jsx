"use client";
import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <section className={styles.privacy}>
      <div className={styles.container}>
        <p>
          QAonCloud has created this Privacy Policy to ensure your online
          privacy. The following points list the information we gather and other
          dissemination practices for the QAonCloud Website. Any external links
          accessed from the QAonCloud website have different privacy policies
          than those listed here, and we request that you refer to them when you
          access the external links.
        </p>

        <ul className={styles.list}>
          <li>
            <span href="#" className={styles.link}>
              Personal Information Collection
            </span>{" "}
            – Personal Information like name, telephone number, e-mail address,
            date of birth, home or business, and mailing address may be
            collected by QAonCloud when accessing some areas on the website or
            while signing any registration forms to access certain services or
            to gain information regarding the same.
          </li>

          <li>
            <span href="#" className={styles.link}>
              Device Information
            </span>{" "}
            – Device Information like model name, operating system, unique
            device identifiers, and mobile network information may be collected
            by QAonCloud when using our services through custom applications.
            This data is stored in server logs that third-party service
            providers or we maintain. We may also use the device IP address or
            MAC Address to record device-event data like crashes, system
            activity, hardware settings, browser type, browser language, the
            date and time of your request, and referral URL.
          </li>

          <li>
            <span href="#" className={styles.link}>
              Specialised Information
            </span>{" "}
            – QAonCloud collects and stores data on local device data using
            browser web storage and application data caches. QAonCloud may also
            gather information that cannot be used to identify you at other
            times. Aggregated Data will not include any information that can be
            traced back to you.
          </li>
        </ul>
      </div>
    </section>
  );
}
