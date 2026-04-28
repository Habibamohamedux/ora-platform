import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Activity, Zap, ShieldCheck, 
  ChevronRight, AlertCircle, Database,
  ArrowUpRight, ArrowDownRight, Edit3,
  UserPlus, DownloadCloud, Megaphone,
  Flag, UserCheck, Ticket, Globe, TrendingUp, Search,
  MousePointer, Mail, Smartphone, FileText,
  Brain, Sparkles, Clock3, CheckCircle2,
  BarChart3, Shield, FolderOpen, KeyRound
} from 'lucide-react';
import './AdminDashboard.css';

const STATS = [
  { label: 'Ecosystem Users', value: '1,284', change: '+12%', up: true, icon: <Users size={20} /> },
  { label: 'Active Trackers', value: '892', change: '+5%', up: true, icon: <Activity size={20} /> },
  { label: 'Support Tickets', value: '14', change: '-2', up: true, icon: <Ticket size={20} /> },
  { label: 'SEO Visibility', value: '78/100', change: '+4%', up: true, icon: <Globe size={20} /> },
];

const RECENT_USERS = [
  { name: 'Layla Al-Hassan', email: 'layla@example.com', role: 'Mother', joined: '2h ago', status: 'active', trimester: '2nd Tri' },
  { name: 'Dr. Nadia Farouk', email: 'nadia@orahealth.ai', role: 'Doctor', joined: '4h ago', status: 'active', trimester: '—' },
  { name: 'Fatima Al-Rashid', email: 'fatima@gmail.com', role: 'Mother', joined: '6h ago', status: 'pending', trimester: '1st Tri' },
];

const ALERTS = [
  { patient: 'Layla Al-Hassan', level: 'high', msg: 'Heart rate elevated to 102 bpm (3 hrs)', time: '12m ago', id: 'A1' },
  { patient: 'Nour Abdullah', level: 'medium', msg: 'Reported high stress levels', time: '1h ago', id: 'A2' },
];

const MODERATION_QUEUE = [
  { type: 'doctor', user: 'Dr. Samira Ali', text: 'Pending license verification', icon: <UserCheck size={16} />, link: '/admin/users?role=doctor&focus=Samira' },
  { type: 'content', user: 'Community Forum', text: 'Flagged post in "Trimester 1 Support"', icon: <Flag size={16} />, link: '/admin/cms?review=1' },
];

const MODULE_USAGE = [
  { name: 'Pregnancy Tracker', percent: 65, color: 'var(--pink)' },
  { name: 'Menstrual Cycle Tracker', percent: 25, color: '#f59e0b' },
  { name: 'General Wellness', percent: 10, color: '#3b82f6' },
];

const SEO_DATA = [
  { metric: 'Top Keyword', value: '"Prenatal Tech Egypt"', progress: 85 },
  { metric: 'Organic Traffic', value: '12.4k views/mo', progress: 68 },
  { metric: 'Mobile Page Speed', value: '98/100', progress: 98 },
];

const SYSTEM_STATUS = [
  { name: 'Supabase Database', status: 'operational', uptime: '99.98%' },
  { name: 'AI Prediction Engine', status: 'operational', uptime: '99.91%' },
  { name: 'Media CDN', status: 'degraded', uptime: '97.4%' },
];

const SEO_CONTROLS = [
  {
    title: 'Metadata Coverage',
    value: '94%',
    note: '18 pages need title or meta description refinement',
    progress: 94,
    icon: <Search size={16} />,
  },
  {
    title: 'Schema & Rich Results',
    value: '31 pages',
    note: 'FAQ, Article, and MedicalWebPage structured data live',
    progress: 88,
    icon: <Globe size={16} />,
  },
  {
    title: 'Indexation Health',
    value: '3 warnings',
    note: 'One duplicate slug and two orphan drafts detected',
    progress: 76,
    icon: <ShieldCheck size={16} />,
  },
  {
    title: 'Performance Readiness',
    value: '98/100',
    note: 'Core Web Vitals are green on mobile and tablet',
    progress: 98,
    icon: <Zap size={16} />,
  },
];

const TRAFFIC_SOURCES = [
  { source: 'Organic Search', sessions: '8.2k', change: '+14%', share: 46, icon: <Search size={16} />, color: 'var(--pink)' },
  { source: 'Direct', sessions: '4.6k', change: '+6%', share: 25, icon: <MousePointer size={16} />, color: '#7c88ff' },
  { source: 'Email / CRM', sessions: '2.7k', change: '+11%', share: 15, icon: <Mail size={16} />, color: '#4ade80' },
  { source: 'Push / App', sessions: '1.8k', change: '+19%', share: 10, icon: <Smartphone size={16} />, color: '#f59e0b' },
  { source: 'Partner Referrals', sessions: '720', change: '+4%', share: 4, icon: <Users size={16} />, color: '#38bdf8' },
];

const CONTENT_OVERVIEW = [
  {
    title: 'Website CMS',
    count: '12 pages',
    sub: '3 pages waiting for legal copy review',
    route: '/admin/cms',
    icon: <FolderOpen size={18} />,
  },
  {
    title: 'Blog Pipeline',
    count: '7 drafts',
    sub: '2 scheduled for this week, 1 needs medical sign-off',
    route: '/admin/blog',
    icon: <Edit3 size={18} />,
  },
  {
    title: 'Media Library',
    count: '248 assets',
    sub: '16 items tagged for homepage and SEO refresh',
    route: '/admin/media',
    icon: <FileText size={18} />,
  },
];

const CONTENT_TASKS = [
  { label: 'Homepage hero refresh', owner: 'Content Design', status: 'In review' },
  { label: 'Fertility guide localization', owner: 'Medical Editorial', status: 'Scheduled' },
  { label: 'Trimester FAQ schema update', owner: 'SEO Team', status: 'Ready today' },
];

const ACCESS_LOGS = [
  { actor: 'Admin Superuser', action: 'Role policy updated for Editors', location: 'Cairo, EG', time: '9 min ago', risk: 'low' },
  { actor: 'Content Manager', action: 'Published article: Pregnancy nutrition myths', location: 'Dubai, AE', time: '22 min ago', risk: 'low' },
  { actor: 'Unknown attempt', action: 'Failed login on privileged account', location: 'Frankfurt, DE', time: '48 min ago', risk: 'high' },
  { actor: 'SEO Manager', action: 'Exported keyword performance CSV', location: 'Riyadh, SA', time: '1h ago', risk: 'medium' },
];

const REPORT_EXPORTS = [
  {
    title: 'Board Snapshot',
    description: 'Growth, retention, and executive KPI digest',
    meta: 'PDF · Mondays 08:00',
    cta: 'Generate',
    icon: <BarChart3 size={16} />,
    route: '/admin/reports?type=board',
  },
  {
    title: 'Content Performance',
    description: 'Top pages, underperformers, and publish cadence',
    meta: 'CSV · On demand',
    cta: 'Export',
    icon: <FileText size={16} />,
    route: '/admin/reports?type=content',
  },
  {
    title: 'Security Audit Trail',
    description: 'Privileged access, failed login attempts, and role changes',
    meta: 'XLSX · Daily 18:00',
    cta: 'Queue',
    icon: <Shield size={16} />,
    route: '/admin/reports?type=security',
  },
];

const AI_INSIGHTS = [
  {
    title: 'Retention Opportunity',
    impact: '+8.4% reactivation potential',
    confidence: '91% confidence',
    summary: 'Mothers who receive a push nudge within 45 minutes of a missed tracker check-in are returning 1.8x faster this week.',
  },
  {
    title: 'SEO Momentum',
    impact: '+1.9k organic sessions forecast',
    confidence: '87% confidence',
    summary: 'Three FAQ pages are close to ranking lift. Adding richer internal links and schema could unlock page-one movement in 10 to 14 days.',
  },
  {
    title: 'Risk Watch',
    impact: '2 privileged anomalies surfaced',
    confidence: '96% confidence',
    summary: 'A cluster of failed logins against a dormant admin account suggests credential stuffing behavior. Step-up auth is recommended today.',
  },
];

const AI_RECOMMENDATIONS = [
  'Launch a behavior-based push journey for inactive trimester users before 6 PM.',
  'Refresh metadata on the fertility cluster pages with location intent for Egypt and GCC.',
  'Require MFA re-verification on all high-privilege roles after the failed login spike.',
];

const HERO_PULSE = [
  { label: 'AI workflows live', value: '12', detail: '3 awaiting human review', icon: <Brain size={18} /> },
  { label: 'Critical risk events', value: '02', detail: 'Both tied to privileged access', icon: <ShieldCheck size={18} /> },
  { label: 'Growth opportunities', value: '07', detail: 'SEO and retention ready to act on', icon: <TrendingUp size={18} /> },
  { label: 'Exports scheduled', value: '05', detail: 'Board, audit, and content packs today', icon: <DownloadCloud size={18} /> },
];

const SECTION_LINKS = [
  { id: 'adm-performance', label: 'Performance' },
  { id: 'adm-operations', label: 'Operations' },
  { id: 'adm-intelligence', label: 'AI Layer' },
];

const WEEKLY_DATA = [42, 58, 35, 74, 62, 88, 65];
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const maxBar = Math.max(...WEEKLY_DATA);
  const maxTrafficShare = Math.max(...TRAFFIC_SOURCES.map((item) => item.share));

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const todayDay = DAYS[time.getDay() === 0 ? 6 : time.getDay() - 1];
  const hour = time.getHours();
  const shiftLabel = hour < 12 ? 'Morning' : hour < 18 ? 'Afternoon' : 'Evening';

  return (
    <div className={`adm-page-wrapper ${mounted ? 'is-mounted' : ''}`}>
      {/* Ambient background glows for the glass effect to interact with */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="adm-page-content">
        
        {/* ── HEADER ── */}
        <div className="adm-hero-shell animate-fade-in">
          <div className="adm-hero-copy">
            <div className="adm-hero-bar">
              <div>
                <span className="adm-hero-kicker">ORA Command Surface</span>
                <h1 className="adm-display-title">Executive Command</h1>
                <p className="adm-subtitle">Ecosystem intelligence, security, and growth overview.</p>
              </div>
              <div className="adm-hero-right">
                <div className="adm-live-badge glass-pill"><span className="adm-live-dot" /> Live</div>
                <div className="adm-date-badge glass-pill">
                  {time.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
              </div>
            </div>

            <div className="adm-hero-intro">
              <p className="adm-hero-lead">{shiftLabel} snapshot: acquisition is up, AI monitoring is active, and the content plus security teams both have clear next actions.</p>
              <div className="adm-hero-tags">
                <span className="adm-hero-tag">Growth pulse healthy</span>
                <span className="adm-hero-tag">AI routing active</span>
                <span className="adm-hero-tag">Security watch elevated</span>
              </div>
            </div>

            <div className="adm-command-links">
              {SECTION_LINKS.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className="adm-command-link"
                  onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          <div className="adm-hero-panel glass-panel">
            <div className="adm-hero-panel-head">
              <div>
                <span className="adm-panel-kicker">Executive Pulse</span>
                <h2 className="adm-panel-title">What needs attention now</h2>
              </div>
              <span className="adm-hero-panel-badge"><Sparkles size={14} /> ORA synced</span>
            </div>
            <div className="adm-hero-pulse-grid">
              {HERO_PULSE.map((item) => (
                <div key={item.label} className="adm-hero-pulse-card">
                  <div className="adm-hero-pulse-icon">{item.icon}</div>
                  <div className="adm-hero-pulse-copy">
                    <span className="adm-hero-pulse-value">{item.value}</span>
                    <span className="adm-hero-pulse-label">{item.label}</span>
                    <span className="adm-hero-pulse-detail">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="adm-hero-note">
              <div className="adm-hero-note-line"></div>
              <p>Recommended move: clear the security anomaly, then push the retention campaign before the day closes.</p>
            </div>
          </div>
        </div>

        <div className="adm-command-ribbon animate-stagger" style={{ '--delay': '0.06s' }}>
          <div className="adm-ribbon-chip"><span className="adm-ribbon-label">Conversion</span><strong>+12%</strong></div>
          <div className="adm-ribbon-chip"><span className="adm-ribbon-label">Content queue</span><strong>7 live items</strong></div>
          <div className="adm-ribbon-chip"><span className="adm-ribbon-label">Security posture</span><strong>92% trusted</strong></div>
          <div className="adm-ribbon-chip"><span className="adm-ribbon-label">Search momentum</span><strong>3 pages close to lift</strong></div>
        </div>

        {/* ── QUICK ACTIONS ── */}
        <div className="adm-quick-actions-row animate-stagger" style={{ '--delay': '0.1s' }}>
          <button className="adm-quick-btn primary interactive" onClick={() => navigate('/admin/users?mode=add')}>
            <UserPlus size={16} className="btn-icon" /> Add Consultant
          </button>
          <button className="adm-quick-btn glass interactive" onClick={() => navigate('/admin/notifications?composer=1')}>
            <Megaphone size={16} className="btn-icon" /> Broadcast
          </button>
          <button className="adm-quick-btn glass interactive" onClick={() => navigate('/admin/blog?editor=1')}>
            <Edit3 size={16} className="btn-icon" /> Publish Article
          </button>
          <button className="adm-quick-btn alert interactive" onClick={() => navigate('/admin/cms?review=1')}>
            <Flag size={16} className="btn-icon" /> Review Content
          </button>
          <button className="adm-quick-btn outline interactive" onClick={() => navigate('/admin/reports?type=content')}>
            <DownloadCloud size={16} className="btn-icon" /> Export Reports
          </button>
        </div>

        <div className="adm-section-header animate-stagger" id="adm-performance" style={{ '--delay': '0.18s' }}>
          <div>
            <span className="adm-section-kicker">Performance Layer</span>
            <h2 className="adm-section-title">Growth, engagement, and platform health</h2>
          </div>
          <p className="adm-section-note">A tighter view of usage, SEO traction, user movement, alerts, and infrastructure stability.</p>
        </div>

        {/* ── KPI STATS ── */}
        <div className="adm-stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="adm-stat-card glass-panel interactive animate-stagger" style={{ '--delay': `${0.2 + (i * 0.1)}s` }}>
              <div className="adm-stat-header">
                <div className="adm-stat-icon-box">{s.icon}</div>
                <span className={`adm-trend ${s.up ? 'up' : 'down'}`}>
                  {s.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {s.change}
                </span>
              </div>
              <h2 className="adm-stat-value">{s.value}</h2>
              <p className="adm-stat-label">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── MAIN DATA GRID ── */}
        <div className="adm-main-grid">
          
          {/* LEFT COLUMN */}
          <div className="adm-col-left">
            
            <div className="glass-panel p-24 animate-stagger hover-lift" style={{ '--delay': '0.3s' }}>
              <div className="adm-card-head">
                <div>
                  <h3 className="adm-card-title">Ecosystem Engagement</h3>
                  <p className="adm-card-sub">Daily active users across all modules</p>
                </div>
                <TrendingUp size={20} className="text-dim" />
              </div>
              <div className="adm-chart-container">
                {WEEKLY_DATA.map((v, i) => (
                  <div key={i} className="adm-chart-bar-wrap group">
                    <span className="adm-chart-val">{v}</span>
                    <div className="adm-chart-bar" style={{ height: mounted ? `${(v/maxBar)*100}%` : '0%', background: DAYS[i] === todayDay ? 'var(--pink)' : 'var(--border-mid)' }}></div>
                    <span className={`adm-chart-label ${DAYS[i] === todayDay ? 'active' : ''}`}>{DAYS[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-24 mt-20 animate-stagger hover-lift" style={{ '--delay': '0.4s' }}>
              <div className="adm-card-head">
                <div>
                  <h3 className="adm-card-title">SEO & Organic Growth</h3>
                </div>
                <button className="adm-text-link" onClick={() => navigate('/admin/seo')}>Report <ChevronRight size={14} className="link-arrow" /></button>
              </div>
              <div className="adm-seo-list">
                {SEO_DATA.map((item, i) => (
                  <div key={i} className="adm-seo-item">
                    <div className="adm-seo-meta">
                      <span className="fw-600 text-light">{item.metric}</span>
                      <span className="text-sm text-dim">{item.value}</span>
                    </div>
                    <div className="adm-progress-bg">
                      <div className="adm-progress-fill" style={{ width: mounted ? `${item.progress}%` : '0%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-24 mt-20 animate-stagger hover-lift" style={{ '--delay': '0.5s' }}>
              <div className="adm-card-head">
                <div>
                  <h3 className="adm-card-title">Recent Network Joins</h3>
                </div>
                <button className="adm-text-link" onClick={() => navigate('/admin/users')}>All Users <ChevronRight size={14} className="link-arrow" /></button>
              </div>
              <div className="adm-table-wrap">
                <table className="adm-table">
                  <thead>
                    <tr><th>User</th><th>Role</th><th>Status/Phase</th><th>Joined</th></tr>
                  </thead>
                  <tbody>
                    {RECENT_USERS.map((u, i) => (
                      <tr key={i} className="interactive-row" onClick={() => navigate(`/admin/users?focus=${encodeURIComponent(u.email)}`)}>
                        <td>
                          <div className="adm-user-cell">
                            <span className="fw-500 text-light">{u.name}</span>
                            <span className="text-dim text-xs">{u.email}</span>
                          </div>
                        </td>
                        <td><span className="adm-role-pill">{u.role}</span></td>
                        <td>
                          <div className="adm-status-group">
                            <span className={`adm-status-badge ${u.status}`}><span className="adm-status-dot"></span>{u.status}</span>
                            {u.trimester !== '—' && <span className="adm-trim-badge">{u.trimester}</span>}
                          </div>
                        </td>
                        <td className="text-dim text-sm">{u.joined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="adm-col-right">
            
            <div className="glass-panel p-24 animate-stagger hover-lift" style={{ '--delay': '0.35s' }}>
              <div className="adm-card-head">
                <h3 className="adm-card-title">Priority AI Alerts</h3>
                <span className="adm-badge-red pulse-bg">2 Active</span>
              </div>
              <div className="adm-alert-list">
                {ALERTS.map((a, i) => (
                  <div key={i} className={`adm-alert-item ${a.level} interactive-card`} onClick={() => navigate(`/admin/notifications?alert=${a.id}`)}>
                    <AlertCircle size={18} className="adm-alert-icon" />
                    <div className="adm-alert-body">
                      <p className="adm-alert-text"><strong>{a.patient}</strong></p>
                      <p className="adm-alert-msg">{a.msg}</p>
                      <span className="text-xs text-dim mt-4 block">{a.time}</span>
                    </div>
                    <ChevronRight size={16} className="alert-arrow" />
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-24 mt-20 animate-stagger hover-lift" style={{ '--delay': '0.45s' }}>
              <div className="adm-card-head">
                <h3 className="adm-card-title">Action Queue</h3>
              </div>
              <div className="adm-queue-list">
                {MODERATION_QUEUE.map((q, i) => (
                  <div key={i} className="adm-queue-item interactive-card" onClick={() => navigate(q.link)}>
                    <div className={`adm-queue-icon ${q.type}`}>{q.icon}</div>
                    <div className="adm-queue-info">
                      <p className="fw-500 text-light text-sm">{q.user}</p>
                      <p className="text-xs text-dim">{q.text}</p>
                    </div>
                    <ChevronRight size={14} className="queue-arrow" />
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-24 mt-20 animate-stagger hover-lift" style={{ '--delay': '0.55s' }}>
              <div className="adm-card-head">
                <h3 className="adm-card-title">Module Distribution</h3>
              </div>
              <div className="adm-module-list">
                {MODULE_USAGE.map((m, i) => (
                  <div key={i} className="adm-module-item group cursor-pointer">
                    <div className="adm-module-meta">
                      <span className="text-sm fw-500 text-light group-hover">{m.name}</span>
                      <span className="text-xs fw-600" style={{ color: m.color }}>{m.percent}%</span>
                    </div>
                    <div className="adm-progress-bg slim">
                      <div className="adm-progress-fill group-hover-expand" style={{ width: mounted ? `${m.percent}%` : '0%', background: m.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-24 mt-20 animate-stagger hover-lift" style={{ '--delay': '0.65s' }}>
              <div className="adm-card-head">
                <h3 className="adm-card-title">Infrastructure</h3>
              </div>
              <div className="adm-sys-list">
                {SYSTEM_STATUS.map((s, i) => (
                  <div key={i} className="adm-sys-item interactive-row">
                    <div className="adm-sys-info">
                      <Database size={14} className="text-dim sys-icon" />
                      <span className="text-sm fw-500 text-light">{s.name}</span>
                    </div>
                    <span className={`adm-sys-badge ${s.status}`}>{s.status}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="adm-section-header animate-stagger" id="adm-operations" style={{ '--delay': '0.68s' }}>
          <div>
            <span className="adm-section-kicker">Operations Layer</span>
            <h2 className="adm-section-title">Control panels for growth, governance, and output</h2>
          </div>
          <p className="adm-section-note">The operating surface for SEO, channel mix, content workflow, security review, exports, and executive AI guidance.</p>
        </div>

        <div className="adm-ops-grid">
          <div className="glass-panel p-24 animate-stagger hover-lift adm-ops-card" style={{ '--delay': '0.7s' }}>
            <div className="adm-card-head">
              <div>
                <h3 className="adm-card-title">Full SEO Control Panel</h3>
                <p className="adm-card-sub">Visibility, indexation, structured data, and page readiness</p>
              </div>
              <button className="adm-text-link" onClick={() => navigate('/admin/seo')}>Open Manager <ChevronRight size={14} className="link-arrow" /></button>
            </div>
            <div className="adm-feature-grid">
              {SEO_CONTROLS.map((item) => (
                <div key={item.title} className="adm-feature-tile">
                  <div className="adm-feature-icon">{item.icon}</div>
                  <div className="adm-feature-copy">
                    <div className="adm-feature-topline">
                      <span className="fw-600 text-light">{item.title}</span>
                      <span className="adm-feature-value">{item.value}</span>
                    </div>
                    <p className="adm-feature-note">{item.note}</p>
                  </div>
                  <div className="adm-progress-bg">
                    <div className="adm-progress-fill" style={{ width: mounted ? `${item.progress}%` : '0%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-24 animate-stagger hover-lift adm-ops-card" style={{ '--delay': '0.78s' }}>
            <div className="adm-card-head">
              <div>
                <h3 className="adm-card-title">Traffic Sources</h3>
                <p className="adm-card-sub">Session mix, growth trend, and acquisition balance</p>
              </div>
              <div className="adm-inline-stat">
                <span className="adm-inline-stat-value">18.0k</span>
                <span className="adm-inline-stat-label">monthly sessions</span>
              </div>
            </div>
            <div className="adm-source-list">
              {TRAFFIC_SOURCES.map((item) => (
                <div key={item.source} className="adm-source-row">
                  <div className="adm-source-main">
                    <div className="adm-source-name">
                      <span className="adm-source-icon" style={{ color: item.color }}>{item.icon}</span>
                      <div>
                        <p className="fw-600 text-light">{item.source}</p>
                        <span className="text-xs text-dim">{item.sessions} sessions</span>
                      </div>
                    </div>
                    <span className="adm-source-change">{item.change}</span>
                  </div>
                  <div className="adm-source-bar-track">
                    <div className="adm-source-bar-fill" style={{ width: mounted ? `${(item.share / maxTrafficShare) * 100}%` : '0%', background: item.color }}></div>
                  </div>
                  <div className="adm-source-share">{item.share}% share</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-24 animate-stagger hover-lift adm-ops-card" style={{ '--delay': '0.86s' }}>
            <div className="adm-card-head">
              <div>
                <h3 className="adm-card-title">Content Management</h3>
                <p className="adm-card-sub">Website, blog, and media operations in one glance</p>
              </div>
              <button className="adm-text-link" onClick={() => navigate('/admin/cms')}>Open CMS <ChevronRight size={14} className="link-arrow" /></button>
            </div>
            <div className="adm-content-grid">
              {CONTENT_OVERVIEW.map((item) => (
                <button key={item.title} className="adm-content-tile" onClick={() => navigate(item.route)}>
                  <span className="adm-content-icon">{item.icon}</span>
                  <span className="adm-content-count">{item.count}</span>
                  <span className="fw-600 text-light">{item.title}</span>
                  <span className="adm-feature-note">{item.sub}</span>
                </button>
              ))}
            </div>
            <div className="adm-task-list">
              {CONTENT_TASKS.map((task) => (
                <div key={task.label} className="adm-task-row">
                  <div className="adm-task-check"><CheckCircle2 size={14} /></div>
                  <div className="adm-task-copy">
                    <p className="fw-500 text-light text-sm">{task.label}</p>
                    <span className="text-xs text-dim">{task.owner}</span>
                  </div>
                  <span className="adm-task-status">{task.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-24 animate-stagger hover-lift adm-ops-card" style={{ '--delay': '0.94s' }}>
            <div className="adm-card-head">
              <div>
                <h3 className="adm-card-title">Security & Access Logs</h3>
                <p className="adm-card-sub">Privileged actions, failed attempts, and role-change visibility</p>
              </div>
              <button className="adm-text-link" onClick={() => navigate('/admin/roles')}>Permissions <ChevronRight size={14} className="link-arrow" /></button>
            </div>
            <div className="adm-security-summary">
              <div className="adm-security-score">
                <ShieldCheck size={18} />
                <div>
                  <span className="adm-security-score-value">92%</span>
                  <span className="adm-security-score-label">Trust posture</span>
                </div>
              </div>
              <div className="adm-security-chip"><KeyRound size={14} /> MFA enforced on 94% of privileged users</div>
            </div>
            <div className="adm-security-list">
              {ACCESS_LOGS.map((log) => (
                <div key={`${log.actor}-${log.time}`} className={`adm-security-row ${log.risk}`}>
                  <div className="adm-security-copy">
                    <div className="adm-security-heading">
                      <span className="fw-600 text-light">{log.actor}</span>
                      <span className={`adm-risk-pill ${log.risk}`}>{log.risk} risk</span>
                    </div>
                    <p className="adm-feature-note">{log.action}</p>
                    <div className="adm-security-meta">
                      <span><Clock3 size={12} /> {log.time}</span>
                      <span>{log.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-24 animate-stagger hover-lift adm-ops-card" style={{ '--delay': '1.02s' }}>
            <div className="adm-card-head">
              <div>
                <h3 className="adm-card-title">Reports & Export Center</h3>
                <p className="adm-card-sub">Executive packs, audit exports, and operational snapshots</p>
              </div>
              <button className="adm-text-link" onClick={() => navigate('/admin/reports')}>All exports <ChevronRight size={14} className="link-arrow" /></button>
            </div>
            <div className="adm-report-list">
              {REPORT_EXPORTS.map((report) => (
                <div key={report.title} className="adm-report-card">
                  <div className="adm-report-icon">{report.icon}</div>
                  <div className="adm-report-copy">
                    <p className="fw-600 text-light">{report.title}</p>
                    <p className="adm-feature-note">{report.description}</p>
                    <span className="text-xs text-dim">{report.meta}</span>
                  </div>
                  <button className="adm-report-btn" onClick={() => navigate(report.route)}>{report.cta}</button>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-24 animate-stagger hover-lift adm-ai-panel" id="adm-intelligence" style={{ '--delay': '1.1s' }}>
            <div className="adm-card-head">
              <div>
                <div className="adm-ai-kicker"><Sparkles size={14} /> ORA Intelligence</div>
                <h3 className="adm-card-title">AI Insights</h3>
                <p className="adm-card-sub">Live recommendations shaped by behavior, SEO movement, and risk detection</p>
              </div>
              <div className="adm-ai-badge"><Brain size={16} /> 3 models active</div>
            </div>
            <div className="adm-ai-grid">
              {AI_INSIGHTS.map((insight) => (
                <div key={insight.title} className="adm-ai-card">
                  <div className="adm-ai-card-top">
                    <span className="adm-ai-impact">{insight.impact}</span>
                    <span className="adm-ai-confidence">{insight.confidence}</span>
                  </div>
                  <h4 className="adm-ai-title">{insight.title}</h4>
                  <p className="adm-ai-summary">{insight.summary}</p>
                </div>
              ))}
            </div>
            <div className="adm-ai-actions">
              {AI_RECOMMENDATIONS.map((recommendation) => (
                <div key={recommendation} className="adm-ai-action-item">
                  <span className="adm-ai-action-dot"></span>
                  <span>{recommendation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
