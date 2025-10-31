# Josh's Course Files → Next.js Translation Guide

When Josh gives you exercise files, here's how to translate them into this Next.js repo:

## File Mapping

| Josh's File | Your File | What It Becomes |
|-------------|-----------|-----------------|
| `index.html` | `page.js` | React component JSX |
| `styles.css` | `styles.module.css` | Scoped CSS modules |
| `index.js` | Inside `page.js` | Event handlers, useEffect, etc. |

## Translation Steps

### 1. Create Exercise Directory

```bash
mkdir -p app/exercises/[exercise-name]
```

### 2. Translate HTML → JSX (page.js)

**Josh's HTML:**

```html
<style>
  /* inline styles */
</style>
<button class="particleButton">Add Stars</button>
```

**Your JSX:**

```jsx
"use client";

import styles from './styles.module.css';

export default function ExerciseName() {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.particleButton}>
        Add Stars
      </button>
    </div>
  );
}
```

### 3. Translate CSS → CSS Modules (styles.module.css)

**Josh's CSS:**

```css
.particleButton {
  /* styles */
}
```

**Your CSS Module:**

```css
/* Same CSS, but referenced as styles.particleButton in JSX */
.particleButton {
  /* styles */
}
```

### 4. Translate JavaScript → React (page.js)

**Josh's JS:**

```js
const btn = document.querySelector('.particleButton');
btn.addEventListener('click', () => {
  // do stuff
});
```

**Your React:**

```jsx
export default function ExerciseName() {
  const handleClick = () => {
    // do stuff
  };

  return (
    <button onClick={handleClick}>...</button>
  );
}
```

## Common Patterns

### DOM Manipulation

When Josh uses `document.querySelector` or needs to manipulate DOM elements:

```jsx
import { useRef } from 'react';

export default function Exercise() {
  const containerRef = useRef(null);

  const handleClick = () => {
    // Access DOM: containerRef.current
    const element = document.createElement('div');
    containerRef.current.appendChild(element);
  };

  return (
    <div ref={containerRef}>
      {/* container */}
    </div>
  );
}
```

### Lodash Utilities

Josh uses lodash - it's already installed:

```jsx
import { random, range } from 'lodash';

// random(min, max) - returns random number
// range(count) - returns array [0, 1, 2, ..., count-1]
```

### Body/HTML Styles

Josh often styles the `body` or `html` element. In Next.js:

```css
/* styles.module.css */
.body {
  /* Josh's body styles go here */
  min-height: 100vh;
  /* ... */
}
```

```jsx
// page.js
<div className={styles.body}>
  {/* content */}
</div>
```

## Adding New Exercise to Navigation

Edit `/data/exercises.js`:

```js
{
  id: "exercise-name", // must match directory name
  title: "Exercise Title",
  description: "Brief description",
  date: "2024-10-31",
}
```

## Tips

- Always add `"use client";` at the top of `page.js` (needed for interactivity)
- Josh's `reset.css` is already handled by Next.js globals
- Keep Josh's comments in your code - they're helpful!
- Test in the browser at `http://localhost:3000/exercises/[exercise-name]`
