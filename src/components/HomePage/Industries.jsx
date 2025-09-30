"use client";
import { useState } from "react";
import styles from "./industries.module.css";
import Image from "next/image";

const tabs = [
  {
    key: "banking",
    title: "Banking & Financial Services",
    icon: "fas fa-money-check-alt",
    image: "/images/Industries/Banking and FinTech.webp",
    content:
      "QAonCloud helps Fintech businesses with value-added QA testing services across customer channels like payments, digital channels, credit services, digital core, and commercial and corporate banking. We have helped 60% of functional defects with 93% accepted bugs for our clients.",
  },
  {
    key: "communications",
    title: "Communications",
    icon: "fas fa-broadcast-tower",
    image: "/images/Industries/Telecomunication.webp",
    content:
      "QA Experts at QAonCloud offer high-quality testing services for numerous integrations across various platforms, intricate billing systems, reliability, interoperability and revenue assurance. Our expert teams have helped identify 20% of bugs within 24 weeks to guarantee quick launches and better end-user satisfaction.",
  },
  {
    key: "ecommerce",
    title: "E-Commerce",
    image: "/images/Industries/Ecommerce.webp",
    icon: "fas fa-shopping-cart",
    content:
      "QAonCloud software testing services help businesses deliver a seamless shopping experience on eCommerce platforms with intuitive and user-friendly interfaces and highly secure applications. We have delivered a 21% reduction in crashes with 95% accepted bugs using robust QA tools and expertise.",
  },
];

export default function Industries() {
  const [activeTab, setActiveTab] = useState("banking");

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>INDUSTRIES SERVED</h2>

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
              <i aria-hidden="true" className={tab.icon}></i>
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
                  <button className={styles.ctaButton}>{tab.buttonText}</button>
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
  );
}
