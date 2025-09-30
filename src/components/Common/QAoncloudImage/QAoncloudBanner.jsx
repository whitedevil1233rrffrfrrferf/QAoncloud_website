"use client";
import Image from "next/image";
import styles from "./QAoncloudBanner.module.css";

export default function QAoncloudBanner({
  title,
  subtitle,
  image,
  buttonText,
  buttonLink,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        {/* Image section */}
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={title}
              fill
              className={styles.image}
              priority
            />
          </div>
        </div>

        {/* Content section */}
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          {buttonText && buttonLink && (
            <a href={buttonLink} className={styles.button}>
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
