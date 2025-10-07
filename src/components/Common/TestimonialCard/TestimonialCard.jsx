import { FaPlay } from "react-icons/fa";
import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({ client }) {
  if (!client) return null;

  const { name, title, role, quote, videoId } = client;

  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>{name}</h2>

      <div>
        <span className={styles.blackquote}>❝</span>
        <span className={styles.quote}>{quote}</span>
        <span className={styles.blackquote}>❞</span>
      </div>

      <p className={styles.subtext}>
        <strong>{title}</strong>, {role}
      </p>

      {videoId && (
        <div className={styles.videoThumbnail}>
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={thumbnailUrl}
              alt={`${name} testimonial video`}
              className={styles.thumbnailImage}
            />
            <div className={styles.playButton}>
              <FaPlay className={styles.playIcon} />
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
