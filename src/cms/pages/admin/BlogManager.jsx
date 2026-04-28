import { useSearchParams } from "react-router-dom";
import { PencilLine, CalendarClock, Newspaper, Sparkles, BookOpenText, CheckCheck } from "lucide-react";
import { AdminHero, AdminStats, AdminPanel, AdminBanner } from "./AdminPageKit.jsx";

const STATS = [
  { label: "Drafts In Flight", value: "7", trend: "+2", note: "Writers and medical reviewers are actively progressing the pipeline.", icon: <PencilLine size={18} /> },
  { label: "Scheduled Posts", value: "4", trend: "this week", note: "Publishing cadence is healthy through the next cycle.", icon: <CalendarClock size={18} /> },
  { label: "Top Category", value: "Pregnancy", trend: "41%", note: "Still the highest traffic and strongest retention category.", icon: <BookOpenText size={18} /> },
  { label: "Reviewed Articles", value: "18", trend: "approved", note: "Editorial and medical sign-off volume remains strong.", icon: <CheckCheck size={18} /> },
];

const PIPELINE = [
  { title: "Pregnancy nutrition myths", text: "Medical edits are complete. Final headline polish and social excerpt are left.", meta: ["Ready today", "Medical approved"] },
  { title: "PCOS and fertility checklist", text: "Strong search intent. Needs a clearer CTA and supporting media before publishing.", meta: ["Needs CTA", "SEO priority"] },
  { title: "Trimester 2 emotional changes", text: "Good engagement potential. Voice review is underway to match ORA tone.", meta: ["Brand review", "Feature candidate"] },
];

const CATEGORIES = [
  { label: "Pregnancy", sub: "Highest volume and strongest search demand this month.", progress: 88 },
  { label: "Fertility", sub: "Growing steadily as targeted landing pages feed article discovery.", progress: 72 },
  { label: "Wellness", sub: "Retention content performs well with existing users, but search is flatter.", progress: 61 },
];

export default function BlogManager() {
  const [searchParams] = useSearchParams();
  const editorMode = searchParams.get("editor");

  return (
    <div className="ap-page">
      <AdminHero
        eyebrow="Editorial Command"
        title="Blog Manager"
        description="Run the ORA publishing engine across drafts, categories, review cycles, and scheduled editorial campaigns."
        actions={
          <>
            <button className="btn btn-primary">Start New Article</button>
            <button className="btn btn-secondary">View Editorial Calendar</button>
          </>
        }
        asideTitle="The pipeline is healthy and close to publish-ready"
        asideText="Most of the work here is finishing polish: a CTA, a headline, a compliance pass, or a final media choice. That is good news for velocity."
        asideItems={[
          "Four articles are already scheduled for the current week.",
          "Medical review is not blocking the editorial pipeline right now.",
          "Fertility content is the next high-upside area to push.",
        ]}
        banner={
          editorMode ? (
            <AdminBanner icon={<Sparkles size={16} />}>
              Composer shortcut received. This screen is ready for the next article or publishing flow.
            </AdminBanner>
          ) : null
        }
      />

      <AdminStats items={STATS} />

      <div className="ap-grid">
        <AdminPanel title="Editorial Pipeline" subtitle="Stories moving through writing, compliance, and publishing">
          <div className="ap-list">
            {PIPELINE.map((item) => (
              <div key={item.title} className="ap-list-item">
                <div className="ap-list-main">
                  <div className="ap-list-icon"><Newspaper size={16} /></div>
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

        <AdminPanel title="Category Momentum" subtitle="Where editorial output is creating the most value">
          <div className="ap-stack">
            {CATEGORIES.map((item) => (
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
