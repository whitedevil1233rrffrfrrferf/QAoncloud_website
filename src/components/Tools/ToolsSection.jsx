import styles from "./ToolsSection.module.css";
export default function ToolsSection({ title, tools }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.toolsGrid}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.toolCard}>
            <img
              src={tool.logo}
              alt={tool.name || `Tool ${index}`}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
