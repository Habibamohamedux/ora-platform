import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./circle-checkin.css";

const MOODS = [
  { id: "calm",      emoji: "🌸", label: "Calm",      color: "#f9c4d3", bg: "rgba(249,196,211,0.15)" },
  { id: "hopeful",   emoji: "☀️", label: "Hopeful",   color: "#fcd97d", bg: "rgba(252,217,125,0.15)" },
  { id: "anxious",   emoji: "🌊", label: "Anxious",   color: "#93c5fd", bg: "rgba(147,197,253,0.15)" },
  { id: "tired",     emoji: "🌙", label: "Tired",     color: "#c4b5fd", bg: "rgba(196,181,253,0.15)" },
  { id: "grateful",  emoji: "🤍", label: "Grateful",  color: "#f9a8d4", bg: "rgba(249,168,212,0.15)" },
  { id: "overwhelmed", emoji: "🌧", label: "Overwhelmed", color: "#94a3b8", bg: "rgba(148,163,184,0.12)" },
];

export default function CircleCheckin() {
  const [selected, setSelected] = useState(null);
  const { t } = useLanguage();
  const moodsCopy = t("circleCheckin.moods");

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
          <span className="cci-eyebrow">{t("circleCheckin.eyebrow")}</span>
          <h2 className="cci-title">{t("circleCheckin.title")}</h2>
          <p className="cci-desc">{t("circleCheckin.desc")}</p>
        </div>

        <div className="cci-card">
          <p className="cci-question">{t("circleCheckin.question")}</p>

          <div className="cci-moods">
            {MOODS.map((m) => (
              <button
                key={m.id}
                className={`cci-mood ${selected === m.id ? "cci-mood--on" : ""}`}
                style={{ "--m-color": m.color, "--m-bg": m.bg }}
                onClick={() => setSelected(m.id === selected ? null : m.id)}
              >
                <span className="cci-mood__emoji">{m.emoji}</span>
                <span className="cci-mood__label">{moodsCopy[m.id].label}</span>
              </button>
            ))}
          </div>

          {selected && (
            <div className="cci-response" key={selected}>
              <p className="cci-prompt">{moodsCopy[selected].prompt}</p>
              <textarea className="cci-textarea" placeholder={t("circleCheckin.placeholder")} rows={3} />

              <div className="cci-suggest">
                <p className="cci-suggest__label">{t("circleCheckin.suggest")}</p>
                <div className="cci-suggest__chips">
                  {moodsCopy[selected].suggestions.map((s) => (
                    <button key={s} className="cci-chip">{s} →</button>
                  ))}
                </div>
              </div>

              <button className="cci-submit">{t("circleCheckin.save")}</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
