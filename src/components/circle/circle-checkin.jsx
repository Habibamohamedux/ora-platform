import { useState } from "react";
import "./circle-checkin.css";

const MOODS = [
  { id: "calm",      emoji: "🌸", label: "Calm",      color: "#f9c4d3", bg: "rgba(249,196,211,0.15)" },
  { id: "hopeful",   emoji: "☀️", label: "Hopeful",   color: "#fcd97d", bg: "rgba(252,217,125,0.15)" },
  { id: "anxious",   emoji: "🌊", label: "Anxious",   color: "#93c5fd", bg: "rgba(147,197,253,0.15)" },
  { id: "tired",     emoji: "🌙", label: "Tired",     color: "#c4b5fd", bg: "rgba(196,181,253,0.15)" },
  { id: "grateful",  emoji: "🤍", label: "Grateful",  color: "#f9a8d4", bg: "rgba(249,168,212,0.15)" },
  { id: "overwhelmed", emoji: "🌧", label: "Overwhelmed", color: "#94a3b8", bg: "rgba(148,163,184,0.12)" },
];

const PROMPTS = {
  calm:        "What's giving you peace today?",
  hopeful:     "What are you looking forward to?",
  anxious:     "What's weighing on your mind? Let it out here.",
  tired:       "What does your body need most right now?",
  grateful:    "What small moment made you smile today?",
  overwhelmed: "It's okay to say it's too much. What would help?",
};

const SUGGESTIONS = {
  calm:        ["Stories That Stay", "Week-by-Week"],
  hopeful:     ["First Time Mamas", "Ask a Doctor"],
  anxious:     ["High-Risk Hearts", "Ask a Doctor"],
  tired:       ["After the Storm", "Evening Check-in"],
  grateful:    ["First Time Mamas", "Stories That Stay"],
  overwhelmed: ["Still Held", "Evening Check-in"],
};

export default function CircleCheckin() {
  const [selected, setSelected] = useState(null);

  const mood = selected ? MOODS.find((m) => m.id === selected) : null;

  return (
    <section
      className="cci-section"
      style={mood ? { "--mood-bg": mood.bg, "--mood-color": mood.color } : {}}
    >
      <div className="cci-blob cci-blob--1" />
      <div className="cci-blob cci-blob--2" />

      <div className="cci-inner">
        <div className="cci-header">
          <span className="cci-eyebrow">Emotional Wellness</span>
          <h2 className="cci-title">Emotional Check-In</h2>
          <p className="cci-desc">A safe space to name what you're feeling — no judgment, only support.</p>
        </div>

        <div className="cci-card">
          <p className="cci-question">How are you feeling right now?</p>

          <div className="cci-moods">
            {MOODS.map((m) => (
              <button
                key={m.id}
                className={`cci-mood ${selected === m.id ? "cci-mood--on" : ""}`}
                style={{ "--m-color": m.color, "--m-bg": m.bg }}
                onClick={() => setSelected(m.id === selected ? null : m.id)}
              >
                <span className="cci-mood__emoji">{m.emoji}</span>
                <span className="cci-mood__label">{m.label}</span>
              </button>
            ))}
          </div>

          {selected && (
            <div className="cci-response" key={selected}>
              <p className="cci-prompt">{PROMPTS[selected]}</p>
              <textarea className="cci-textarea" placeholder="Write freely — this is yours…" rows={3} />

              <div className="cci-suggest">
                <p className="cci-suggest__label">ORA suggests for you</p>
                <div className="cci-suggest__chips">
                  {SUGGESTIONS[selected].map((s) => (
                    <button key={s} className="cci-chip">{s} →</button>
                  ))}
                </div>
              </div>

              <button className="cci-submit">Save Check-In</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}