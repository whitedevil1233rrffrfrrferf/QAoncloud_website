"use client";
import styles from "./SectionHeader.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function SectionHeader({ heading, subheading }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const characters = subheading.split("");
  return (
    <div className={styles.textBlock} ref={ref}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.subheading}>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </p>
    </div>
  );
}
