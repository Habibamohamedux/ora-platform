// DoctorPages.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../components/Toast";

const PATIENTS = [
  {
    id: "P-1042",
    name: "Layla Al-Hassan",
    week: 28,
    risk: "high",
    hr: 102,
    stress: 78,
    sleep: 5.2,
    trimester: 3,
    status: "active",
  },
  {
    id: "P-0983",
    name: "Fatima Al-Rashid",
    week: 14,
    risk: "medium",
    hr: 88,
    stress: 45,
    sleep: 7.1,
    trimester: 2,
    status: "active",
  },
  {
    id: "P-1118",
    name: "Hana Mahmoud",
    week: 36,
    risk: "low",
    hr: 76,
    stress: 30,
    sleep: 7.8,
    trimester: 3,
    status: "active",
  },
  {
    id: "P-0871",
    name: "Sara Al-Otaibi",
    week: 8,
    risk: "low",
    hr: 80,
    stress: 28,
    sleep: 8.0,
    trimester: 1,
    status: "active",
  },
  {
    id: "P-1201",
    name: "Nour Abdullah",
    week: 22,
    risk: "medium",
    hr: 94,
    stress: 55,
    sleep: 6.3,
    trimester: 2,
    status: "active",
  },
];

const APPTS = [
  {
    time: "09:00",
    name: "Layla Al-Hassan",
    type: "Follow-up",
    status: "confirmed",
  },
  {
    time: "10:30",
    name: "Fatima Al-Rashid",
    type: "Ultrasound",
    status: "confirmed",
  },
  {
    time: "12:00",
    name: "Hana Mahmoud",
    type: "Consultation",
    status: "pending",
  },
  {
    time: "14:00",
    name: "Nour Abdullah",
    type: "Blood Work",
    status: "confirmed",
  },
];

const RISK_COLOR = {
  high: "badge-red",
  medium: "badge-amber",
  low: "badge-green",
};

export function DoctorDashboard() {
  const navigate = useNavigate();
  const high = PATIENTS.filter((p) => p.risk === "high").length;

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Clinical Overview</h1>
          <p className="page-sub">
            Today —{" "}
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/doctor/appointments")}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect
              x="1"
              y="2.5"
              width="12"
              height="10.5"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <path
              d="M1 6H13M4.5 1V3.5M9.5 1V3.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
          View Calendar
        </button>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {[
          {
            label: "Active Patients",
            value: PATIENTS.length,
            color: "#2563eb",
            bg: "rgba(37,99,235,0.1)",
          },
          {
            label: "High-Risk",
            value: high,
            color: "#dc2626",
            bg: "rgba(220,38,38,0.1)",
            warn: high > 0,
          },
          {
            label: "Today's Appts",
            value: APPTS.length,
            color: "#059669",
            bg: "rgba(5,150,105,0.1)",
          },
          {
            label: "AI Alerts",
            value: 2,
            color: "#d97706",
            bg: "rgba(217,119,6,0.1)",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="stat-card"
            style={{ borderLeft: s.warn ? "3px solid var(--red)" : undefined }}
          >
            <div
              className="stat-card-icon"
              style={{ background: s.bg, color: s.color }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="8"
                  cy="8"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <path
                  d="M8 5V8.5L10 10"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div
              className="stat-card-value"
              style={{ fontSize: 32, color: s.warn ? "var(--red)" : undefined }}
            >
              {s.value}
            </div>
            <div className="stat-card-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        {/* Today's appointments */}
        <div className="card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 18px 12px",
            }}
          >
            <p className="card-title">Today's Schedule</p>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => navigate("/doctor/appointments")}
            >
              Full Calendar
            </button>
          </div>
          <div style={{ padding: "0 14px 14px" }}>
            {APPTS.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "11px 0",
                  borderBottom:
                    i < APPTS.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--pink)",
                    minWidth: 40,
                  }}
                >
                  {a.time}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13.5, fontWeight: 500 }}>{a.name}</p>
                  <p style={{ fontSize: 12, color: "var(--text-2)" }}>
                    {a.type}
                  </p>
                </div>
                <span
                  className={`badge ${a.status === "confirmed" ? "badge-green" : "badge-amber"}`}
                >
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Alert patients */}
        <div className="card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 18px 12px",
            }}
          >
            <p className="card-title">Patients Needing Attention</p>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => navigate("/doctor/patients")}
            >
              All Patients
            </button>
          </div>
          <div style={{ padding: "0 14px 14px" }}>
            {PATIENTS.filter((p) => p.risk !== "low").map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "11px 0",
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/doctor/patients")}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "rgba(37,99,235,0.1)",
                    color: "#2563eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {p.name[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13.5, fontWeight: 500 }}>{p.name}</p>
                  <p style={{ fontSize: 12, color: "var(--text-2)" }}>
                    Week {p.week} · HR {p.hr} bpm · Stress {p.stress}%
                  </p>
                </div>
                <span className={`badge ${RISK_COLOR[p.risk]}`}>{p.risk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PatientList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [riskF, setRiskF] = useState("all");
  const [trimF, setTrimF] = useState("all");

  const filtered = PATIENTS.filter((p) => {
    const ms =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.id.includes(search);
    const mr = riskF === "all" || p.risk === riskF;
    const mt = trimF === "all" || p.trimester === Number(trimF);
    return ms && mr && mt;
  });

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">My Patients</h1>
          <p className="page-sub">{PATIENTS.length} active patients</p>
        </div>
      </div>
      <div className="card">
        <div
          style={{
            display: "flex",
            gap: 10,
            padding: "14px 16px",
            borderBottom: "1px solid var(--border)",
            flexWrap: "wrap",
          }}
        >
          <div className="search-bar">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle
                cx="6"
                cy="6"
                r="4.5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M9.5 9.5L13 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              placeholder="Search patients…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="filter-select"
            value={riskF}
            onChange={(e) => setRiskF(e.target.value)}
          >
            <option value="all">All Risk Levels</option>
            <option value="high">High Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="low">Low Risk</option>
          </select>
          <select
            className="filter-select"
            value={trimF}
            onChange={(e) => setTrimF(e.target.value)}
          >
            <option value="all">All Trimesters</option>
            <option value="1">1st Trimester</option>
            <option value="2">2nd Trimester</option>
            <option value="3">3rd Trimester</option>
          </select>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Patient ID</th>
                <th>Pregnancy Week</th>
                <th>Trimester</th>
                <th>Heart Rate</th>
                <th>Stress</th>
                <th>Sleep</th>
                <th>Risk</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: "rgba(37,99,235,0.1)",
                          color: "#2563eb",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        {p.name[0]}
                      </div>
                      <span className="fw-500" style={{ fontSize: 13.5 }}>
                        {p.name}
                      </span>
                    </div>
                  </td>
                  <td>
                    <code
                      style={{
                        fontSize: 12,
                        color: "var(--slate)",
                        background: "var(--bg-page)",
                        padding: "2px 7px",
                        borderRadius: 5,
                      }}
                    >
                      {p.id}
                    </code>
                  </td>
                  <td className="fw-500">Week {p.week}</td>
                  <td>
                    <span className="badge badge-blue">T{p.trimester}</span>
                  </td>
                  <td style={{ fontSize: 13 }}>
                    {p.hr}{" "}
                    <span style={{ color: "var(--text-3)", fontSize: 11 }}>
                      bpm
                    </span>
                  </td>
                  <td>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <div
                        style={{
                          flex: 1,
                          height: 5,
                          background: "var(--bg-page)",
                          borderRadius: 3,
                          overflow: "hidden",
                          minWidth: 60,
                        }}
                      >
                        <div
                          style={{
                            width: `${p.stress}%`,
                            height: "100%",
                            background:
                              p.stress > 70
                                ? "var(--red)"
                                : p.stress > 40
                                  ? "var(--amber)"
                                  : "var(--green)",
                            borderRadius: 3,
                          }}
                        />
                      </div>
                      <span style={{ fontSize: 12, color: "var(--text-2)" }}>
                        {p.stress}%
                      </span>
                    </div>
                  </td>
                  <td style={{ fontSize: 13 }}>{p.sleep}h</td>
                  <td>
                    <span className={`badge ${RISK_COLOR[p.risk]}`}>
                      <span className="badge-dot" />
                      {p.risk}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => navigate("/doctor/health")}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function Appointments() {
  const toast = useToast();
  const allAppts = [
    {
      date: "2025-04-13",
      time: "09:00",
      name: "Layla Al-Hassan",
      type: "Follow-up",
      status: "confirmed",
      mode: "In-Person",
    },
    {
      date: "2025-04-13",
      time: "10:30",
      name: "Fatima Al-Rashid",
      type: "Ultrasound",
      status: "confirmed",
      mode: "In-Person",
    },
    {
      date: "2025-04-13",
      time: "12:00",
      name: "Hana Mahmoud",
      type: "Consultation",
      status: "pending",
      mode: "Video Call",
    },
    {
      date: "2025-04-14",
      time: "09:30",
      name: "Sara Al-Otaibi",
      type: "Check-up",
      status: "confirmed",
      mode: "In-Person",
    },
    {
      date: "2025-04-14",
      time: "11:00",
      name: "Nour Abdullah",
      type: "Blood Work",
      status: "confirmed",
      mode: "In-Person",
    },
    {
      date: "2025-04-15",
      time: "10:00",
      name: "Layla Al-Hassan",
      type: "AI Review",
      status: "pending",
      mode: "Video Call",
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Appointments</h1>
          <p className="page-sub">{allAppts.length} upcoming sessions</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => toast("New appointment created", "success")}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1V13M1 7H13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          New Appointment
        </button>
      </div>
      <div className="card">
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Patient</th>
                <th>Type</th>
                <th>Mode</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allAppts.map((a, i) => (
                <tr key={i}>
                  <td style={{ fontSize: 13, fontWeight: 500 }}>{a.date}</td>
                  <td
                    style={{
                      fontSize: 13,
                      color: "var(--pink)",
                      fontWeight: 600,
                    }}
                  >
                    {a.time}
                  </td>
                  <td className="fw-500" style={{ fontSize: 13.5 }}>
                    {a.name}
                  </td>
                  <td>
                    <span className="badge badge-blue">{a.type}</span>
                  </td>
                  <td style={{ fontSize: 13 }}>{a.mode}</td>
                  <td>
                    <span
                      className={`badge ${a.status === "confirmed" ? "badge-green" : "badge-amber"}`}
                    >
                      <span className="badge-dot" />
                      {a.status}
                    </span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() =>
                          toast("Appointment confirmed", "success")
                        }
                      >
                        Confirm
                      </button>
                      <button
                        className="btn btn-sm btn-ghost"
                        style={{ color: "var(--red)" }}
                        onClick={() =>
                          toast("Appointment cancelled", "warning")
                        }
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function AIAlerts() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      patient: "Layla Al-Hassan",
      id_code: "P-1042",
      level: "critical",
      msg: "Heart rate elevated to 102 bpm for 3+ hours. Immediate review recommended.",
      time: "12m ago",
      resolved: false,
    },
    {
      id: 2,
      patient: "Nour Abdullah",
      id_code: "P-1201",
      level: "high",
      msg: "Stress levels above 75% for 48 hours. Sleep quality severely impacted.",
      time: "1h ago",
      resolved: false,
    },
    {
      id: 3,
      patient: "Fatima Al-Rashid",
      id_code: "P-0983",
      level: "medium",
      msg: "Irregular biometric pattern detected over the last 6 hours.",
      time: "3h ago",
      resolved: false,
    },
    {
      id: 4,
      patient: "Hana Mahmoud",
      id_code: "P-1118",
      level: "low",
      msg: "Sleep below recommended threshold for 2 nights.",
      time: "6h ago",
      resolved: true,
    },
  ]);
  const toast = useToast();

  const LEVEL_COLOR = {
    critical: "badge-red",
    high: "badge-red",
    medium: "badge-amber",
    low: "badge-blue",
  };
  const LEVEL_BAR = {
    critical: "#dc2626",
    high: "#dc2626",
    medium: "#d97706",
    low: "#2563eb",
  };

  function resolve(id) {
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, resolved: true } : a)),
    );
    toast("Alert marked as resolved", "success");
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">AI Alerts</h1>
          <p className="page-sub">Risk flags generated by ORA Intelligence</p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {alerts.map((a) => (
          <div
            key={a.id}
            className="card card-body"
            style={{
              borderLeft: `4px solid ${LEVEL_BAR[a.level]}`,
              opacity: a.resolved ? 0.55 : 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <span
                    className={`badge ${LEVEL_COLOR[a.level]}`}
                    style={{ textTransform: "capitalize" }}
                  >
                    {a.level}
                  </span>
                  <code
                    style={{
                      fontSize: 12,
                      color: "var(--slate)",
                      background: "var(--bg-page)",
                      padding: "2px 7px",
                      borderRadius: 5,
                    }}
                  >
                    {a.id_code}
                  </code>
                  <span style={{ fontSize: 12, color: "var(--text-3)" }}>
                    {a.time}
                  </span>
                  {a.resolved && (
                    <span className="badge badge-green">Resolved</span>
                  )}
                </div>
                <p className="fw-500" style={{ fontSize: 14, marginBottom: 4 }}>
                  {a.patient}
                </p>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "var(--text-2)",
                    lineHeight: 1.6,
                  }}
                >
                  {a.msg}
                </p>
              </div>
              {!a.resolved && (
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => resolve(a.id)}
                >
                  Resolve
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HealthData() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Health Data</h1>
          <p className="page-sub">
            Live biometrics — Patient P-1042 · Layla Al-Hassan · Week 28
          </p>
        </div>
        <select className="filter-select">
          {PATIENTS.map((p) => (
            <option key={p.id}>{p.name}</option>
          ))}
        </select>
      </div>

      <div className="stats-grid">
        {[
          {
            label: "Heart Rate",
            value: "102",
            unit: "bpm",
            color: "#dc2626",
            bg: "rgba(220,38,38,0.1)",
            warn: true,
          },
          {
            label: "Stress Level",
            value: "78",
            unit: "%",
            color: "#d97706",
            bg: "rgba(217,119,6,0.1)",
            warn: true,
          },
          {
            label: "Sleep Quality",
            value: "5.2",
            unit: "hrs",
            color: "#2563eb",
            bg: "rgba(37,99,235,0.1)",
          },
          {
            label: "Pregnancy Week",
            value: "28",
            unit: "wks",
            color: "#059669",
            bg: "rgba(5,150,105,0.1)",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="stat-card"
            style={{
              borderLeft: s.warn ? "3px solid currentColor" : undefined,
            }}
          >
            <div
              className="stat-card-icon"
              style={{ background: s.bg, color: s.color }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2C8 2 3 5 3 9.5C3 12 5.24 14 8 14C10.76 14 13 12 13 9.5C13 5 8 2 8 2Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>
            </div>
            <div
              className="stat-card-value"
              style={{ fontSize: 32, color: s.color }}
            >
              {s.value}
            </div>
            <div className="stat-card-label">
              {s.label} <span style={{ fontWeight: 400 }}>({s.unit})</span>
            </div>
          </div>
        ))}
      </div>

      <div className="card card-body">
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            letterSpacing: "0.04em",
            marginBottom: 16,
          }}
        >
          Biometric Timeline
        </h3>
        <div
          style={{
            background: "var(--bg-page)",
            borderRadius: 10,
            padding: "24px",
            textAlign: "center",
            color: "var(--text-3)",
            fontSize: 14,
            lineHeight: 2,
          }}
        >
          <p>
            Connect to Supabase <code>biometrics</code> table and use Recharts
            to render
          </p>
          <p>heart rate, stress, and sleep trend charts here.</p>
          <p>
            Use <code>npm install recharts</code> to add charting.
          </p>
        </div>
      </div>

      <div className="card card-body">
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            letterSpacing: "0.04em",
            marginBottom: 16,
          }}
        >
          Medical Notes
        </h3>
        <textarea
          className="form-textarea"
          rows={5}
          placeholder="Add clinical notes for this patient…"
        />
        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}
        >
          <button className="btn btn-primary">Save Note</button>
        </div>
      </div>
    </div>
  );
}
