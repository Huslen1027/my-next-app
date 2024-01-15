import React from "react";
import styles from "@/styles/components/Mytext.module.css";

export function Mytext() {
  return (
    <label htmlFor="">
      <p className={styles.text}>kof</p>
      <input type="text" className={styles.input} />
    </label>
  );
}
