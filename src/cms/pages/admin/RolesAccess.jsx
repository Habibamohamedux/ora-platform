import { ShieldCheck, KeyRound, UserCog, LockKeyhole, BadgeAlert } from "lucide-react";
import { AdminHero, AdminStats, AdminPanel } from "./AdminPageKit.jsx";

const STATS = [
  { label: "Defined Roles", value: "6", trend: "active", note: "Admin, doctor, manager, nurse, content, and IT are currently configured.", icon: <UserCog size={18} /> },
  { label: "Privileged Users", value: "18", trend: "monitored", note: "MFA and access policy review matter most for this group.", icon: <KeyRound size={18} /> },
  { label: "Policy Changes", value: "4", trend: "7 days", note: "Recent updates mostly focused on editor and support permissions.", icon: <ShieldCheck size={18} /> },
  { label: "Risk Flags", value: "2", trend: "watch", note: "Both tied to unusual login attempts on dormant accounts.", icon: <BadgeAlert size={18} /> },
];

const ROLE_BLOCKS = [
  { title: "Administrators", text: "Full system control, publishing, user management, and operational visibility.", meta: ["Highest privilege", "Strict MFA"] },
  { title: "Content Managers", text: "Website, blog, and SEO operations with publishing guardrails and approvals.", meta: ["Editorial access", "Low system risk"] },
  { title: "Doctors & Clinical Staff", text: "Care data access, health workflows, and limited content interaction.", meta: ["Sensitive data", "Scoped tools"] },
];

const POLICY_CHECKS = [
  { label: "MFA enforcement", sub: "Most privileged roles are covered, but a small number still need full verification refresh.", progress: 94 },
  { label: "Least privilege hygiene", sub: "Editorial and support access is improving, though older role drift still exists.", progress: 78 },
  { label: "Dormant account cleanup", sub: "Inactive privileged accounts need faster review and automatic restriction rules.", progress: 63 },
];

export default function RolesAccess() {
  return (
    <div className="ap-page">
      <AdminHero
        eyebrow="Security Control"
        title="Roles & Access"
        description="Manage permissions, reduce privilege drift, and keep the ORA admin environment secure as teams grow."
        actions={
          <>
            <button className="btn btn-primary">Review Role Policies</button>
            <button className="btn btn-secondary">Export Access Audit</button>
          </>
        }
        asideTitle="Access design is stable, but policy hygiene needs ongoing attention"
        asideText="The structure is sound. The risk is not missing roles, it is drift over time: dormant accounts, one-off permissions, and inconsistent enforcement."
        asideItems={[
          "MFA coverage is strong but not complete.",
          "Dormant privileged users need stricter automation.",
          "Role clarity is good enough to scale safely.",
        ]}
      />

      <AdminStats items={STATS} />

      <div className="ap-grid">
        <AdminPanel title="Role Structure" subtitle="How the platform is currently segmented">
          <div className="ap-list">
            {ROLE_BLOCKS.map((item) => (
              <div key={item.title} className="ap-list-item">
                <div className="ap-list-main">
                  <div className="ap-list-icon"><LockKeyhole size={16} /></div>
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

        <AdminPanel title="Access Policy Health" subtitle="Guardrails that should stay under continuous review">
          <div className="ap-stack">
            {POLICY_CHECKS.map((item) => (
              <div key={item.label} className="ap-stack">
                <div className="ap-row">
                  <div className="ap-row-text">
                    <div className="ap-row-label">{item.label}</div>
                    <div className="ap-row-sub">{item.sub}</div>
                  </div>
                  <span className={`ap-pill ${item.progress < 70 ? "warning" : "success"}`}>{item.progress}%</span>
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
