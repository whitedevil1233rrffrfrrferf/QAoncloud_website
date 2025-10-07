import QAoncloudBanner from "@/components/Common/QAoncloudImage/QAoncloudBanner";
import ContactForm from "@/components/Contact-us/ContactForm";
import ContactInfo from "@/components/Contact-us/ContactInfo";
import styles from "@/components/Contact-us/ContactSection.module.css";

export const metadata = {
  title: "Contact us | Software Testing Company | QAonCloud",
  description:
    "Contact QAonCloud today for top-notch QA solutions and expert support. Let's connect and drive your success!",
  keywords: ["contact us today"],
  authors: [{ name: "QAonCloud", url: "https://www.qaoncloud.com/" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.qaoncloud.com/contact-us",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "QAonCloud",
    title: "Contact us | Software Testing Company | QAonCloud",
    description:
      "Contact QAonCloud today for top-notch QA solutions and expert support. Let's connect and drive your success!",
    url: "https://www.qaoncloud.com/contact-us",
    images: [
      {
        url: "https://www.qaoncloud.com/public/assets/img/banners/contact-us-1.jpg",
        width: 1919,
        height: 1371,
        alt: "Contact us",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact us | Software Testing Company | QAonCloud",
    description:
      "Contact QAonCloud today for top-notch QA solutions and expert support. Let's connect and drive your success!",
    creator: "@QAonCloud",
    site: "@QAonCloud",
    images: [
      "https://www.qaoncloud.com/public/assets/img/banners/contact-us-1.jpg",
    ],
  },
};

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
