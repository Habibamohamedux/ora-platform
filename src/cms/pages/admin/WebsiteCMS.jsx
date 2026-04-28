import { useNavigate, useSearchParams } from "react-router-dom";
import { LayoutTemplate, Monitor, Clock3, Sparkles, Layers3, CheckCheck } from "lucide-react";
import { AdminHero, AdminStats, AdminPanel, AdminBanner } from "./AdminPageKit.jsx";

const STATS = [
  { label: "Managed Pages", value: "32", trend: "+4", note: "Across landing, evergreen, and support content.", icon: <LayoutTemplate size={18} /> },
  { label: "Pending Reviews", value: "6", trend: "editorial", note: "Legal and medical copy review items are queued.", icon: <Clock3 size={18} /> },
  { label: "Homepage Modules", value: "9", trend: "live", note: "Hero, trust, CTA, and article blocks are active.", icon: <Layers3 size={18} /> },
  { label: "Published Today", value: "3", trend: "shipped", note: "All changes passed content QA before publishing.", icon: <CheckCheck size={18} /> },
];

const PAGE_BLOCKS = [
  { title: "Homepage", text: "Hero messaging, trust strip, featured content, and campaign banners.", meta: ["Live", "High traffic"] },
  { title: "Pregnancy Content Hub", text: "Educational articles, FAQs, and trimester navigation modules.", meta: ["Review due", "SEO linked"] },
  { title: "Doctor Discovery", text: "Provider spotlight sections, consultations CTA, and local trust badges.", meta: ["Needs refresh", "Commercial"] },
];

const WORKFLOW = [
  { label: "Homepage hero refresh", sub: "Awaiting final visual selection and medical approval.", progress: 72 },
  { label: "Clinic landing page rollout", sub: "Three regional variants are written and ready for scheduling.", progress: 86 },
  { label: "Arabic localization cleanup", sub: "Four legacy content blocks still need terminology review.", progress: 64 },
];

const PAGE_TABLE = [
  ["Homepage", "Published", "Today 08:30", "Strong"],
  ["About ORA", "Draft changes", "Today 10:15", "Stable"],
  ["Pregnancy Guides", "In review", "Yesterday", "Needs legal"],
  ["Book Consultation", "Ready", "Today 11:40", "Schedule"],
];

export default function WebsiteCMS() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const review = searchParams.get("review");

  return (
    <div className="ap-page">
      <AdminHero
        eyebrow="Content Control"
        title="Website CMS"
        description="Shape the public-facing ORA experience across landing pages, evergreen content, campaign modules, and trust-building surfaces."
        actions={
          <>
            <button className="btn btn-primary">Create Landing Page</button>
            <button className="btn btn-secondary" onClick={() => navigate("/admin/media")}>Open Media Library</button>
          </>
        }
        asideTitle="The homepage and clinic flows are the main conversion levers"
        asideText="This workspace is designed for fast content decisions: what is live, what needs review, and what should be promoted next."
        asideItems={[
          "Homepage modules are healthy and easy to iterate.",
          "Localized clinic pages are nearly ready to publish.",
          "Review backlog is small enough to clear this cycle.",
        ]}
        banner={
          review ? (
            <AdminBanner icon={<Sparkles size={16} />}>
              Review mode is active. The page below is ready to help the team clear pending content approvals faster.
            </AdminBanner>
          ) : null
        }
      />

      <AdminStats items={STATS} />

      <div className="ap-split">
        <AdminPanel title="Managed Surfaces" subtitle="High-value website areas under CMS control">
          <div className="ap-list">
            {PAGE_BLOCKS.map((item) => (
              <div key={item.title} className="ap-list-item">
                <div className="ap-list-main">
                  <div className="ap-list-icon"><Monitor size={16} /></div>
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

        <AdminPanel title="Workflow Status" subtitle="What the content team should move next">
          <div className="ap-stack">
            {WORKFLOW.map((item) => (
              <div key={item.label} className="ap-stack">
                <div className="ap-row">
                  <div className="ap-row-text">
                    <div className="ap-row-label">{item.label}</div>
                    <div className="ap-row-sub">{item.sub}</div>
                  </div>
                  <span className="ap-pill">{item.progress}%</span>
                </div>
                <div className="ap-progress"><span style={{ width: `${item.progress}%` }} /></div>
              </div>
            ))}
          </div>
        </AdminPanel>
      </div>

      <AdminPanel title="Page Inventory" subtitle="Publication state across the current CMS portfolio">
        <div className="ap-table-wrap">
          <table className="ap-table">
            <thead>
              <tr>
                <th>Page</th>
                <th>Status</th>
                <th>Last Updated</th>
                <th>Momentum</th>
              </tr>
            </thead>
            <tbody>
              {PAGE_TABLE.map(([page, status, updated, momentum]) => (
                <tr key={page}>
                  <td className="ap-table-strong">{page}</td>
                  <td><span className="ap-pill">{status}</span></td>
                  <td>{updated}</td>
                  <td>{momentum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminPanel>
    </div>
  );
}
