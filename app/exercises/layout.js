import styles from "./layout.module.css";

export default function ExerciseLayout({ children }) {
  return <div className={styles.exerciseContainer}>{children}</div>;
}
