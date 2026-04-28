import { Image, Video, FolderKanban, BadgeCheck, ScanSearch } from "lucide-react";
import { AdminHero, AdminStats, AdminPanel } from "./AdminPageKit.jsx";

const STATS = [
  { label: "Assets Stored", value: "248", trend: "+16", note: "Images, video snippets, and article support visuals in one place.", icon: <Image size={18} /> },
  { label: "Collections", value: "14", trend: "tagged", note: "Organized by campaigns, product surfaces, and content pillars.", icon: <FolderKanban size={18} /> },
  { label: "Needs Metadata", value: "21", trend: "cleanup", note: "Mostly legacy files missing alt text and attribution notes.", icon: <ScanSearch size={18} /> },
  { label: "Approved Today", value: "9", trend: "reviewed", note: "Ready for homepage, blog, and campaign use.", icon: <BadgeCheck size={18} /> },
];

const COLLECTIONS = [
  { title: "Homepage Campaigns", text: "Hero visuals, trust illustrations, CTA media, and seasonal campaign assets.", meta: ["42 assets", "Frequently used"] },
  { title: "Medical Editorial", text: "Blog support imagery and medically reviewed diagrams for evergreen content.", meta: ["68 assets", "SEO linked"] },
  { title: "App Promotion", text: "Feature callouts, phone mockups, and push-notification campaign visuals.", meta: ["31 assets", "Product marketing"] },
];

const QUEUE = [
  { label: "Alt-text audit", sub: "Legacy media uploaded before the latest accessibility standards still needs cleanup.", progress: 58 },
  { label: "Campaign tagging", sub: "New Ramadan and women’s health assets need a shared taxonomy.", progress: 79 },
  { label: "Compression review", sub: "A few older blog images are heavier than target mobile budgets.", progress: 67 },
];

export default function MediaLibrary() {
  return (
    <div className="ap-page">
      <AdminHero
        eyebrow="Asset Control"
        title="Media Library"
        description="Organize, approve, and route visual assets across the ORA ecosystem with cleaner metadata and faster reuse."
        actions={
          <>
            <button className="btn btn-primary">Upload Assets</button>
            <button className="btn btn-secondary">Open Tag Manager</button>
          </>
        }
        asideTitle="Library health is good, but metadata cleanup still matters"
        asideText="The files are there and usable. The next quality jump comes from better tagging, accessibility data, and compression consistency."
        asideItems={[
          "Homepage and campaign folders are well organized.",
          "Older editorial imagery needs stronger metadata hygiene.",
          "Compression and alt-text fixes will support SEO and speed.",
        ]}
      />

      <AdminStats items={STATS} />

      <div className="ap-grid">
        <AdminPanel title="Asset Collections" subtitle="The most important groups the team is working with">
          <div className="ap-list">
            {COLLECTIONS.map((item) => (
              <div key={item.title} className="ap-list-item">
                <div className="ap-list-main">
                  <div className="ap-list-icon"><Video size={16} /></div>
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

        <AdminPanel title="Optimization Queue" subtitle="Quality improvements that unlock faster downstream use">
          <div className="ap-stack">
            {QUEUE.map((item) => (
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
    </div>
  );
}
