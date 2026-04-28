// ManagerPages.jsx — Global Overview, Analytics, Medical Stats, Staff, Reports
import { useToast } from "../../components/Toast";

export function ManagerDashboard() {
  const KPIs = [
    {
      label: "Total Users",
      value: "1,284",
      change: "+12%",
      up: true,
      color: "#c94060",
      bg: "rgba(201,64,96,0.1)",
    },
    {
      label: "Active Pregnancies",
      value: "342",
      change: "+8%",
      up: true,
      color: "#2563eb",
      bg: "rgba(37,99,235,0.1)",
    },
    {
      label: "Registered Doctors",
      value: "48",
      change: "+4",
      up: true,
      color: "#059669",
      bg: "rgba(5,150,105,0.1)",
    },
    {
      label: "High-Risk Cases",
      value: "23",
      change: "+3",
      up: false,
      color: "#dc2626",
      bg: "rgba(220,38,38,0.1)",
    },
    {
      label: "App Sessions Today",
      value: "892",
      change: "+18%",
      up: true,
      color: "#7c3aed",
      bg: "rgba(124,58,237,0.1)",
    },
    {
      label: "AI Alerts This Week",
      value: "34",
      change: "-12%",
      up: true,
      color: "#d97706",
      bg: "rgba(217,119,6,0.1)",
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Global Overview</h1>
          <p className="page-sub">Platform-wide metrics and KPIs</p>
        </div>
        <span className="badge badge-green" style={{ fontSize: 12 }}>
          ● Live Data
        </span>
      </div>

      <div className="stats-grid">
        {KPIs.map((s) => (
          <div key={s.label} className="stat-card">
            <div
              className="stat-card-icon"
              style={{ background: s.bg, color: s.color }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M1.5 14.5V10L5.5 6.5L9 9.5L13 4.5L15.5 7"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="stat-card-value" style={{ fontSize: 28 }}>
              {s.value}
            </div>
            <div className="stat-card-label">{s.label}</div>
            <div className={`stat-card-change ${s.up ? "" : "down"}`}>
              {s.up ? "↑" : "↓"} {s.change} this week
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div className="card card-body">
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              letterSpacing: "0.04em",
              marginBottom: 16,
            }}
          >
            User Growth Chart
          </h3>
          <div
            style={{
              background: "var(--bg-page)",
              borderRadius: 10,
              padding: "40px 20px",
              textAlign: "center",
              color: "var(--text-3)",
              fontSize: 13.5,
            }}
          >
            Install Recharts and connect to Supabase <code>users</code> table to
            render monthly growth.
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
            Platform Breakdown
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              ["Mothers", "684", "53%", "#c94060"],
              ["Partners", "312", "24%", "#2563eb"],
              ["Doctors", "48", "4%", "#059669"],
              ["Staff", "240", "19%", "#d97706"],
            ].map(([l, n, p, c]) => (
              <div
                key={l}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <span style={{ fontSize: 13.5, minWidth: 70 }}>{l}</span>
                <div
                  style={{
                    flex: 1,
                    height: 8,
                    background: "var(--bg-page)",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: p,
                      height: "100%",
                      background: c,
                      borderRadius: 4,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 13,
                    color: "var(--text-2)",
                    minWidth: 40,
                    textAlign: "right",
                  }}
                >
                  {n}
                </span>
                <span
                  style={{
                    fontSize: 11.5,
                    color: "var(--text-3)",
                    minWidth: 32,
                  }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Analytics() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Analytics</h1>
          <p className="page-sub">Website traffic and app usage data</p>
        </div>
        <select className="filter-select">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
        </select>
      </div>

      <div
        className="stats-grid"
        style={{ gridTemplateColumns: "repeat(4,1fr)" }}
      >
        {[
          { label: "Website Visitors", value: "12,840", change: "+22%" },
          { label: "App Active Users", value: "3,412", change: "+15%" },
          { label: "Avg Session Time", value: "4m 32s", change: "+8%" },
          { label: "Bounce Rate", value: "28%", change: "-5%" },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-card-value" style={{ fontSize: 26 }}>
              {s.value}
            </div>
            <div className="stat-card-label">{s.label}</div>
            <div className="stat-card-change">{s.change}</div>
          </div>
        ))}
      </div>

      <div className="card card-body">
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            letterSpacing: "0.04em",
            marginBottom: 12,
          }}
        >
          Top Pages
        </h3>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Page</th>
                <th>Views</th>
                <th>Unique</th>
                <th>Avg Time</th>
                <th>Bounce</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["/ecosystem", "4,210", "3,100", "5m 12s", "22%"],
                ["/companion", "3,100", "2,400", "4m 40s", "26%"],
                ["/insights", "2,890", "2,100", "6m 02s", "18%"],
                ["/origin", "1,940", "1,580", "3m 30s", "31%"],
                ["/trust", "1,820", "1,400", "4m 05s", "28%"],
              ].map(([p, v, u, t, b]) => (
                <tr key={p}>
                  <td>
                    <code style={{ fontSize: 12, color: "var(--pink)" }}>
                      {p}
                    </code>
                  </td>
                  <td>{v}</td>
                  <td>{u}</td>
                  <td>{t}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function MedicalStats() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Medical Stats</h1>
          <p className="page-sub">
            Active pregnancies, risk analysis, and AI alert frequency
          </p>
        </div>
      </div>

      <div className="stats-grid">
        {[
          {
            label: "Active Pregnancies",
            value: "342",
            color: "#2563eb",
            bg: "rgba(37,99,235,0.1)",
          },
          {
            label: "1st Trimester",
            value: "98",
            color: "#059669",
            bg: "rgba(5,150,105,0.1)",
          },
          {
            label: "2nd Trimester",
            value: "142",
            color: "#7c3aed",
            bg: "rgba(124,58,237,0.1)",
          },
          {
            label: "3rd Trimester",
            value: "102",
            color: "#d97706",
            bg: "rgba(217,119,6,0.1)",
          },
          {
            label: "High-Risk",
            value: "23",
            color: "#dc2626",
            bg: "rgba(220,38,38,0.1)",
          },
          {
            label: "AI Alerts This Month",
            value: "186",
            color: "#c94060",
            bg: "rgba(201,64,96,0.1)",
          },
        ].map((s) => (
          <div key={s.label} className="stat-card">
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
            <div className="stat-card-value" style={{ fontSize: 28 }}>
              {s.value}
            </div>
            <div className="stat-card-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="card card-body">
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            letterSpacing: "0.04em",
            marginBottom: 14,
          }}
        >
          Risk Distribution
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            ["High Risk", "23", "6.7%", "var(--red)"],
            ["Medium Risk", "65", "19%", "var(--amber)"],
            ["Low Risk", "254", "74.3%", "var(--green)"],
          ].map(([l, n, p, c]) => (
            <div
              key={l}
              style={{ display: "flex", alignItems: "center", gap: 14 }}
            >
              <span style={{ fontSize: 13.5, minWidth: 100 }}>{l}</span>
              <div
                style={{
                  flex: 1,
                  height: 10,
                  background: "var(--bg-page)",
                  borderRadius: 5,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: p,
                    height: "100%",
                    background: c,
                    borderRadius: 5,
                  }}
                />
              </div>
              <span
                className="fw-500"
                style={{ fontSize: 14, minWidth: 30, textAlign: "right" }}
              >
                {n}
              </span>
              <span
                style={{ fontSize: 12, color: "var(--text-3)", minWidth: 36 }}
              >
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StaffDoctors() {
  const STAFF = [
    {
      name: "Dr. Nadia Farouk",
      role: "Obstetrician",
      patients: 18,
      alerts: 2,
      joined: "2024-01",
      active: true,
    },
    {
      name: "Dr. Sara Al-Amin",
      role: "Gynecologist",
      patients: 14,
      alerts: 0,
      joined: "2024-03",
      active: true,
    },
    {
      name: "Dr. Faris Nour",
      role: "Pediatrician",
      patients: 22,
      alerts: 1,
      joined: "2023-11",
      active: true,
    },
    {
      name: "Nurse Hana Khalid",
      role: "Senior Nurse",
      patients: 30,
      alerts: 0,
      joined: "2024-02",
      active: true,
    },
    {
      name: "Mariam Al-Rashid",
      role: "Content Manager",
      patients: 0,
      alerts: 0,
      joined: "2024-06",
      active: false,
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Staff & Doctors</h1>
          <p className="page-sub">{STAFF.length} team members</p>
        </div>
      </div>
      <div className="card">
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Patients</th>
                <th>Active Alerts</th>
                <th>Joined</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {STAFF.map((s, i) => (
                <tr key={i}>
                  <td>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          background: "rgba(201,64,96,0.1)",
                          color: "var(--pink)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        {s.name[0]}
                      </div>
                      <span className="fw-500" style={{ fontSize: 13.5 }}>
                        {s.name}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-blue">{s.role}</span>
                  </td>
                  <td style={{ fontSize: 13 }}>
                    {s.patients > 0 ? s.patients : "—"}
                  </td>
                  <td>
                    {s.alerts > 0 ? (
                      <span className="badge badge-red">
                        {s.alerts} alert{s.alerts > 1 ? "s" : ""}
                      </span>
                    ) : (
                      <span className="badge badge-green">Clear</span>
                    )}
                  </td>
                  <td style={{ fontSize: 13, color: "var(--text-2)" }}>
                    {s.joined}
                  </td>
                  <td>
                    <span
                      className={`badge ${s.active ? "badge-green" : "badge-gray"}`}
                    >
                      <span className="badge-dot" />
                      {s.active ? "Active" : "Inactive"}
                    </span>
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

export function Reports() {
  const toast = useToast();
  const REPORTS = [
    {
      name: "Monthly User Report",
      desc: "All user registrations and activity",
      period: "March 2025",
      type: "CSV",
    },
    {
      name: "Clinical Risk Summary",
      desc: "High-risk patient breakdown by doctor",
      period: "March 2025",
      type: "PDF",
    },
    {
      name: "AI Alert Frequency",
      desc: "Alert types, frequency, resolution rate",
      period: "Q1 2025",
      type: "PDF",
    },
    {
      name: "Platform Performance",
      desc: "Uptime, response times, error logs",
      period: "March 2025",
      type: "CSV",
    },
    {
      name: "Content Publishing Report",
      desc: "Blog and CMS activity summary",
      period: "March 2025",
      type: "CSV",
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Reports</h1>
          <p className="page-sub">Download and export platform data</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {REPORTS.map((r, i) => (
          <div
            key={i}
            className="card card-body"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  background:
                    r.type === "PDF"
                      ? "rgba(220,38,38,0.1)"
                      : "rgba(37,99,235,0.1)",
                  color: r.type === "PDF" ? "var(--red)" : "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 2H11.5L16 6.5V16H3V2Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.5 2V6.5H16"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
              </div>
              <div>
                <p className="fw-500" style={{ fontSize: 14, marginBottom: 2 }}>
                  {r.name}
                </p>
                <p style={{ fontSize: 12.5, color: "var(--text-2)" }}>
                  {r.desc} · {r.period}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="badge badge-gray">{r.type}</span>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => toast(`Downloading ${r.name}…`, "info")}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1V8M2.5 5L6 8.5L9.5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 11H11"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card card-body">
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14 }}>
          Custom Report
        </h3>
        <div className="form-grid form-grid-2" style={{ gap: 14 }}>
          <div className="form-field">
            <label className="form-label">Report Type</label>
            <select className="form-select">
              <option>User Activity</option>
              <option>Clinical Data</option>
              <option>Content</option>
              <option>System</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Date Range</label>
            <select className="form-select">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
              <option>Custom</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Format</label>
            <select className="form-select">
              <option>CSV</option>
              <option>PDF</option>
              <option>Excel</option>
            </select>
          </div>
        </div>
        <button
          className="btn btn-primary"
          style={{ marginTop: 16 }}
          onClick={() => toast("Generating custom report…", "info")}
        >
          Generate Report
        </button>
      </div>
    </div>
  );
}
