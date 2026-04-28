import { useState } from "react";
import "./BilingualEditor.css";

const LANGS = [
  {
    code: "en",
    label: "English",
    dir: "ltr",
    placeholder: "Write in English…",
  },
  { code: "ar", label: "عربي", dir: "rtl", placeholder: "اكتب بالعربية…" },
  {
    code: "fr",
    label: "French",
    dir: "ltr",
    placeholder: "Écrire en français…",
  },
];

const FORMAT_ACTIONS = [
  { id: "bold", label: "B", title: "Bold", style: "bold" },
  { id: "italic", label: "I", title: "Italic", style: "italic" },
  { id: "ul", label: "≡", title: "Unordered list" },
  { id: "ol", label: "1.", title: "Ordered list" },
  { id: "link", label: "↗", title: "Insert link" },
];

export default function BilingualEditor({
  label,
  values = {},
  onChange,
  required,
  rows = 5,
}) {
  const [lang, setLang] = useState("en");
  const current = LANGS.find((l) => l.code === lang);

  function handleChange(e) {
    onChange?.({ ...values, [lang]: e.target.value });
  }

  const filled = LANGS.filter((l) => values[l.code]?.trim()).length;
  const total = LANGS.length;

  return (
    <div className="ble">
      {label && (
        <div className="ble-top">
          <label className="ble-label">
            {label}
            {required && <span className="ble-req">*</span>}
          </label>
          <span className="ble-status">
            <span
              className={`ble-status-dot ${filled === total ? "ble-all-done" : filled > 0 ? "ble-partial" : ""}`}
            />
            {filled}/{total} languages
          </span>
        </div>
      )}

      {/* Language tabs */}
      <div className="ble-tabs">
        {LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            className={`ble-tab ${lang === l.code ? "ble-tab-active" : ""} ${values[l.code]?.trim() ? "ble-tab-filled" : ""}`}
            onClick={() => setLang(l.code)}
          >
            <span className="ble-lang-code">{l.code.toUpperCase()}</span>
            <span className="ble-lang-name">{l.label}</span>
            {values[l.code]?.trim() && (
              <span className="ble-check">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path
                    d="M1.5 4.5L3.5 6.5L7.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="ble-toolbar">
        {FORMAT_ACTIONS.map((a) => (
          <button
            key={a.id}
            type="button"
            className="ble-fmt-btn"
            title={a.title}
            style={{
              fontStyle: a.id === "italic" ? "italic" : "normal",
              fontWeight: a.id === "bold" ? 700 : 400,
            }}
          >
            {a.label}
          </button>
        ))}
        <div className="ble-toolbar-sep" />
        <span className="ble-dir-badge">
          {current.dir === "rtl" ? "RTL" : "LTR"}
        </span>
        <span className="ble-char-count">
          {(values[lang] || "").length} chars
        </span>
      </div>

      {/* Editor */}
      <textarea
        className="ble-textarea"
        dir={current.dir}
        lang={current.code}
        placeholder={current.placeholder}
        value={values[lang] || ""}
        onChange={handleChange}
        rows={rows}
        style={{ textAlign: current.dir === "rtl" ? "right" : "left" }}
      />

      {/* Completeness bar */}
      <div className="ble-progress">
        <div
          className="ble-progress-bar"
          style={{ width: `${(filled / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
