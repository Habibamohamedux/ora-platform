import { Mailbox, MessageSquareMore, Clock3, Sparkles, HeartHandshake } from "lucide-react";
import { AdminHero, AdminStats, AdminPanel } from "./AdminPageKit.jsx";

const STATS = [
  { label: "Open Conversations", value: "18", trend: "-3", note: "The team is keeping pace with incoming inquiries.", icon: <Mailbox size={18} /> },
  { label: "Priority Messages", value: "4", trend: "urgent", note: "Messages marked for medical, partnership, or complaint review.", icon: <MessageSquareMore size={18} /> },
  { label: "Avg. First Response", value: "38m", trend: "healthy", note: "Inside the target response window for core categories.", icon: <Clock3 size={18} /> },
  { label: "Resolved Today", value: "11", trend: "cleared", note: "Most were support and lead-routing inquiries.", icon: <HeartHandshake size={18} /> },
];

const INBOX = [
  { title: "Partnership inquiry from clinic group", text: "Requested product overview and integration options for maternal care workflow support.", meta: ["Business", "Reply today"] },
  { title: "Support request about tracker sync", text: "User reported a delay in wearable sync and needs troubleshooting steps.", meta: ["Support", "Assign technical"] },
  { title: "Medical question routed from website", text: "Needs compliance-safe response and handoff to approved medical contact channels.", meta: ["Medical", "Escalate"] },
];

const SLA = [
  { label: "Lead routing", sub: "Commercial and partnership messages should land with the right team within one hour.", progress: 91 },
  { label: "Support replies", sub: "Operational questions are moving well, with only a small same-day backlog.", progress: 83 },
  { label: "Sensitive escalation handling", sub: "Medical and compliance-sensitive threads need stronger templated workflows.", progress: 68 },
];

export default function ContactInbox() {
  return (
    <div className="ap-page">
      <AdminHero
        eyebrow="Response Center"
        title="Contact Inbox"
        description="Review inbound website conversations, prioritize escalations, and keep response quality aligned with the ORA brand."
        actions={
          <>
            <button className="btn btn-primary">Assign Priority Queue</button>
            <button className="btn btn-secondary">Open Templates</button>
          </>
        }
        asideTitle="Most messages are manageable, but escalation discipline matters"
        asideText="The inbox is healthy when routing is clean. Fast classification and templated responses will keep the team out of reactive mode."
        asideItems={[
          "Partnership and support messages are moving well.",
          "Medical questions need the strictest routing hygiene.",
          "Templates can reduce response time without hurting tone.",
        ]}
      />

      <AdminStats items={STATS} />

      <div className="ap-grid">
        <AdminPanel title="Priority Inbox" subtitle="Conversations that need action first">
          <div className="ap-list">
            {INBOX.map((item) => (
              <div key={item.title} className="ap-list-item">
                <div className="ap-list-main">
                  <div className="ap-list-icon"><Sparkles size={16} /></div>
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

        <AdminPanel title="Service Levels" subtitle="How the inbox is performing against target response standards">
          <div className="ap-stack">
            {SLA.map((item) => (
              <div key={item.label} className="ap-stack">
                <div className="ap-row">
                  <div className="ap-row-text">
                    <div className="ap-row-label">{item.label}</div>
                    <div className="ap-row-sub">{item.sub}</div>
                  </div>
                  <span className={`ap-pill ${item.progress < 75 ? "warning" : "success"}`}>{item.progress}%</span>
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
