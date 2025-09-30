"use client";
import { useEffect } from "react";
import styles from "./YearTimeLine.module.css"; // ✅ scoped CSS
import AOS from "aos";
import "aos/dist/aos.css";

export default function YearTimeLine({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // how long the animation runs
      // whether animation happens only once
    });
  }, []);

  return (
    <div className={styles.timeline}>
      <div className={styles.timelineLine}></div>

      {data.map((entry, idx) => (
        <div key={idx} className={styles.timelineRow}>
          {entry.side === "left" && (
            <div
              className={`${styles.timelineCard} ${styles.left}`}
              data-aos="fade-right"
            >
              <div className={styles.connector}></div>
              <ul>
                {entry.items.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.timelineYear}>{entry.year}</div>

          {entry.side === "right" && (
            <div
              className={`${styles.timelineCard} ${styles.right}`}
              data-aos="fade-left"
            >
              <div className={styles.connector}></div>
              <ul>
                {entry.items.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
