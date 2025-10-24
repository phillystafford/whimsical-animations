"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { exercises } from "@/data/exercises";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();
  const currentExercise = exercises.find((ex) => pathname.includes(ex.id));

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.home}>
        ← All Exercises
      </Link>
      {currentExercise && (
        <span className={styles.current}>{currentExercise.title}</span>
      )}
    </nav>
  );
}
