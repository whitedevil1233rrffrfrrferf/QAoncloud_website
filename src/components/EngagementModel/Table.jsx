"use client";
import styles from "./ComparisonTable.module.css";

export default function Table() {
  const headers = ["Fully Managed", "Jointly Managed", "One-Time Engagement"];

  const rows = [
    {
      label: "You dont have a QA team of your own",
      values: [true, false, true],
    },
    {
      label:
        "Your solution needs repeated testing as you make continuous enhancements",
      values: [true, false, false],
    },
    {
      label: "You have an in-house testing team",
      values: [false, true, false],
    },
    {
      label: "Dedicated QA Manager",
      values: [true, true, true],
    },
    {
      label: "Dedicated QA Architect",
      values: [true, true, true],
    },
    {
      label: "QA Consulting",
      values: [true, false, false],
    },
    {
      label: "QA Strategy",
      values: [true, false, false],
    },
    {
      label: "QA Execution",
      values: [true, true, true],
    },
    {
      label: "Daily calls with QAonCloud team",
      values: [true, true, true],
    },
    {
      label: "Daily reporting",
      values: [true, true, true],
    },
    {
      label: "Monthly high level report to the management",
      values: [true, true, false],
    },
    {
      label: "Final report to the management",
      values: [false, false, true],
    },
    {
      label: "Monthly call with management",
      values: [true, true, false],
    },
  ];

  return (
    <div>
      <h2 className={styles.heading}>
        You can engage us in one of the following testing models based{" "}
      </h2>
      <h2 className={styles.heading}>on your application and team needs</h2>
      <div className={styles.tableWrapper}>
        <div className={styles.headerRow}>
          {headers.map((head, idx) => (
            <div key={idx} className={styles.headerCell}>
              {head}
            </div>
          ))}
        </div>

        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className={styles.row}>
            <div className={styles.valuesRow}>
              {row.values.map((val, colIdx) => (
                <div key={colIdx} className={val ? styles.check : styles.cross}>
                  {val ? "✓" : "✕"}
                </div>
              ))}
            </div>
            <div className={styles.label}>{row.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
