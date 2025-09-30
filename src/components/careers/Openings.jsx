"use client";
import styles from "./Openings.module.css";

const openings = [
  {
    title: "QA Delivery Manager",
    desc: "We are seeking a seasoned delivery manager with a proven track record in the field.",
    link: "#",
  },
  {
    title: "QA Architect",
    desc: "We are seeking a highly skilled QA Architect to join our dynamic team.",
    link: "#",
  },
  {
    title: "QA Specialist - Performance Tester Engineer",
    desc: "Are you passionate about ensuring the optimal performance of software applications? We are seeking a highly skilled QA Specialist.",
    link: "#",
  },
];
export default function Openings() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Current Openings</h2>
      <div className={styles.grid}>
        {openings.map((job, idx) => (
          <div key={idx} className={styles.card}>
            <h3 className={styles.title}>{job.title}</h3>
            <p className={styles.desc}>{job.desc}</p>
            <a href={job.link} className={styles.link}>
              More Details <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
