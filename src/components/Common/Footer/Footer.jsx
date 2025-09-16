import FooterColumn from "./FooterColumn";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <FooterColumn
          heading="Company"
          links={[
            { label: "About Us" },
            { label: "How it works" },
            { label: "Why Us" },
          ]}
        />
        <FooterColumn
          heading="Quick Links"
          links={[
            { label: "Engagement & Pricing" },
            { label: "Careers" },
            { label: "Tools we use" },
          ]}
        />
        <FooterColumn heading="Support" links={[{ label: "Contact Us" }]} />
        <FooterColumn
          heading="Policies"
          links={[{ label: "Privacy Policy" }, { label: "Terms & Condition" }]}
        />
      </div>
      <div className={styles.bottomText}>
        <p>@QAonCloud 2025. All Rights Reserved</p>
        <p>QAonCloud is a business unit of Desicrew Solutions Pvt.Ltd</p>
      </div>
    </footer>
  );
}
