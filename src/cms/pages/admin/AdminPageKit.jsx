import React from "react";
import "./AdminPageKit.css";

export function AdminHero({
  eyebrow,
  title,
  description,
  actions,
  asideTitle,
  asideText,
  asideItems = [],
  banner,
}) {
  return (
    <>
      <section className="ap-hero ap-animate">
        <div className="ap-hero-grid">
          <div className="ap-hero-main">
            <span className="ap-kicker">{eyebrow}</span>
            <div>
              <h1 className="ap-title">{title}</h1>
              <p className="ap-sub">{description}</p>
            </div>
            {actions ? <div className="ap-actions">{actions}</div> : null}
          </div>

          <div className="ap-hero-aside">
            <div>
              <p className="ap-aside-kicker">Now Active</p>
              <h2 className="ap-aside-title">{asideTitle}</h2>
            </div>
            <p className="ap-aside-text">{asideText}</p>
            <div className="ap-aside-list">
              {asideItems.map((item) => (
                <div key={item} className="ap-aside-item">
                  <span className="ap-aside-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {banner ? <div className="ap-animate ap-delay-1">{banner}</div> : null}
    </>
  );
}

export function AdminStats({ items }) {
  return (
    <section className="ap-stats-grid ap-animate ap-delay-2">
      {items.map((item) => (
        <article key={item.label} className="ap-stat-card">
          <div className="ap-stat-top">
            <div className="ap-stat-icon">{item.icon}</div>
            {item.trend ? <span className="ap-stat-trend">{item.trend}</span> : null}
          </div>
          <div className="ap-stat-value">{item.value}</div>
          <div className="ap-stat-label">{item.label}</div>
          {item.note ? <p className="ap-stat-note">{item.note}</p> : null}
        </article>
      ))}
    </section>
  );
}

export function AdminPanel({ title, subtitle, action, className = "", delay = "ap-delay-3", children }) {
  return (
    <section className={`ap-panel ap-animate ${delay} ${className}`.trim()}>
      <div className="ap-panel-body">
        {(title || subtitle || action) && (
          <div className="ap-panel-head">
            <div>
              {title ? <h3 className="ap-panel-title">{title}</h3> : null}
              {subtitle ? <p className="ap-panel-sub">{subtitle}</p> : null}
            </div>
            {action}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function AdminBanner({ icon, children }) {
  return (
    <div className="ap-banner">
      {icon}
      <span>{children}</span>
    </div>
  );
}
