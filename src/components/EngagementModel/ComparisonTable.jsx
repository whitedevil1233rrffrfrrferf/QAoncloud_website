"use client";
import styles from "./ComparisonTable.module.css";

export default function ComparisonTable({ headers, rows }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            {headers.map((head, idx) => (
              <th key={idx}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              <td>{row.label}</td>
              {row.values.map((val, colIdx) => (
                <td key={colIdx} className={val ? styles.check : styles.cross}>
                  <span>{val ? "✓" : "✕"}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
