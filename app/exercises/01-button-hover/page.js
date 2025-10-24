"use client";

import styles from "./styles.module.css";

export default function ButtonHoverExercise() {
  return (
    <div className={styles.container}>
      <h1>Button Hover Exercise</h1>
      <p>Replace this with your exercise code from Josh's course</p>

      {/* Example button - replace with actual exercise */}
      <button type="button" className={styles.whimsicalButton}>
        Hover me!
      </button>

      <div className={styles.originalCode}>
        <h3>Original files from course:</h3>
        <p>Drop the HTML/CSS/JS files from Josh here for reference</p>
      </div>
    </div>
  );
}
