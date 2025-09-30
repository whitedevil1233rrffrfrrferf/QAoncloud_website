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
              <span className={styles.navLink}>
                Services <span className={styles.dropdownIcon}>▲</span>
              </span>
              <div className={styles.dropdownMenu}>
                <div className={styles.serviceList}>
                  <ul>
                    <li>
                      <Link
                        href="/security-testing-services"
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
                        href="/functional-testing-services"
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
                        href="/automation-testing-services"
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
                      <Link
                        href="/regression-testing-services"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/services/automated-process.png"
                          className={styles.menuIcon}
                        />
                        Regression Testing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/api-testing-services"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/services/api.png"
                          className={styles.menuIcon}
                        />
                        API Testing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/agile-testing-services"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/services/agile.png"
                          className={styles.menuIcon}
                        />
                        Agile Testing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className={styles.dropdown}>
              <span className={styles.navLink}>
                Solutions <span className={styles.dropdownIcon}>▲</span>
              </span>
              <div className={styles.dropdownMenu}>
                <div className={styles.serviceList}>
                  <ul>
                    <li>
                      <Link
                        href="/mobile-app-testing-services"
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
                      <Link
                        href="/web-app-testing-services"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/solution/feature.png"
                          className={styles.menuIcon}
                        />
                        Web App Testing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/game-testing-services"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/solution/testing.png"
                          className={styles.menuIcon}
                        />
                        Game Testing
                      </Link>
                    </li>
                  </ul>
                  <ul className={styles.menuBorder}>
                    <li>
                      <Link
                        href="/cross-platform-testing-services"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/solution/responsive-devices.png"
                          className={styles.menuIcon}
                        />
                        Cross-Platform Testing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/cross-browser-testing-services"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/solution/web-browser.png"
                          className={styles.menuIcon}
                        />
                        Cross-Browser Testing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/smart-tv-app-testing-services"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/solution/smart-tv.png"
                          className={styles.menuIcon}
                        />
                        Smart TV Testing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.dropdown}>
              <span className={styles.navLink}>
                Industries <span className={styles.dropdownIcon}>▲</span>
              </span>
              <div className={styles.dropdownMenu}>
                <div className={styles.serviceList}>
                  <ul>
                    <li>
                      <Link
                        href="/FinTechTestingServices"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/indus/fintech.png"
                          className={styles.menuIcon}
                        />
                        Banking & Financial Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/CommunicationsTestingServices"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/indus/tower.png"
                          className={styles.menuIcon}
                        />
                        Communications
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/EventManagementTestingServices"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/indus/calendar.png"
                          className={styles.menuIcon}
                        />
                        Event Management
                      </Link>
                    </li>
                  </ul>
                  <ul className={styles.menuBorder}>
                    <li>
                      <Link href="/ECommerce" className={styles.dropdownItem}>
                        <img
                          src="/images/Nav/indus/ecommerce.png"
                          className={styles.menuIcon}
                        />
                        E-commerce
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/AITestingServices"
                        className={styles.dropdownItem}
                      >
                        <img
                          src="/images/Nav/indus/artificial-intelligence.png"
                          className={styles.menuIcon}
                        />
                        Artificial Intelligence
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.dropdown}>
              <span className={styles.navLink}>
                Insights <span className={styles.dropdownIcon}>▲</span>
              </span>
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
                      <Link href="/case-study" className={styles.dropdownItem}>
                        <img
                          src="/images/Nav/insi/case.png"
                          className={styles.menuIcon}
                        />
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <a href="/FAQ" className={styles.dropdownItem}>
                        <img
                          src="/menu-icons/solution/testing.png"
                          className={styles.menuIcon}
                        />
                        FAQS
                      </a>
                    </li>
                    <li>
                      <Link href="/testimonial" className={styles.dropdownItem}>
                        <img
                          src="/images/Nav/insi/team.png"
                          className={styles.menuIcon}
                        />
                        Testimonials
                      </Link>
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
