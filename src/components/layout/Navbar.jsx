import React, { useEffect, useRef, useState } from 'react';
import Logo from '../common/Logo';
import NavActions from '../common/NavActions';
import './Navbar.css';

const LIGHT_NAV_COLOR = '#ffffff';
const DARK_NAV_COLOR = '#67667C';

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

const getRelativeLuminance = ({ r, g, b }) => {
  const [sr, sg, sb] = [r, g, b].map(value => {
    const channel = value / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * sr + 0.7152 * sg + 0.0722 * sb;
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

const isLightNavSurface = ({ r, g, b }) => {
  const luminance = getRelativeLuminance({ r, g, b });
  const isNearWhite = luminance > 0.76;
  const isLightPink = r > 205 && g > 145 && b > 160 && r >= g && b >= g - 18 && luminance > 0.48;

  return isNearWhite || isLightPink;
};

const getNavbarColor = (navbarElement) => {
  if (!navbarElement) return LIGHT_NAV_COLOR;

  const rect = navbarElement.getBoundingClientRect();
  const x = Math.min(window.innerWidth - 1, Math.max(0, rect.left + rect.width / 2));
  const y = Math.min(window.innerHeight - 1, Math.max(0, rect.top + rect.height / 2));
  const target = document
    .elementsFromPoint(x, y)
    .find(node => node instanceof Element && !navbarElement.contains(node));

  const backgroundColor = findBackgroundColor(target || document.body);
  return isLightNavSurface(backgroundColor) ? DARK_NAV_COLOR : LIGHT_NAV_COLOR;
};

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navColor, setNavColor] = useState(LIGHT_NAV_COLOR);

  useEffect(() => {
    if (isMenuOpen) return undefined;

    let frameId = 0;

    const updateNavColors = () => {
      frameId = 0;

      const nextColor = getNavbarColor(navbarRef.current);
      setNavColor(current => (current === nextColor ? current : nextColor));
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateNavColors);
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navbarRef}
      className={`navbar${isMenuOpen ? ' navbar--menu-open' : ''}`}
      style={{
        '--navbar-color': navColor,
      }}
    >
      <div className="navbar-inner">
        <div className="navbar-logo-slot">
          <Logo name="ORA" />
        </div>
        <div className="navbar-actions-slot">
          <NavActions onMenuChange={setIsMenuOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
