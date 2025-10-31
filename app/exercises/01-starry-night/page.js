'use client';

import { random, range } from 'lodash';
import { useRef } from 'react';
import styles from './styles.module.css';

/**
 * Exercise: Starry Night https://courses.joshwcomeau.com/wham/01-particles/01.02-initial-exercises
 *
 * Acceptance Criteria:
 *
 * - Whenever the user clicks the button, 10 new stars should be added to the page. Each star should us the star ("⭐")
 *   emoji, and be positioned randomly in the viewport.
 * - The stars should fade in.
 * - The stars should not be clickable or selectable.
 * - If the content overflows, we want to hide it so that we don’t wind up with a horizontal scrollbar.
 */

export default function StarryNightExercise() {
  const containerRef = useRef(null);

  const handleAddStars = () => {
    // TODO: Generate stars on click!
    // Here's the emoji to use: ⭐
    const container = containerRef.current;

    // Josh's pattern: loop to create multiple stars
    range(10).forEach(i => {
      // Create star element
      const star = document.createElement('div');
      star.classList.add(styles.star);
      star.innerText = '⭐';

      star.style.top = random(5, 95) + '%';
      star.style.left = random(5, 95) + '%';
      star.style.setProperty('--twinkle-duration', random(5.0, 10.0) + 's');
      /** True tells lodash's random function to return floats instead of integers */
      star.style.setProperty('--twinkle-opacity', random(0, 0.5, true));

      // Add to DOM
      container.appendChild(star);

      console.log('index = ', i);
    });
  };

  /*
    DOM manipulation in React:
    
    - Use useRef to get container: `const ref = useRef(null);`
    - Access DOM element: `ref.current`
    - Create new elements: `document.createElement('tagName');`
    - Add a CSS class: `element.classList.add(styles.className);`
    - Add the element to the DOM: `parentNode.appendChild(childNode);`
    - Add text to a node: `element.innerText = "Stuff";`
  */

  return (
    <div className={styles.body}>
      {/* Container for stars to be added dynamically */}
      <div
        ref={containerRef}
        className={styles.starContainer}
      />

      <button
        type="button"
        className={styles.particleButton}
        onClick={handleAddStars}
      >
        Add Stars
      </button>
    </div>
  );
}
