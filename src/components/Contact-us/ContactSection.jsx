import styles from "./ContactSection.module.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
