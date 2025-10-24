import Link from "next/link";
import { exercises } from "@/data/exercises";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.exerciseDirectory}>
      <h1>Whimsical Animations Course Exercises</h1>
      <p className={styles.subtitle}>
        My journey through Josh W Comeau's animation course
      </p>

      <div className={styles.exerciseGrid}>
        {exercises.map((exercise) => (
          <Link
            key={exercise.id}
            href={`/exercises/${exercise.id}`}
            className={styles.exerciseCard}
          >
            <h2>{exercise.title}</h2>
            <p>{exercise.description}</p>
            <time>{new Date(exercise.date).toLocaleDateString()}</time>
          </Link>
        ))}
      </div>
    </main>
  );
}
