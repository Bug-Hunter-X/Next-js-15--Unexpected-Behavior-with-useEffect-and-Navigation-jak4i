```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Simulate an API call that might take a while
    const controller = new AbortController(); // add abort controller
    const timeoutId = setTimeout(() => {
      setCount(1);
    }, 3000);

    return () => {
      clearTimeout(timeoutId); // cleanup function
      controller.abort(); // abort any ongoing calls
    };
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
    </div>
  );
}
```