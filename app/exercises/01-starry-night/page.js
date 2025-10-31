"use client";

import { random, range } from 'lodash';
import { useRef } from 'react';
import styles from './styles.module.css';

// Josh's course link:
// https://courses.joshwcomeau.com/wham/01-particles/01.02-initial-exercises

export default function StarryNightExercise() {
  const containerRef = useRef(null);

  const handleAddStars = () => {
    // TODO: Generate stars on click!
    // Here's the emoji to use: ⭐
    const container = containerRef.current;
    
    // Josh's pattern: loop to create multiple stars
    for (let i = 0; i < 10; i++) {
      // Create star element
      const star = document.createElement('div');
      star.classList.add(styles.star);
      star.innerText = '⭐';
      
      // Add to DOM
      container.appendChild(star);
      
      console.log('index = ', i);
    }
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
      <div ref={containerRef} className={styles.starContainer} />
      
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

