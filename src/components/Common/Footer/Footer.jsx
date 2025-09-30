import FooterColumn from "./FooterColumn";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <FooterColumn
          heading="Company"
          links={[
            { label: "About Us", href: "about-us" },
            { label: "How it works", href: "how-we-work" },
            { label: "Why Us", href: "why-us" },
          ]}
        />
        <FooterColumn
          heading="Quick Links"
          links={[
            { label: "Engagement & Pricing", href: "engagement-model" },
            { label: "Careers", href: "careers" },
            { label: "Tools we use", href: "tools-we-use" },
          ]}
        />
        <FooterColumn
          heading="Support"
          links={[{ label: "Contact Us", href: "contact-us" }]}
        />
        <FooterColumn
          heading="Policies"
          links={[
            { label: "Privacy Policy", href: "about-us" },
            { label: "Terms & Condition", href: "about-us" },
          ]}
        />
      </div>
      <div className={styles.bottomText}>
        <p>@QAonCloud 2025. All Rights Reserved</p>
        <p>QAonCloud is a business unit of Desicrew Solutions Pvt.Ltd</p>
      </div>
    </footer>
  );
}
