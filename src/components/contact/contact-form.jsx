import { useState, useRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./contact-form.css";

// Clean, professional SVG Icon Set
const Icons = {
  general: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  medical: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  technical: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  partner: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  feedback: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  account: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  ),
  check: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  upload: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  ),
  lock: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  paperclip: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  ),
  x: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
};

const TOPICS = [
  { id: "general", icon: "general" },
  { id: "medical", icon: "medical" },
  { id: "technical", icon: "technical" },
  { id: "account", icon: "account" },
  { id: "partner", icon: "partner" },
  { id: "feedback", icon: "feedback" },
];

const URGENCY = [
  { id: "low" },
  { id: "med" },
  { id: "high" },
];

function validate(form, topic, t) {
  const errs = {};
  if (!form.name.trim()) errs.name = t("contactForm.errors.name");
  if (!form.email.trim()) errs.email = t("contactForm.errors.emailRequired");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errs.email = t("contactForm.errors.emailValid");
  if (!topic) errs.topic = t("contactForm.errors.topic");
  if (!form.message.trim()) errs.message = t("contactForm.errors.messageRequired");
  else if (form.message.trim().length < 20)
    errs.message = t("contactForm.errors.messageMin");
  return errs;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const topicLabels = t("contactForm.topics");
  const urgencyCopy = t("contactForm.urgency");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [topic, setTopic] = useState("");
  const [urgency, setUrgency] = useState("low");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const fileRef = useRef();

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (touched[k]) {
      const errs = validate({ ...form, [k]: e.target.value }, topic, t);
      setErrors((prev) => ({ ...prev, [k]: errs[k] }));
    }
  };
  const blur = (k) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    const errs = validate(form, topic, t);
    setErrors((prev) => ({ ...prev, [k]: errs[k] }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const all = {
      ...Object.keys(form).reduce((a, k) => ({ ...a, [k]: true }), {}),
      topic: true,
    };
    setTouched(all);
    const errs = validate(form, topic, t);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("loading");
    await new Promise((r) => setTimeout(r, 2000));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <section className="cf-section" id="contact-form">
        <div className="cf-bg-fade" />
        <div className="cf-inner cf-inner--success">
          <div className="cf-success">
            <div className="cf-success__ring">
              <div className="cf-success__check">{Icons.check}</div>
            </div>
            <h3 className="cf-success__title">{t("contactForm.success.title")}</h3>
            <p className="cf-success__body">
              {t("contactForm.success.bodyPrefix")} <strong>{form.name}</strong>.{" "}
              {t("contactForm.success.bodyMiddle")}{" "}
              <em>{topicLabels[topic]}</em> {t("contactForm.success.bodySuffix")}
              <br />
              {t("contactForm.success.replyTo")} <strong>{form.email}</strong>{" "}
              {t("contactForm.success.shortly")}
            </p>
            <div className="cf-success__ref">
              {t("contactForm.success.reference")}: #ORA-
              {Math.random().toString(36).slice(2, 8).toUpperCase()}
            </div>
            <button
              className="cf-success__back"
              onClick={() => {
                setStatus("idle");
                setForm({ name: "", email: "", phone: "", message: "" });
                setTopic("");
                setErrors({});
                setTouched({});
                setFile(null);
              }}
            >
              {t("contactForm.success.another")}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cf-section" id="contact-form">
      <div className="cf-bg-fade" />
      <div className="cf-inner">
        {/* Aside */}
        <div className="cf-aside">
          <span className="cf-eyebrow">{t("contactForm.eyebrow")}</span>
          <h2 className="cf-title">
            {t("contactForm.titleLead")}
            <br />
            <em>{t("contactForm.titleEm")}</em>
          </h2>
          <p className="cf-desc">{t("contactForm.desc")}</p>
          <div className="cf-promises">
            {t("contactForm.promises").map((tx, i) => (
              <div
                key={tx}
                className="cf-promise"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="cf-promise__ic">{Icons.check}</span>
                <span>{tx}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className="cf-form" onSubmit={handleSubmit} noValidate>
          {/* Topic */}
          <div
            className={`cf-field cf-anim-1 ${errors.topic && touched.topic ? "cf-field--err" : ""}`}
          >
            <label className="cf-label">
              {t("contactForm.labels.topic")} <span className="cf-req">{t("contactForm.required")}</span>
            </label>
            <div className="cf-topics">
              {TOPICS.map((t) => (
                <button
                  type="button"
                  key={t.id}
                  className={`cf-topic ${topic === t.id ? "cf-topic--on" : ""}`}
                  onClick={() => {
                    setTopic(t.id);
                    setErrors((p) => ({ ...p, topic: undefined }));
                  }}
                >
                  <span className="cf-topic__icon">{Icons[t.icon]}</span>
                  {topicLabels[t.id]}
                </button>
              ))}
            </div>
            {errors.topic && touched.topic && (
              <span className="cf-err-msg">{errors.topic}</span>
            )}
          </div>

          {/* Name + Email */}
          <div className="cf-row cf-anim-2">
            <div
              className={`cf-field ${errors.name && touched.name ? "cf-field--err" : ""} ${touched.name && !errors.name ? "cf-field--ok" : ""}`}
            >
              <label className="cf-label" htmlFor="cf-name">
                {t("contactForm.labels.name")} <span className="cf-req">{t("contactForm.required")}</span>
              </label>
              <div className="cf-input-wrap">
                <input
                  id="cf-name"
                  type="text"
                  className="cf-input"
                  placeholder={t("contactForm.placeholders.name")}
                  value={form.name}
                  onChange={set("name")}
                  onBlur={blur("name")}
                />
                {touched.name && !errors.name && (
                  <span className="cf-ok-ic">{Icons.check}</span>
                )}
              </div>
              {errors.name && touched.name && (
                <span className="cf-err-msg">{errors.name}</span>
              )}
            </div>
            <div
              className={`cf-field ${errors.email && touched.email ? "cf-field--err" : ""} ${touched.email && !errors.email ? "cf-field--ok" : ""}`}
            >
              <label className="cf-label" htmlFor="cf-email">
                {t("contactForm.labels.email")} <span className="cf-req">{t("contactForm.required")}</span>
              </label>
              <div className="cf-input-wrap">
                <input
                  id="cf-email"
                  type="email"
                  className="cf-input"
                  placeholder={t("contactForm.placeholders.email")}
                  value={form.email}
                  onChange={set("email")}
                  onBlur={blur("email")}
                />
                {touched.email && !errors.email && (
                  <span className="cf-ok-ic">{Icons.check}</span>
                )}
              </div>
              {errors.email && touched.email && (
                <span className="cf-err-msg">{errors.email}</span>
              )}
            </div>
          </div>

          {/* Phone & Urgency */}
          <div className="cf-row cf-anim-3">
            <div className="cf-field">
              <label className="cf-label" htmlFor="cf-phone">
                {t("contactForm.labels.phone")} <span className="cf-opt">{t("contactForm.optional")}</span>
              </label>
              <input
                id="cf-phone"
                type="tel"
                className="cf-input"
                placeholder={t("contactForm.placeholders.phone")}
                value={form.phone}
                onChange={set("phone")}
              />
            </div>
          </div>

          {/* Urgency */}
          <div className="cf-field cf-anim-4">
            <label className="cf-label">{t("contactForm.labels.urgency")}</label>
            <div className="cf-urgency">
              {URGENCY.map((u) => (
                <button
                  type="button"
                  key={u.id}
                  className={`cf-urgency-opt ${urgency === u.id ? "cf-urgency-opt--on" : ""}`}
                  onClick={() => setUrgency(u.id)}
                >
                  <div className="cf-urgency-opt__label">{urgencyCopy[u.id].label}</div>
                  <div className="cf-urgency-opt__desc">{urgencyCopy[u.id].desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div
            className={`cf-field cf-anim-5 ${errors.message && touched.message ? "cf-field--err" : ""}`}
          >
            <label className="cf-label" htmlFor="cf-msg">
              {t("contactForm.labels.message")} <span className="cf-req">{t("contactForm.required")}</span>
            </label>
            <textarea
              id="cf-msg"
              className="cf-textarea"
              rows={5}
              placeholder={t("contactForm.placeholders.message")}
              value={form.message}
              onChange={set("message")}
              onBlur={blur("message")}
              maxLength={1000}
            />
            <div className="cf-msg-footer">
              {errors.message && touched.message ? (
                <span className="cf-err-msg">{errors.message}</span>
              ) : (
                <span />
              )}
              <span
                className={`cf-char ${form.message.length > 900 ? "cf-char--warn" : ""}`}
              >
                {form.message.length} / 1000
              </span>
            </div>
          </div>

          {/* Attachment */}
          <div className="cf-field cf-anim-6">
            <label className="cf-label">
              {t("contactForm.labels.attachment")} <span className="cf-opt">{t("contactForm.optional")}</span>
            </label>
            <div
              className="cf-attach"
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const f = e.dataTransfer.files[0];
                if (f) setFile(f);
              }}
            >
              <input
                ref={fileRef}
                type="file"
                className="cf-attach__input"
                onChange={(e) => setFile(e.target.files[0])}
                accept=".pdf,.doc,.docx,.jpg,.png"
              />
              {file ? (
                <div className="cf-attach__preview">
                  <span className="cf-attach__name">
                    <span className="icon">{Icons.paperclip}</span> {file.name}
                  </span>
                  <button
                    type="button"
                    className="cf-attach__remove"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFile(null);
                    }}
                  >
                    {Icons.x}
                  </button>
                </div>
              ) : (
                <div className="cf-attach__placeholder">
                  <span className="cf-attach__icon">{Icons.upload}</span>
                  <span>{t("contactForm.placeholders.attachment")}</span>
                  <span className="cf-attach__hint">
                    {t("contactForm.placeholders.attachmentHint")}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="cf-footer cf-anim-7">
            <button
              type="submit"
              className={`cf-submit ${status === "loading" ? "cf-submit--loading" : ""}`}
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <span className="cf-spinner" /> {t("contactForm.sending")}
                </>
              ) : (
                <>
                  <span>{t("contactForm.send")}</span>
                  <span className="cf-submit__arr">→</span>
                </>
              )}
            </button>

            <p className="cf-privacy">
              <span className="cf-privacy-icon">{Icons.lock}</span>
              {t("contactForm.privacy")}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
