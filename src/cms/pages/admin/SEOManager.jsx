import { useSearchParams } from "react-router-dom";
import { Globe, Search, Zap, ShieldCheck, Sparkles, Link2, TriangleAlert } from "lucide-react";
import { AdminHero, AdminStats, AdminPanel, AdminBanner } from "./AdminPageKit.jsx";

const STATS = [
  { label: "Organic Sessions", value: "12.4k", trend: "+14%", note: "Up from the last 30-day window.", icon: <Globe size={18} /> },
  { label: "Indexed Pages", value: "96", trend: "+3", note: "Three new guides were picked up this week.", icon: <Search size={18} /> },
  { label: "Site Health", value: "92%", trend: "+5%", note: "Technical fixes reduced crawl friction.", icon: <ShieldCheck size={18} /> },
  { label: "Page Speed", value: "98", trend: "mobile", note: "Core Web Vitals passing on key landing pages.", icon: <Zap size={18} /> },
];

const OPPORTUNITIES = [
  { title: "Pregnancy FAQ cluster", text: "Add internal links and refresh schema to improve page-one movement in Egypt and GCC search intent.", meta: ["Potential lift: +1.9k sessions", "ETA: 10-14 days"] },
  { title: "Prenatal nutrition pillar", text: "Meta title and description are strong, but the article needs stronger question-led subheadings for snippet coverage.", meta: ["Potential lift: +8 CTR", "Owner: Content SEO"] },
  { title: "Doctor consultation pages", text: "Local intent queries are rising. Create city-specific intros and unique FAQ content to avoid duplicate relevance.", meta: ["Potential lift: +11%", "Owner: Growth Team"] },
];

const TECH_CHECKS = [
  { label: "Structured data coverage", sub: "MedicalWebPage, FAQPage, and Article schema are present on the key content templates.", progress: 88 },
  { label: "Canonical consistency", sub: "One duplicate slug and two canonical mismatches need cleanup this cycle.", progress: 74 },
  { label: "Internal linking depth", sub: "Important educational pages are reachable within three clicks from the main content hubs.", progress: 81 },
  { label: "Media alt-text completeness", sub: "Homepage and blog featured imagery are tagged, but legacy library items still need metadata.", progress: 69 },
];

const PAGE_ROWS = [
  ["Homepage", "Healthy", "Title refresh shipped", "High priority"],
  ["Pregnancy Tracker", "Healthy", "FAQ schema live", "Monitoring"],
  ["Fertility Guide", "Opportunity", "Needs location intent rewrite", "Ready"],
  ["Doctor Directory", "Warning", "Duplicate copy between regions", "Review"],
];

export default function SEOManager() {
  const [searchParams] = useSearchParams();
  const focus = searchParams.get("focus");

  return (
    <div className="ap-page">
      <AdminHero
        eyebrow="Search Command"
        title="SEO Manager"
        description="Control metadata, indexing, technical quality, and content momentum from a single search performance surface."
        actions={
          <>
            <button className="btn btn-primary">Run Site Audit</button>
            <button className="btn btn-secondary">Export Keyword Pack</button>
          </>
        }
        asideTitle="High intent pages are ready for a lift"
        asideText="The next wins are mostly editorial and structural, not foundational. That means the team can improve rankings quickly without a heavy engineering cycle."
        asideItems={[
          "FAQ and guide pages have the clearest upside this week.",
          "Schema and speed are healthy enough to support content pushes.",
          "Canonical and duplicate cleanup is the main risk area.",
        ]}
        banner={
          focus ? (
            <AdminBanner icon={<Sparkles size={16} />}>
              Spotlight active for <strong>{focus}</strong>. This view is ready to support a focused optimization pass.
            </AdminBanner>
          ) : null
        }
      />

      <AdminStats items={STATS} />

      <div className="ap-grid">
        <AdminPanel title="Opportunity Queue" subtitle="Pages and clusters most likely to move quickly">
          <div className="ap-list">
            {OPPORTUNITIES.map((item) => (
              <div key={item.title} className="ap-list-item">
                <div className="ap-list-main">
                  <div className="ap-list-icon"><Sparkles size={16} /></div>
                  <div>
                    <div className="ap-list-title">{item.title}</div>
                    <p className="ap-list-text">{item.text}</p>
                    <div className="ap-list-meta">
                      {item.meta.map((meta) => (
                        <span key={meta} className="ap-tag">{meta}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AdminPanel>

        <AdminPanel title="Technical Health" subtitle="Foundational checks that protect discoverability">
          <div className="ap-stack">
            {TECH_CHECKS.map((item) => (
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

      <AdminPanel title="Priority Pages" subtitle="What should be reviewed by SEO, editorial, and product next">
        <div className="ap-table-wrap">
          <table className="ap-table">
            <thead>
              <tr>
                <th>Page</th>
                <th>Status</th>
                <th>Latest Update</th>
                <th>Next Action</th>
              </tr>
            </thead>
            <tbody>
              {PAGE_ROWS.map(([page, status, update, action]) => (
                <tr key={page}>
                  <td className="ap-table-strong">{page}</td>
                  <td>
                    <span className={`ap-pill ${status === "Warning" ? "danger" : status === "Opportunity" ? "warning" : "success"}`}>
                      {status === "Warning" ? <TriangleAlert size={12} /> : <Link2 size={12} />}
                      {status}
                    </span>
                  </td>
                  <td>{update}</td>
                  <td>{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminPanel>
    </div>
  );
}
