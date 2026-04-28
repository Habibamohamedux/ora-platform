import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import "./Settings.css";

const TABS = [
  { key: "profile", label: "Profile" },
  { key: "password", label: "Security" },
  { key: "notifs", label: "Notifications" },
  { key: "system", label: "System Info" },
];

export default function Settings() {
  const [tab, setTab] = useState("profile");
  const [profile, setProfile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    department: "",
    phone: "",
    current_pw: "",
    new_pw: "",
    confirm_pw: "",
  });
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const [notifPrefs, setNotifPrefs] = useState({
    email_notifs: true,
    ai_alerts: true,
    new_messages: true,
    system_updates: false,
    weekly_report: true,
    login_alerts: true,
  });

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) return;
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();
      if (data) {
        setProfile(data);
        setForm((p) => ({
          ...p,
          full_name: data.full_name || "",
          email: data.email || "",
          department: data.department || "",
        }));
      }
    });
  }, []);

  function showMsg(msg, type = "success") {
    if (type === "success") {
      setSuccess(msg);
      setError("");
    } else {
      setError(msg);
      setSuccess("");
    }
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 4000);
  }

  async function saveProfile() {
    if (!form.full_name.trim()) {
      showMsg("Full name is required.", "error");
      return;
    }
    setSaving(true);
    const { error: e } = await supabase
      .from("profiles")
      .update({ full_name: form.full_name, department: form.department })
      .eq("id", profile.id);
    setSaving(false);
    if (e) showMsg(e.message, "error");
    else showMsg("Profile updated successfully.");
  }

  async function changePassword() {
    if (!form.new_pw) {
      showMsg("Enter a new password.", "error");
      return;
    }
    if (form.new_pw.length < 8) {
      showMsg("Password must be at least 8 characters.", "error");
      return;
    }
    if (form.new_pw !== form.confirm_pw) {
      showMsg("Passwords do not match.", "error");
      return;
    }
    setSaving(true);
    const { error: e } = await supabase.auth.updateUser({
      password: form.new_pw,
    });
    setSaving(false);
    if (e) showMsg(e.message, "error");
    else {
      showMsg("Password changed successfully.");
      setForm((p) => ({ ...p, current_pw: "", new_pw: "", confirm_pw: "" }));
    }
  }

  const ROLE_META = {
    admin: "Administrator",
    doctor: "Doctor",
    manager: "Manager",
    nurse: "Nurse",
    content: "Content Manager",
    it: "IT Admin",
  };
  const initials = (profile?.full_name || "U")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Settings</h1>
          <p className="page-sub">
            Manage your account, security, and preferences
          </p>
        </div>
      </div>

      {/* Feedback messages */}
      {success && <div className="stg-msg stg-success">{success}</div>}
      {error && <div className="stg-msg stg-error">{error}</div>}

      <div className="stg-layout">
        {/* Side nav */}
        <div className="stg-sidenav card">
          {/* Profile preview */}
          {profile && (
            <div className="stg-profile-mini">
              <div className="stg-mini-avatar">{initials}</div>
              <div>
                <p className="stg-mini-name">{profile.full_name || "—"}</p>
                <p className="text-xs text-muted">
                  {ROLE_META[profile.role] || "User"}
                </p>
              </div>
            </div>
          )}
          <div className="stg-nav-divider" />
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`stg-nav-btn ${tab === t.key ? "active" : ""}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="card card-body stg-content">
          {/* ── PROFILE ── */}
          {tab === "profile" && (
            <>
              <div className="stg-section-hdr">
                <h3 className="stg-section-title">Profile Information</h3>
                <p className="text-sm text-muted">
                  Update your personal details and department.
                </p>
              </div>
              <div className="form-grid" style={{ gap: 16 }}>
                <div className="form-grid form-2col">
                  <div className="form-field">
                    <label className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      className="form-input"
                      placeholder="Your full name"
                      value={form.full_name}
                      onChange={(e) => set("full_name", e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Work Email</label>
                    <input
                      className="form-input"
                      type="email"
                      value={form.email}
                      disabled
                      style={{ opacity: 0.6 }}
                    />
                    <p className="form-hint">
                      Email cannot be changed. Contact IT for assistance.
                    </p>
                  </div>
                </div>
                <div className="form-grid form-2col">
                  <div className="form-field">
                    <label className="form-label">Department</label>
                    <input
                      className="form-input"
                      placeholder="e.g. Obstetrics & Gynecology"
                      value={form.department}
                      onChange={(e) => set("department", e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Phone (optional)</label>
                    <input
                      className="form-input"
                      placeholder="+966 5x xxx xxxx"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label">System Role</label>
                  <input
                    className="form-input"
                    value={ROLE_META[profile?.role] || "—"}
                    disabled
                    style={{ opacity: 0.6 }}
                  />
                  <p className="form-hint">
                    Role is managed by your administrator. Contact IT to request
                    a change.
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 22 }}>
                <button
                  className="btn btn-primary"
                  onClick={saveProfile}
                  disabled={saving}
                >
                  {saving ? (
                    <>
                      <span
                        style={{
                          width: 14,
                          height: 14,
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "#fff",
                          borderRadius: "50%",
                          animation: "spin 0.65s linear infinite",
                          display: "inline-block",
                        }}
                      />{" "}
                      Saving…
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </>
          )}

          {/* ── SECURITY ── */}
          {tab === "password" && (
            <>
              <div className="stg-section-hdr">
                <h3 className="stg-section-title">Security</h3>
                <p className="text-sm text-muted">
                  Change your password and manage account security.
                </p>
              </div>
              <div className="form-grid" style={{ maxWidth: 420, gap: 16 }}>
                <div className="form-field">
                  <label className="form-label">Current Password</label>
                  <input
                    className="form-input"
                    type="password"
                    placeholder="••••••••"
                    value={form.current_pw}
                    onChange={(e) => set("current_pw", e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">
                    New Password <span className="req">*</span>
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    placeholder="Min. 8 characters"
                    value={form.new_pw}
                    onChange={(e) => set("new_pw", e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">
                    Confirm New Password <span className="req">*</span>
                  </label>
                  <input
                    className="form-input"
                    type="password"
                    placeholder="Repeat new password"
                    value={form.confirm_pw}
                    onChange={(e) => set("confirm_pw", e.target.value)}
                  />
                  {form.confirm_pw && form.new_pw !== form.confirm_pw && (
                    <p className="form-error">Passwords do not match.</p>
                  )}
                </div>
              </div>
              <div className="stg-pw-strength">
                {form.new_pw &&
                  [
                    "Min. 8 characters",
                    "One uppercase letter",
                    "One number",
                  ].map((rule, i) => {
                    const ok =
                      i === 0
                        ? form.new_pw.length >= 8
                        : i === 1
                          ? /[A-Z]/.test(form.new_pw)
                          : /[0-9]/.test(form.new_pw);
                    return (
                      <div
                        key={rule}
                        className={`stg-pw-rule ${ok ? "ok" : ""}`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d={ok ? "M2 6L5 9L10 3" : "M2 2L10 10M10 2L2 10"}
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {rule}
                      </div>
                    );
                  })}
              </div>
              <div style={{ marginTop: 22 }}>
                <button
                  className="btn btn-primary"
                  onClick={changePassword}
                  disabled={saving || !form.new_pw}
                >
                  Update Password
                </button>
              </div>
            </>
          )}

          {/* ── NOTIFICATIONS ── */}
          {tab === "notifs" && (
            <>
              <div className="stg-section-hdr">
                <h3 className="stg-section-title">Notification Preferences</h3>
                <p className="text-sm text-muted">
                  Choose which alerts and emails you receive.
                </p>
              </div>
              <div className="stg-notif-list">
                {[
                  {
                    key: "email_notifs",
                    label: "Email Notifications",
                    desc: "Receive email alerts for important platform events",
                  },
                  {
                    key: "ai_alerts",
                    label: "AI Alert Emails",
                    desc: "Get notified when ORA Intelligence flags a high-risk patient",
                  },
                  {
                    key: "new_messages",
                    label: "New Message Alerts",
                    desc: "Email when a new contact form message arrives on the website",
                  },
                  {
                    key: "system_updates",
                    label: "System Updates",
                    desc: "Maintenance windows, version updates, and downtime notices",
                  },
                  {
                    key: "weekly_report",
                    label: "Weekly Summary Report",
                    desc: "Receive a platform summary every Monday morning",
                  },
                  {
                    key: "login_alerts",
                    label: "New Login Alerts",
                    desc: "Notify me when my account is accessed from a new device",
                  },
                ].map((item) => (
                  <div key={item.key} className="stg-notif-row">
                    <div>
                      <p className="fw-500" style={{ fontSize: 14 }}>
                        {item.label}
                      </p>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={notifPrefs[item.key]}
                        onChange={(e) =>
                          setNotifPrefs((p) => ({
                            ...p,
                            [item.key]: e.target.checked,
                          }))
                        }
                      />
                      <span className="toggle-track" />
                      <span className="toggle-thumb" />
                    </label>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 22 }}>
                <button
                  className="btn btn-primary"
                  onClick={() => showMsg("Notification preferences saved.")}
                >
                  Save Preferences
                </button>
              </div>
            </>
          )}

          {/* ── SYSTEM ── */}
          {tab === "system" && (
            <>
              <div className="stg-section-hdr">
                <h3 className="stg-section-title">System Information</h3>
                <p className="text-sm text-muted">
                  Platform details, environment, and support contacts.
                </p>
              </div>
              <div className="stg-sys-grid">
                {[
                  ["Platform", "ORA Health CMS"],
                  ["Version", "v2.4.1 (April 2025)"],
                  ["Environment", "Production"],
                  ["Database", "Supabase PostgreSQL"],
                  ["Region", "EU West (eu-west-1)"],
                  ["Build Date", "2025-04-12"],
                  ["IT Support", "ora_it@orahealth.ai"],
                  ["HR Department", "hr@orahealth.ai"],
                ].map(([k, v]) => (
                  <div key={k} className="stg-sys-row">
                    <span className="text-muted text-sm">{k}</span>
                    <span className="fw-500 text-sm">
                      {k.includes("Support") || k.includes("HR") ? (
                        <a
                          href={`mailto:${v}`}
                          style={{ color: "var(--pink)" }}
                        >
                          {v}
                        </a>
                      ) : (
                        v
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <div className="stg-docs-banner">
                <div>
                  <p className="fw-500" style={{ marginBottom: 4 }}>
                    ORA Documentation
                  </p>
                  <p className="text-sm text-muted">
                    Access user guides, API references, and platform
                    documentation.
                  </p>
                </div>
                <a
                  href="https://docs.orahealth.ai"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M1.5 11.5L11.5 1.5M11.5 1.5H5.5M11.5 1.5V7.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Open Docs
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
