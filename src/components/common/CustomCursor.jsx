import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
const [isHovering, setIsHovering] = useState(false);

const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

// Fast, no-lag springs for the dot
const dotX = useSpring(mouseX, { stiffness: 1500, damping: 100 });
const dotY = useSpring(mouseY, { stiffness: 1500, damping: 100 });

// Elegant, trailing springs for the circle
const circleX = useSpring(mouseX, { stiffness: 350, damping: 40, mass: 0.6 });
const circleY = useSpring(mouseY, { stiffness: 350, damping: 40, mass: 0.6 });

useEffect(() => {
const handleMouseMove = (e) => {
mouseX.set(e.clientX);
mouseY.set(e.clientY);
};

const handleMouseOver = (e) => {
if (e.target.closest('a, button, .hover-target, input')) {
setIsHovering(true);
} else {
setIsHovering(false);
}
};

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseover', handleMouseOver);
return () => {
window.removeEventListener('mousemove', handleMouseMove);
window.removeEventListener('mouseover', handleMouseOver);
};
}, [mouseX, mouseY]);

return (
<div className="cursor-wrapper">
{/* Circle (Stroke) */}
<motion.div
className={`cursor-outline ${isHovering ? 'hovered' : ''}`}
style={{
x: circleX,
y: circleY,
translateX: "-50%",
translateY: "-50%"
}}
/>
{/* Dot (Center) */}
<motion.div
className={`cursor-dot ${isHovering ? 'animating' : ''}`}
style={{
x: dotX,
y: dotY,
translateX: "-50%",
translateY: "-50%"
}}
/>
</div>
);
};

export default CustomCursor