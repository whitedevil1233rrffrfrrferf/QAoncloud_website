import React from "react";
import styles from "./ListComponent.module.css";

export default function ListComponent({ header, listItems = [] }) {
  return (
    <div className={styles.listContainer}>
      <h2 className={styles.listHeading}>{header}</h2>
      <ul className={styles.listItems}>
        {listItems.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
