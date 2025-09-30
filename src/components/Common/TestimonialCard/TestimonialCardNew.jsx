import styles from "./TestimonialCardNew.module.css";
import TestimonialCardVariant from "./TestimonialCardVariant";

export default function TestimonialCardNew() {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>What Our Clients Say</h2>
        <p className={styles.subtitle}>
          Hear directly from our clients about their experience with QAonCloud.
        </p>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.active}`}>
          Client Testimonial
        </button>
        <button className={styles.tab}>Video Testimonial</button>
      </div>

      {/* Client Testimonials */}
      <div className={styles.list}>
        <TestimonialCardVariant
          image="/images/kavitha.jpg"
          name="Kavitha Sivashankaran"
          role="Engineer: Quality and Regulatory Affairs"
          company="G3 MEDICAL SYSTEMS PVT LTD"
          testimonial="Throughout the project, they demonstrated professionalism, expertise, and effective communication from inquiry to closure. We rate the quality of their work 9 out of 10. The testing team showcased excellent technical skills and attention to detail, achieving thorough testing according to the plan. We appreciate the comprehensive project closure report. Overall, we highly recommend QAonCloud as a software testing company."
        />

        <TestimonialCardVariant
          image="/images/gautam.jpg"
          name="Gautam Chakravarthy"
          role="Engineering Manager"
          company="Tokopedia"
          testimonial="QAonCloud has helped us detect app crashes which were affecting our downloads significantly. They have now taken the responsibility of giving a QA clear to all our development sprints. We would like to expand the team further."
        />
      </div>
    </section>
  );
}
