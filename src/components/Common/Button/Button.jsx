import Link from "next/link";
import styles from "./Button.module.css";
export default function Button({ content, bgColor, textColor }) {
  return (
    <Link
      href="/contact-us"
      className={styles.button}
      style={{
        backgroundColor: bgColor || "#2f8fff", // default fallback
        color: textColor || "#fff",
      }}
    >
      {content}
    </Link>
  );
}
