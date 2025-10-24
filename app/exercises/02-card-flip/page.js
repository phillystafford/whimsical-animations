"use client";

import styles from "./styles.module.css";

export default function CardFlipExercise() {
  return (
    <div className={styles.container}>
      <h1>3D Card Flip Exercise</h1>
      <p>Replace this with your exercise code from Josh's course</p>

      {/* Example card - replace with actual exercise */}
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <h2>Front Side</h2>
          </div>
          <div className={styles.cardBack}>
            <h2>Back Side</h2>
          </div>
        </div>
      </div>

      <div className={styles.originalCode}>
        <h3>Original files from course:</h3>
        <p>Drop the HTML/CSS/JS files from Josh here for reference</p>
      </div>
    </div>
  );
}
