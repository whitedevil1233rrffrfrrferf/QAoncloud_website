"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link className={styles.logo} href="/">
          <img src="/images/logos/QAonCloud logo.png" alt="QAonCloud" />
        </Link>

        {/* Burger Icon */}
        <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Nav Links */}
        <div className={`${styles.navMenu} ${isOpen ? styles.showMenu : ""}`}>
          <ul className={styles.navLinks}>
            <li className={styles.dropdown}>
              <span className={styles.navLink}>Services</span>
              <div className={styles.dropdownMenu}>
                <div className={styles.serviceList}>
                  <ul>
                    <li>
                      <Link
                        href="/Security_testing"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/services/padlock.png"
                          className={styles.menuIcon}
                        />
                        Security Testing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Functional_testing"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/services/fun.png"
                          className={styles.menuIcon}
                        />
                        Functional Testing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Automation_testing"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/services/auto.png"
                          className={styles.menuIcon}
                        />
                        Automation Testing
                      </Link>
                    </li>
                  </ul>
                  <ul className={styles.menuBorder}>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/responsive-devices.png"
                          className={styles.menuIcon}
                        />
                        Regression Testing
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/web-browser.png"
                          className={styles.menuIcon}
                        />
                        API Testing
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/smart-tv.png"
                          className={styles.menuIcon}
                        />
                        Agile Testing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className={styles.dropdown}>
              <span className={styles.navLink}>Solutions</span>
              <div className={styles.dropdownMenu}>
                <div className={styles.serviceList}>
                  <ul>
                    <li>
                      <Link
                        href="/Mobile_testing"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/solution/app-development.png"
                          className={styles.menuIcon}
                        />
                        Mobile Testing
                      </Link>
                    </li>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/feature.png"
                          className={styles.menuIcon}
                        />
                        Web App Testing
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/testing.png"
                          className={styles.menuIcon}
                        />
                        Game Testing
                      </a>
                    </li>
                  </ul>
                  <ul className={styles.menuBorder}>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/responsive-devices.png"
                          className={styles.menuIcon}
                        />
                        Cross-Platform Testing
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/web-browser.png"
                          className={styles.menuIcon}
                        />
                        Cross-Browser Testing
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/smart-tv.png"
                          className={styles.menuIcon}
                        />
                        Smart TV Testing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.dropdown}>
              <span className={styles.navLink}>Industries</span>
              <div className={styles.dropdownMenu}>
                <div className={styles.serviceList}>
                  <ul>
                    <li>
                      <Link href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/app-development.png"
                          className={styles.menuIcon}
                        />
                        Banking & Financial Services
                      </Link>
                    </li>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/feature.png"
                          className={styles.menuIcon}
                        />
                        Communications
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/testing.png"
                          className={styles.menuIcon}
                        />
                        Event Management
                      </a>
                    </li>
                  </ul>
                  <ul className={styles.menuBorder}>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/responsive-devices.png"
                          className={styles.menuIcon}
                        />
                        E-commerce
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/web-browser.png"
                          className={styles.menuIcon}
                        />
                        Artificial Intelligence
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.dropdown}>
              <span className={styles.navLink}>Insights</span>
              <div className={styles.dropdownMenu}>
                <div className={styles.serviceList}>
                  <ul>
                    <li>
                      <Link href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/app-development.png"
                          className={styles.menuIcon}
                        />
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/feature.png"
                          className={styles.menuIcon}
                        />
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/testing.png"
                          className={styles.menuIcon}
                        />
                        FAQS
                      </a>
                    </li>
                    <li>
                      <a href="#" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/responsive-devices.png"
                          className={styles.menuIcon}
                        />
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>

          <a href="#" className={styles.cta}>
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
