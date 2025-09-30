import Image from "next/image";
import styles from "./TestimonialCardVariant.module.css";

export default function TestimonialCardVariant({
  image,
  name,
  role,
  company,
  testimonial,
}) {
  return (
    <div className={styles.card}>
      {/* Client Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className={styles.image}
        />
      </div>

      {/* Client Details */}
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>
          {role}
          {company && <span className={styles.company}>, {company}</span>}
        </p>
        <p className={styles.text}>{testimonial}</p>
      </div>
    </div>
  );
}
