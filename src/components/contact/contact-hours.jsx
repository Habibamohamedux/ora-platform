import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./contact-hours.css";

// Clean, Professional SVG Icons
const Icons = {
  support: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  clinical: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  technical: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  critical: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  globe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
};

const SCHEDULE_TEMPLATE = [
  { open: "09:00", close: "18:00" },
  { open: "09:00", close: "18:00" },
  { open: "09:00", close: "18:00" },
  { open: "09:00", close: "18:00" },
  { open: "09:00", close: "18:00" },
  { open: null, close: null },
  { open: "10:00", close: "15:00" },
];

const SERVICE_ICONS = ["support", "clinical", "technical", "critical"];

const CLOCKS = [
  { tz: "Africa/Cairo" },
  { tz: "Asia/Dubai" },
  { tz: "Europe/Berlin" },
  { tz: "Europe/Paris" },
];

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function useGlobalTime() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export default function ContactHours() {
  const { language, t } = useLanguage();
  const locale = {
    en: "en-US",
    fr: "fr-FR",
    ar: "ar-EG",
  }[language] || "en-US";
  const schedule = SCHEDULE_TEMPLATE.map((entry, index) => ({
    ...entry,
    day: t("contactHours.days")[index],
  }));
  const services = t("contactHours.services").map((service, index) => ({
    ...service,
    icon: SERVICE_ICONS[index],
    always: index === 3,
  }));
  const now = useGlobalTime();
  
  const cairoTimeStr = now.toLocaleString("en-US", { timeZone: "Africa/Cairo" });
  const cairoDate = new Date(cairoTimeStr);
  const dayIdx = cairoDate.getDay(); 
  const currentMins = cairoDate.getHours() * 60 + cairoDate.getMinutes();
  
  const today = schedule[dayIdx];
  const isOpen = today.open && currentMins >= toMinutes(today.open) && currentMins < toMinutes(today.close);

  function minsUntilClose() {
    if (!today.open) return null;
    return toMinutes(today.close) - currentMins;
  }
  const closing = isOpen ? minsUntilClose() : null;

  return (
    <section className="chr-section" id="contact-hours">
      {/* Clean ambient background instead of a busy grid */}
      <div className="chr-ambient-glow" />
      
      <div className="chr-inner">
        <div className="chr-header">
          <span className="chr-eyebrow">{t("contactHours.eyebrow")}</span>
          <h2 className="chr-title">{t("contactHours.titleLead")} <em>{t("contactHours.titleEm")}</em></h2>
          <p className="chr-desc">{t("contactHours.desc")}</p>
        </div>

        {/* Global Timezones Strip */}
        <div className="chr-world-strip">
          <div className="chr-world-strip__icon">{Icons.globe}</div>
          <div className="chr-world-clocks">
            {CLOCKS.map((clock) => (
              <div key={clock.tz} className="chr-clock-item">
                <span className="chr-clock__label">{t("contactHours.clocks")[CLOCKS.indexOf(clock)]}</span>
                <span className="chr-clock__time">
                  {now.toLocaleTimeString(locale, { 
                    timeZone: clock.tz, 
                    hour: "2-digit", 
                    minute: "2-digit",
                    hour12: true 
                  })}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="chr-grid">
          {/* Main HQ Schedule */}
          <div className="chr-schedule-card chr-anim-1">
            <div className="chr-card-header">
              <h3 className="chr-card-title">{t("contactHours.scheduleTitle")}</h3>
              <div className={`chr-status ${isOpen ? "chr-status--open" : "chr-status--closed"}`}>
                <span className="chr-status__dot" />
                <span>
                  {isOpen
                    ? closing !== null && closing < 60
                      ? t("contactHours.closingIn", { minutes: closing })
                      : t("contactHours.systemOnline")
                    : t("contactHours.systemOffline")}
                </span>
              </div>
            </div>

            <div className="chr-schedule-list">
              {schedule.map((d, i) => {
                const isToday = i === dayIdx;
                let progress = 0;
                if (isToday && d.open) {
                  progress = Math.min(100, Math.max(0, (currentMins - toMinutes(d.open)) / (toMinutes(d.close) - toMinutes(d.open)) * 100));
                }

                return (
                  <div key={d.day} className={`chr-row ${isToday ? "chr-row--today" : ""} ${!d.open ? "chr-row--off" : ""}`}>
                    <span className="chr-row__day">
                      {d.day}
                      {isToday && <span className="chr-badge">{t("contactHours.today")}</span>}
                    </span>
                    <span className="chr-row__hrs">
                      {d.open ? `${d.open.replace(":00","")} – ${d.close.replace(":00","")}` : t("contactHours.closed")}
                    </span>
                    {isToday && d.open && (
                      <div className="chr-progress">
                        <div className="chr-progress__bar" style={{ width: `${progress}%` }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Tiers */}
          <div className="chr-services-card chr-anim-2">
            <h3 className="chr-card-title chr-card-title--mb">{t("contactHours.servicesTitle")}</h3>
            <div className="chr-services-list">
              {services.map((s) => (
                <div key={s.name} className={`chr-svc ${s.always ? "chr-svc--critical" : ""}`}>
                  <div className="chr-svc__icon">{Icons[s.icon]}</div>
                  <div className="chr-svc__info">
                    <span className="chr-svc__name">{s.name}</span>
                    <span className="chr-svc__time">{s.days} • {s.time}</span>
                  </div>
                  {s.always && <span className="chr-svc__tag">{t("contactHours.alwaysActive")}</span>}
                </div>
              ))}
            </div>
            <div className="chr-note">
               {t("contactHours.note")}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
