import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const parseRgb = (value) => {
  const match = value?.match(/rgba?\(([^)]+)\)/);
  if (!match) return null;

  const [r, g, b, alpha = '1'] = match[1]
    .split(',')
    .map(part => part.trim());

  return {
    r: Number(r),
    g: Number(g),
    b: Number(b),
    a: Number(alpha),
  };
};

const getAverageGradientColor = (backgroundImage) => {
  const matches = backgroundImage?.match(/rgba?\([^)]+\)/g);
  if (!matches?.length) return null;

  const colors = matches
    .map(parseRgb)
    .filter(color => color && color.a > 0.2);

  if (!colors.length) return null;

  return colors.reduce(
    (average, color) => ({
      r: average.r + color.r / colors.length,
      g: average.g + color.g / colors.length,
      b: average.b + color.b / colors.length,
      a: 1,
    }),
    { r: 0, g: 0, b: 0, a: 1 }
  );
};

const getRelativeLuminance = ({ r, g, b }) => {
  const [sr, sg, sb] = [r, g, b].map(value => {
    const channel = value / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * sr + 0.7152 * sg + 0.0722 * sb;
};

const findBackgroundColor = (element) => {
  let current = element;

  while (current && current !== document.documentElement) {
    const styles = window.getComputedStyle(current);
    const color = parseRgb(styles.backgroundColor);
    if (color && color.a > 0.2) return color;

    const gradientColor = getAverageGradientColor(styles.backgroundImage);
    if (gradientColor) return gradientColor;

    current = current.parentElement;
  }

  const bodyColor = parseRgb(window.getComputedStyle(document.body).backgroundColor);
  if (bodyColor && bodyColor.a > 0.2) return bodyColor;

  const pageColor = parseRgb(window.getComputedStyle(document.documentElement).backgroundColor);
  if (pageColor && pageColor.a > 0.2) return pageColor;

  return { r: 255, g: 255, b: 255, a: 1 };
};

const getCursorTone = (x, y) => {
  const target = document
    .elementsFromPoint(x, y)
    .find(node => node instanceof Element && !node.closest('.cursor-wrapper'));

  const background = findBackgroundColor(target || document.body);
  const luminance = getRelativeLuminance(background);
  const isSaturatedPink =
    background.r > 165 &&
    background.g < 145 &&
    background.b < 175 &&
    background.r > background.g;

  return luminance > 0.68 && !isSaturatedPink ? 'dark' : 'light';
};

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorTone, setCursorTone] = useState('light');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotX = useSpring(mouseX, { stiffness: 1500, damping: 100 });
  const dotY = useSpring(mouseY, { stiffness: 1500, damping: 100 });
  const circleX = useSpring(mouseX, { stiffness: 350, damping: 40, mass: 0.6 });
  const circleY = useSpring(mouseY, { stiffness: 350, damping: 40, mass: 0.6 });

  useEffect(() => {
    let frameId = 0;
    let lastPoint = { x: 0, y: 0 };

    const updateTone = () => {
      frameId = 0;
      const nextTone = getCursorTone(lastPoint.x, lastPoint.y);
      setCursorTone(current => (current === nextTone ? current : nextTone));
    };

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      lastPoint = { x: e.clientX, y: e.clientY };
      if (!frameId) frameId = window.requestAnimationFrame(updateTone);
    };

    const handleMouseOver = (e) => {
      setIsHovering(Boolean(e.target.closest('a, button, .hover-target, input')));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className={`cursor-wrapper cursor-wrapper--${cursorTone}`}>
      <motion.div
        className={`cursor-outline ${isHovering ? 'hovered' : ''}`}
        style={{
          x: circleX,
          y: circleY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className={`cursor-dot ${isHovering ? 'animating' : ''}`}
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
};

export default CustomCursor;
