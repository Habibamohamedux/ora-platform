import { useEffect, useState, useRef } from 'react';

function getLuminance(element) {
  // Walk up the DOM to find the first non-transparent background
  let el = element;
  while (el) {
    const bg = window.getComputedStyle(el).backgroundColor;
    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      const [, r, g, b] = match.map(Number);
      if (!(r === 0 && g === 0 && b === 0) || bg.includes('rgb(')) {
        // Perceived luminance formula
        return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      }
    }
    el = el.parentElement;
  }
  return 0; // default to dark
}

export function useBackgroundColor(ref) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    const update = () => {
      const luminance = getLuminance(ref.current.parentElement);
      setIsDark(luminance < 0.5);
    };

    update();

    const observer = new MutationObserver(update);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class', 'style'],
    });

    return () => observer.disconnect();
  }, [ref]);

  return isDark;
}