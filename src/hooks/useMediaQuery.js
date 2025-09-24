// src/hooks/useMediaQuery.js
"use client";

import { useState, useEffect } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is defined (for SSR safety)
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches); // Set initial state

      const handler = (event) => setMatches(event.matches);
      mediaQuery.addEventListener('change', handler); // Listen for changes

      return () => {
        mediaQuery.removeEventListener('change', handler); // Clean up
      };
    }
  }, [query]);

  return matches;
}

export default useMediaQuery;