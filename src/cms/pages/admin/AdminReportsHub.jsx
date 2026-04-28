import { useSearchParams } from "react-router-dom";
import { FileSpreadsheet, FileOutput, ShieldCheck, Sparkles, BarChart3, Clock3 } from "lucide-react";
import { AdminHero, AdminStats, AdminPanel, AdminBanner } from "./AdminPageKit.jsx";

const STATS = [
  { label: "Report Templates", value: "9", trend: "ready", note: "Executive, content, security, and growth formats are available.", icon: <FileSpreadsheet size={18} /> },
  { label: "Scheduled Exports", value: "5", trend: "today", note: "Board and audit packs are already queued for delivery.", icon: <Clock3 size={18} /> },
  { label: "Security Packs", value: "2", trend: "daily", note: "Privilege and failed-login reporting remain on schedule.", icon: <ShieldCheck size={18} /> },
  { label: "Executive Snapshots", value: "3", trend: "weekly", note: "Leadership summaries are aligned to the current KPI stack.", icon: <BarChart3 size={18} /> },
];

const EXPORTS = [
  { title: "Board Snapshot", text: "A polished executive readout covering growth, retention, risk, and AI signals.", meta: ["PDF", "Leadership"] },
  { title: "Content Performance", text: "Top pages, publish cadence, content efficiency, and editorial conversion outcomes.", meta: ["CSV", "Content team"] },
  { title: "Security Audit Trail", text: "Privileged access changes, failed logins, dormant accounts, and MFA posture data.", meta: ["XLSX", "Security team"] },
];

const SCHEDULE = [
  { label: "Monday board digest", sub: "Sent before the weekly leadership review begins.", progress: 100 },
  { label: "Daily security export", sub: "Queued for the close-of-day audit window.", progress: 88 },
  { label: "On-demand content exports", sub: "Ready for editors and growth whenever needed.", progress: 94 },
];

export default function AdminReportsHub() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  return (
    <div className="ap-page">
      <AdminHero
        eyebrow="Export Center"
        title="Reports Hub"
        description="Generate executive, operational, and audit-ready exports from one organized reporting surface."
        actions={
          <>
            <button className="btn btn-primary">Generate Report</button>
            <button className="btn btn-secondary">Manage Schedules</button>
          </>
        }
        asideTitle="Exports are healthy and structured for leadership use"
        asideText="This hub keeps recurring packs consistent and gives teams a clean place to pull content, security, and growth snapshots on demand."
        asideItems={[
          "Board, content, and security exports are all available.",
          "Scheduled packs are already configured for the current cycle.",
          "The main next step is wiring live data into each report stream.",
        ]}
        banner={
          type ? (
            <AdminBanner icon={<Sparkles size={16} />}>
              Report focus set to <strong>{type}</strong>. This hub is ready for that export flow.
            </AdminBanner>
          ) : null
        }
      />

      <AdminStats items={STATS} />

      <div className="ap-grid">
        <AdminPanel title="Available Exports" subtitle="The main report packs the admin team can generate">
          <div className="ap-list">
            {EXPORTS.map((item) => (
              <div key={item.title} className="ap-list-item">
                <div className="ap-list-main">
                  <div className="ap-list-icon"><FileOutput size={16} /></div>
                  <div>
                    <div className="ap-list-title">{item.title}</div>
                    <p className="ap-list-text">{item.text}</p>
                    <div className="ap-list-meta">
                      {item.meta.map((meta) => <span key={meta} className="ap-tag">{meta}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AdminPanel>

        <AdminPanel title="Delivery Readiness" subtitle="How prepared the export center is for recurring use">
          <div className="ap-stack">
            {SCHEDULE.map((item) => (
              <div key={item.label} className="ap-stack">
                <div className="ap-row">
                  <div className="ap-row-text">
                    <div className="ap-row-label">{item.label}</div>
                    <div className="ap-row-sub">{item.sub}</div>
                  </div>
                  <span className="ap-pill success">{item.progress}%</span>
                </div>
                <div className="ap-progress"><span style={{ width: `${item.progress}%` }} /></div>
              </div>
            ))}
          </div>
        </AdminPanel>
      </div>
    </div>
  );
}
