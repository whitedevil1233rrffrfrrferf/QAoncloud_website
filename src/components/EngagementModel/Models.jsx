"use client";
import { useState } from "react";
import SectionHeader from "../Common/SectionHeader/SectionHeader";
import styles from "./Models.module.css";
import Image from "next/image";
import { FaUserCog, FaUsers, FaClock } from "react-icons/fa";
import Card from "../Common/card/Card";

const tabs = [
  {
    key: "Fully Managed",
    title: "Fully Managed",
    icon: <FaUserCog size={40} />,
    image: "/images/engagement_model/Fully Managed.webp",
    content:
      "With the Fully-Managed option, we are your quality team. Your QAonCloud team consisting of the QA manager, QA architect, and QA testers, become part of your team and extends your product team remotely. Our QA manager and QA architect partner with you to design your test strategy and prepare the testing plan for your application, along with a plan for functional and non-functional testing requirements, automation testing, and regression testing involved for each cycle of release.",
  },
  {
    key: "Jointly Managed",
    title: "Jointly Managed",
    icon: <FaUsers size={40} />,
    image: "/images/engagement_model/Jointly Managed.webp",
    content:
      "With the Jointly-Managed option, the team at QAonCloud extends your in-house quality team. This is ideal when you have an in-house team of testers but are looking for opportunities to expand it further. With this option, you get fast and immediate onboarding of qualified and vetted testers to your team who stay with your team and, with time, become in-house experts on your application. With the QAonCloud team, you would never have to worry about the security of your code or the IP of your application.",
  },
  {
    key: "One-Time Engagement",
    title: "One-Time Engagement",
    image: "/images/engagement_model/One-Time Engagement.webp",
    icon: <FaClock size={40} />,
    content:
      "One time engagement model is effective when your requirements are not likely to change during the development process of your application. QAonCloud’s technical/domain expertise and strategic testing process provide high-quality testing services at your predictable budget.",
  },
];

export default function Models() {
  const [activeTab, setActiveTab] = useState("Fully Managed");
  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Engagement Models</h2>
        <p className={styles.subheading}>
          Our flexible testing models help you achieve the best outputs from our
          expert QA teams
        </p>
        <div className={styles.tabButtons}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.tabButton} ${
                activeTab === tab.key ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              <div className={styles.iconTitleWrapper}>
                {tab.icon}
                <span>{tab.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          {tabs.map(
            (tab) =>
              tab.key === activeTab && (
                <div key={tab.key} className={styles.contentBox}>
                  <div className={styles.left}>
                    <h3 className={styles.heading}>{tab.title}</h3>
                    <p className={styles.para}>{tab.content}</p>
                    <button className={styles.ctaButton}>
                      {tab.buttonText}
                    </button>
                  </div>
                  <div className={styles.right}>
                    <Image
                      src={tab.image}
                      alt={tab.title}
                      width={400} // ✅ control width
                      height={300} // ✅ control height
                      className={styles.image}
                      priority
                    />
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <div className={styles.cardSection}>
        <Card
          title="QA Manager"
          description="
          The QA manager joins your daily scrum calls and takes on the product roadmap, collects the application requirements, and passes them on to the testing team for test case writing and preparation. Your QA manager also communicates often with your product head to keep them abreast of progress and inform you of any issues discovered, which helps you meet the deadlines."
        />
        <Card
          title="QA Testers"
          description="
          The QA testers are your extended QA team who learn about your application and develop more product knowledge with every release cycle; They are dedicated to your team, so they stay with you for the account duration and soon become in-house experts on your application."
        />
        <Card
          title="QAoncloud Team"
          description="
          And with the QAonCloud team, you dont have to worry about the security or the IP of your application. All our vetted testers are vetted with background checks. They are our employees, so they provide significantly higher protection to your intellectual property than random crowdsourced testers."
        />
      </div>
    </div>
  );
}
