import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactForm from "@/components/Contact-us/ContactForm";
import ContactInfo from "@/components/Contact-us/ContactInfo";
import styles from "@/components/Contact-us/ContactSection.module.css";

export default function ContactUs() {
  return (
    <div>
      <QAoncloudBanner
        title="Get In Touch With Us Today!"
        image="/images/banners/contact-us.webp"
        buttonText="Talk To Our Experts"
        buttonLink="/contact"
      />
      <section className={styles.section}>
        <div className={styles.container}>
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
