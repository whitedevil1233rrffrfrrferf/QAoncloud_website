"use client";
import Image from "next/image";
import styles from "./CaseStudyRow.module.css";

export default function CaseStudyRow({
  logo,
  alt,
  description,
  category,
  categoryLink,
  buttonText,
  buttonLink,
}) {
  return (
    <div className={styles.row}>
      <div className={styles.logo}>
        <Image src={logo} alt={alt} width={160} height={80} />
      </div>

      <div className={styles.content}>
        <p>{description}</p>
        <a href={categoryLink} className={styles.category}>
          — {category}
        </a>
      </div>

      <div className={styles.cta}>
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          {buttonText} ⬇
        </a>
      </div>
    </div>
  );
}
