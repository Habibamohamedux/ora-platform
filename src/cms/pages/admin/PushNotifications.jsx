import { useSearchParams } from "react-router-dom";
import { BellRing, Send, Users, Brain, Sparkles, AlertTriangle } from "lucide-react";
import { AdminHero, AdminStats, AdminPanel, AdminBanner } from "./AdminPageKit.jsx";

const STATS = [
  { label: "Active Journeys", value: "6", trend: "live", note: "Lifecycle, reminders, and AI-informed nudges are running.", icon: <BellRing size={18} /> },
  { label: "Messages Sent", value: "42k", trend: "+19%", note: "This week’s push volume is driving healthy reactivation.", icon: <Send size={18} /> },
  { label: "Audience Segments", value: "14", trend: "targeted", note: "Behavior and lifecycle targeting are improving relevance.", icon: <Users size={18} /> },
  { label: "AI Optimized", value: "3", trend: "adaptive", note: "Send time and message sequencing are being adjusted automatically.", icon: <Brain size={18} /> },
];

const CAMPAIGNS = [
  { title: "Missed tracker reminder", text: "Behavioral reminder for mothers who skipped a check-in within the last 24 hours.", meta: ["Reactivation", "High ROI"] },
  { title: "Article follow-up journey", text: "Users who read fertility content receive a two-step educational and CTA sequence.", meta: ["Content loop", "In progress"] },
  { title: "Doctor appointment prompt", text: "Clinical follow-up nudges based on prior consultation intent and session behavior.", meta: ["Product", "Sensitive copy"] },
];

const PERFORMANCE = [
  { label: "Open rate quality", sub: "Message relevance is strong for behavior-based reminders and lifecycle prompts.", progress: 84 },
  { label: "Send-time optimization", sub: "AI is improving delivery windows, but evening traffic still has room to grow.", progress: 76 },
  { label: "Fatigue protection", sub: "Frequency caps are working, though two journeys overlap more than they should.", progress: 67 },
];

export default function PushNotifications() {
  const [searchParams] = useSearchParams();
  const composer = searchParams.get("composer");
  const alert = searchParams.get("alert");

  return (
    <div className="ap-page">
      <AdminHero
        eyebrow="Messaging Engine"
        title="Push Notifications"
        description="Plan campaigns, monitor journeys, and shape behavioral messaging so ORA reaches users at the right moment."
        actions={
          <>
            <button className="btn btn-primary">Create Campaign</button>
            <button className="btn btn-secondary">Open Audience Builder</button>
          </>
        }
        asideTitle="This workspace is where retention becomes operational"
        asideText="Push is strongest when timing, copy, and audience rules move together. The current setup is good and can still get sharper."
        asideItems={[
          "Reactivation nudges are the highest-performing journey right now.",
          "AI send-time tuning is already creating measurable gains.",
          "Fatigue control needs a final pass across overlapping flows.",
        ]}
        banner={
          composer || alert ? (
            <AdminBanner icon={alert ? <AlertTriangle size={16} /> : <Sparkles size={16} />}>
              {alert ? (
                <>Dashboard alert <strong>{alert}</strong> routed here. Review the relevant journey and escalation messaging.</>
              ) : (
                <>Broadcast composer shortcut is active. This page is ready for a new campaign or lifecycle send.</>
              )}
            </AdminBanner>
          ) : null
        }
      />

      <AdminStats items={STATS} />

      <div className="ap-grid">
        <AdminPanel title="Active Campaigns" subtitle="Journeys and sends that shape user return behavior">
          <div className="ap-list">
            {CAMPAIGNS.map((item) => (
              <div key={item.title} className="ap-list-item">
                <div className="ap-list-main">
                  <div className="ap-list-icon"><BellRing size={16} /></div>
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

        <AdminPanel title="Journey Performance" subtitle="What is healthy and what needs tuning next">
          <div className="ap-stack">
            {PERFORMANCE.map((item) => (
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
