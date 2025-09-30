"use client";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Rajeshwari",
    role: "Team Lead",
    quote:
      "I never wanted to stay away from home and joining QAonCloud had fulfilled my dream to achieve my career goals while staying close to my family. I am blessed to be a part of QAonCloud that gave me an opportunity to improve my testing skills, communication skills, learn new tools, etc., I handled around 6 -7 projects to date and presently working on the Marketing Process.",
  },
  {
    name: "Gayathri P",
    role: "Senior Software Tester",
    quote:
      "I have around 5+ Years of experience and worked on multiple projects with QAonCloud. I am very happy to be a part of the QAonCloud family that has made a difference in my life professionally and financially. The work culture is very good here and the management is always helpful to us.",
  },
  {
    name: "Sasi Kumar",
    role: "Software Tester",
    quote:
      "I am a first-generation graduate from my family and completed my graduation only through scholarships. QAonCloud has given me a great opportunity to prove myself and I have learned a lot from my colleagues. I love the way the company recognizes its employee hard work through various awards and rewards.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What Our Employees Say</h2>
      <div className={styles.list}>
        {testimonials.map((t, idx) => (
          <blockquote key={idx} className={styles.quote}>
            <p>“{t.quote}”</p>
            <footer>
              — <span className={styles.name}>{t.name}</span>, {t.role}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
