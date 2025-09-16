'use client';
import { useEffect } from 'react';
import styles from './qualitysoftware.module.css'; // ✅ correct import

export default function QualitySoftware() {
  useEffect(() => {
    const counters = document.querySelectorAll(`.${styles.count}`);
    const speed = 200;
    let animated = false;

    const animateCounters = () => {
      counters.forEach(counter => {
        const update = () => {
          const target = +counter.getAttribute('data-target');
          const current = +counter.innerText.replace(/[^\d]/g, '');
          const increment = target / speed;

          if (current < target) {
            counter.innerText = Math.ceil(current + increment).toLocaleString();
            requestAnimationFrame(update);
          } else {
            counter.innerText = target.toLocaleString() + '+';
          }
        };
        update();
      });
    };

    const handleScroll = () => {
      const banner = document.querySelector(`.${styles.heroBanner}`);
      const rect = banner?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight && !animated) {
        animateCounters();
        animated = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.heroBanner}>
      <h2 className={styles.mainHeading}>WE LOVE TO HELP CRAFT</h2>
      <h2 className={styles.subHeading}>QUALITY SOFTWARE</h2>

      <div className={styles.statsRow}>
        <Stat dataTarget="600" label="BUILD TESTED" text="Automated builds tested for quality assurance" styles={styles} />
        <Stat dataTarget="700" label="TESTCASES AUTOMATED" text="Comprehensive test suites running automatically" styles={styles} />
        <Stat dataTarget="800" label="CRASHES PREVENTED" text="Critical issues caught before production" styles={styles} />
        <Stat dataTarget="13000" label="BUGS UNCOVERED" text="Issues identified and resolved proactively" styles={styles} />
        <Stat dataTarget="27000" label="TESTCASE WRITTEN" text="Comprehensive test coverage for reliability" styles={styles} />
      </div>

      <p className={styles.commitment}>Our commitment to quality drives everything we do</p>
    </section>
  );
}

function Stat({ dataTarget, label, text, styles }) {
  return (
    <div className={styles.stat}>
      <div className={styles.dot}></div>
      <div className={styles.count} data-target={dataTarget}>0</div>
      <div className={styles.label}>{label}</div>
      <p>{text}</p>
    </div>
  );
}
