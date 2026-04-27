import { useEffect, useRef, useState } from "react";
import "./circle-hero.css";

const NODES = [
  { id: 1, x: 12, y: 18, label: "Sarah, 28 weeks" },
  { id: 2, x: 78, y: 22, label: "Dr. Nadia" },
  { id: 3, x: 55, y: 65, label: "Mona & partner" },
  { id: 4, x: 20, y: 72, label: "High-risk support" },
  { id: 5, x: 88, y: 58, label: "New mothers" },
  { id: 6, x: 42, y: 30, label: "Layla, 6 weeks post" },
  { id: 7, x: 67, y: 80, label: "First pregnancy" },
];

const CONNECTIONS = [
  [1, 6], [6, 3], [3, 7], [7, 5], [2, 6], [2, 5], [4, 3], [4, 1],
];

export default function CircleHero() {
  const [activeNode, setActiveNode] = useState(null);
  const [tick, setTick] = useState(0);
  const svgRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(id);
  }, []);

  const pulseNode = tick % NODES.length;

  return (
    <section className="ch-hero">
      {/* Ambient gradient orbs */}
      <div className="ch-orb ch-orb--1" />
      <div className="ch-orb ch-orb--2" />
      <div className="ch-orb ch-orb--3" />

      {/* Network SVG */}
      <svg ref={svgRef} className="ch-network" viewBox="0 0 100 100" preserveAspectRatio="none">
        {CONNECTIONS.map(([a, b], i) => {
          const na = NODES.find((n) => n.id === a);
          const nb = NODES.find((n) => n.id === b);
          return (
            <line
              key={i}
              x1={na.x} y1={na.y}
              x2={nb.x} y2={nb.y}
              className="ch-edge"
            />
          );
        })}
        {NODES.map((node) => (
          <circle
            key={node.id}
            cx={node.x} cy={node.y} r="1"
            className={`ch-node ${node.id - 1 === pulseNode % NODES.length ? "ch-node--active" : ""}`}
          />
        ))}
      </svg>

      {/* Floating labels */}
      {NODES.map((node) => (
        <button
          key={node.id}
          className={`ch-label ${activeNode === node.id ? "ch-label--visible" : ""}`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          onMouseEnter={() => setActiveNode(node.id)}
          onMouseLeave={() => setActiveNode(null)}
        >
          <span className="ch-label__dot" />
          <span className="ch-label__text">{node.label}</span>
        </button>
      ))}

      {/* Center content */}
      <div className="ch-content">
        <p className="ch-eyebrow">ORA Circle</p>
        <h1 className="ch-headline">
          You Were Never<br />Meant to Do<br />
          <em>This Alone</em>
        </h1>
        <p className="ch-sub">
          Connect with mothers, partners, and doctors — in the moments that matter most.
        </p>
        <div className="ch-actions">
          <button className="ch-btn ch-btn--primary">Join Your Circle</button>
          <button className="ch-btn ch-btn--ghost">Explore Community</button>
        </div>
        <div className="ch-stats">
          <div className="ch-stat">
            <span className="ch-stat__num">12k+</span>
            <span className="ch-stat__label">Active circles</span>
          </div>
          <div className="ch-stat__divider" />
          <div className="ch-stat">
            <span className="ch-stat__num">94%</span>
            <span className="ch-stat__label">Feel less alone</span>
          </div>
          <div className="ch-stat__divider" />
          <div className="ch-stat">
            <span className="ch-stat__num">480+</span>
            <span className="ch-stat__label">Verified doctors</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="ch-scroll">
        <div className="ch-scroll__bar" />
        <span>Scroll</span>
      </div>
    </section>
  );
}