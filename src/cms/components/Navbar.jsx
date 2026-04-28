import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const PAGE_INFO = {
  "/admin/dashboard": {
    title: "Dashboard",
    sub: "Platform overview and key metrics",
  },
  "/admin/users": {
    title: "User Management",
    sub: "Manage all platform users",
  },
  "/admin/roles": {
    title: "Roles & Access",
    sub: "Configure permissions per role",
  },
  "/admin/cms": {
    title: "Website CMS",
    sub: "Manage all website page content",
  },
  "/admin/blog": {
    title: "Blog Manager",
    sub: "Posts, categories, and publishing",
  },
  "/admin/media": {
    title: "Media Library",
    sub: "Images, videos, and documents",
  },
  "/admin/seo": {
    title: "SEO Manager",
    sub: "Meta, slugs, and indexing per page",
  },
  "/admin/inbox": {
    title: "Contact Inbox",
    sub: "Messages from the website form",
  },
  "/admin/notifications": {
    title: "Notifications",
    sub: "Push and system notifications",
  },
  "/admin/settings": {
    title: "Settings",
    sub: "Account and system preferences",
  },
  "/doctor/dashboard": {
    title: "Clinical Overview",
    sub: "Today's schedule, patients, and alerts",
  },
  "/doctor/patients": {
    title: "My Patients",
    sub: "Search and filter patient records",
  },
  "/doctor/appointments": {
    title: "Appointments",
    sub: "Calendar and session management",
  },
  "/doctor/alerts": {
    title: "AI Alerts",
    sub: "Risk flags from ORA Intelligence",
  },
  "/doctor/health": {
    title: "Health Data",
    sub: "Live biometrics and monitoring",
  },
  "/doctor/settings": {
    title: "Settings",
    sub: "Account and notification preferences",
  },
  "/manager/dashboard": {
    title: "Global Overview",
    sub: "Platform-wide KPIs and metrics",
  },
  "/manager/analytics": {
    title: "Analytics",
    sub: "Website traffic and app usage",
  },
  "/manager/medical": {
    title: "Medical Stats",
    sub: "Pregnancy and AI alert data",
  },
  "/manager/staff": {
    title: "Staff & Doctors",
    sub: "Team management and performance",
  },
  "/manager/reports": {
    title: "Reports",
    sub: "Download and export platform data",
  },
  "/manager/settings": {
    title: "Settings",
    sub: "Account and notification preferences",
  },
};

const ROLE_META = {
  admin: {
    color: "#ff7491",
    bg: "rgba(201,64,96,0.15)",
    label: "Administrator",
  },
  doctor: { color: "#60a5fa", bg: "rgba(37,99,235,0.15)", label: "Doctor" },
  manager: { color: "#fbbf24", bg: "rgba(217,119,6,0.15)", label: "Manager" },
  nurse: { color: "#34d399", bg: "rgba(5,150,105,0.15)", label: "Nurse" },
  it: { color: "#22d3ee", bg: "rgba(8,145,178,0.15)", label: "IT Admin" },
  content: {
    color: "#a78bfa",
    bg: "rgba(124,58,237,0.15)",
    label: "Content Manager",
  },
};

const MOCK_NOTIFS = [
  {
    id: 1,
    title: "High-risk alert",
    sub: "Patient #1042 flagged by AI",
    time: "2m ago",
    unread: true,
    type: "alert",
  },
  {
    id: 2,
    title: "New contact message",
    sub: "Inquiry from website contact form",
    time: "18m ago",
    unread: true,
    type: "inbox",
  },
  {
    id: 3,
    title: "Blog post published",
    sub: '"Fetal Movement Guide" is now live',
    time: "1h ago",
    unread: false,
    type: "cms",
  },
  {
    id: 4,
    title: "New user registered",
    sub: "Dr. Nadia Hassan joined the system",
    time: "3h ago",
    unread: false,
    type: "user",
  },
];

const SEARCH_ITEMS = [
  { label: "User Management", path: "/admin/users", group: "Admin" },
  { label: "Blog Manager", path: "/admin/blog", group: "Admin" },
  { label: "SEO Manager", path: "/admin/seo", group: "Admin" },
  { label: "Media Library", path: "/admin/media", group: "Admin" },
  { label: "Contact Inbox", path: "/admin/inbox", group: "Admin" },
  { label: "Website CMS", path: "/admin/cms", group: "Admin" },
  { label: "Clinical Overview", path: "/doctor/dashboard", group: "Doctor" },
  { label: "My Patients", path: "/doctor/patients", group: "Doctor" },
  { label: "Appointments", path: "/doctor/appointments", group: "Doctor" },
  { label: "AI Alerts", path: "/doctor/alerts", group: "Doctor" },
  { label: "Global Overview", path: "/manager/dashboard", group: "Manager" },
  { label: "Analytics", path: "/manager/analytics", group: "Manager" },
  { label: "Reports", path: "/manager/reports", group: "Manager" },
  { label: "Settings", path: "/admin/settings", group: "System" },
  { label: "Roles & Access", path: "/admin/roles", group: "System" },
];

function NotifIcon({ type }) {
  const icons = {
    alert: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M7 1L13.5 12.5H0.5L7 1Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M7 6V9"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
    inbox: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect
          x="1"
          y="2.5"
          width="12"
          height="9"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M1 5L7 8.5L13 5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    cms: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect
          x="1"
          y="1"
          width="12"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M1 5H13M4 8H10M4 10.5H7"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    ),
    user: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle
          cx="7"
          cy="4.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M1.5 12.5C1.5 10.3 4 8.5 7 8.5S12.5 10.3 12.5 12.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  };
  return (
    <span className={`nb-notif-ico nb-notif-ico-${type}`}>
      {icons[type] || icons.cms}
    </span>
  );
}

export default function Navbar({
  profile,
  onMobileMenu,
  mobileOpen,
  onLogout,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const pageInfo = PAGE_INFO[location.pathname] || {
    title: "ORA Platform",
    sub: "",
  };
  const meta = ROLE_META[profile?.role] || ROLE_META.admin;
  const initials = (profile?.full_name || "U")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const unread = MOCK_NOTIFS.filter((n) => n.unread).length;

  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const [searchFocus, setSearchFocus] = useState(false);
  const notifRef = useRef(null);
  const userRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    function h(e) {
      if (notifRef.current && !notifRef.current.contains(e.target))
        setNotifOpen(false);
      if (userRef.current && !userRef.current.contains(e.target))
        setUserOpen(false);
      if (searchRef.current && !searchRef.current.contains(e.target))
        setSearchFocus(false);
    }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setSearchRes([]);
      return;
    }
    const q = search.toLowerCase();
    setSearchRes(
      SEARCH_ITEMS.filter((i) => i.label.toLowerCase().includes(q)).slice(0, 6),
    );
  }, [search]);

  const role = profile?.role;
  const settingsPath =
    role === "doctor"
      ? "/doctor/settings"
      : role === "manager"
        ? "/manager/settings"
        : "/admin/settings";

  return (
    <header className="nb glass-nav">
      {/* Mobile menu toggle */}
      <button
        className="nb-menu-btn"
        onClick={onMobileMenu}
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 4L16 16M16 4L4 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 5H17M3 10H17M3 15H17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Page title */}
      <div className="nb-title-wrap">
        <h1 className="nb-title">{pageInfo.title}</h1>
        {pageInfo.sub && <p className="nb-sub">{pageInfo.sub}</p>}
      </div>

      {/* Search */}
      <div className="nb-search-wrap" ref={searchRef}>
        <div className={`nb-search ${searchFocus ? "nb-search-focus" : ""}`}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle
              cx="6.5"
              cy="6.5"
              r="5"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <path
              d="M10 10L14 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search pages, users, content…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setSearchFocus(true)}
            aria-label="Search dashboard"
          />
          {search && (
            <button className="nb-search-clear" onClick={() => setSearch("")}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 2L10 10M10 2L2 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Search results Dropdown */}
        {searchFocus && (search ? searchRes.length > 0 : true) && (
          <div className="nb-search-panel glass-dropdown">
            {!search && (
              <div className="nb-search-hint">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle
                    cx="6"
                    cy="6"
                    r="4.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M9 9L12.5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Start typing to search across ORA…
              </div>
            )}
            {searchRes.map((item) => (
              <button
                key={item.path}
                className="nb-search-item"
                onClick={() => {
                  navigate(item.path);
                  setSearch("");
                  setSearchFocus(false);
                }}
              >
                <span className="nb-search-group">{item.group}</span>
                <span className="nb-search-label">{item.label}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="nb-search-arrow"
                >
                  <path
                    d="M2 10L10 2M10 2H4M10 2V8"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
            <a
              className="nb-search-docs"
              href="https://docs.orahealth.ai"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M2 2H8.5L11 4.5V11H2V2Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M8.5 2V4.5H11"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M4 6H9M4 8H7"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>
              View ORA Documentation
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        )}
      </div>

      <div className="nb-right">
        <a
          className="nb-doc-link"
          href="https://docs.orahealth.ai"
          target="_blank"
          rel="noreferrer"
          title="Documentation"
        >
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M3 2H11L15 6V15H3V2Z"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path d="M11 2V6H15" stroke="currentColor" strokeWidth="1.2" />
            <path
              d="M5.5 9H11.5M5.5 11.5H9"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </svg>
        </a>

        {/* Notifications */}
        <div className="nb-notif-wrap" ref={notifRef}>
          <button
            className={`nb-icon-btn ${notifOpen ? "nb-icon-active" : ""}`}
            onClick={() => {
              setNotifOpen((v) => !v);
              setUserOpen(false);
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 1.5C9 1.5 5 3.5 5 9V13.5H13V9C13 3.5 9 1.5 9 1.5Z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M1.5 13.5H16.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path
                d="M6.5 13.5C6.5 14.88 7.62 16 9 16C10.38 16 11.5 14.88 11.5 13.5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
            {unread > 0 && <span className="nb-badge glow">{unread}</span>}
          </button>

          {notifOpen && (
            <div className="nb-notif-panel glass-dropdown">
              <div className="nb-panel-hdr">
                <span className="nb-panel-title">Notifications</span>
                {unread > 0 && (
                  <span className="nb-unread-count">{unread} new</span>
                )}
              </div>
              {MOCK_NOTIFS.map((n) => (
                <div
                  key={n.id}
                  className={`nb-notif-item ${n.unread ? "nb-unread" : ""}`}
                >
                  <NotifIcon type={n.type} />
                  <div className="nb-notif-body">
                    <p className="nb-notif-title">{n.title}</p>
                    <p className="nb-notif-sub">{n.sub}</p>
                  </div>
                  <span className="nb-notif-time">{n.time}</span>
                </div>
              ))}
              <button className="nb-notif-all">View all notifications</button>
            </div>
          )}
        </div>

        <div className="nb-divider" />

        {/* User dropdown */}
        <div className="nb-user-wrap" ref={userRef}>
          <button
            className={`nb-user-btn ${userOpen ? "nb-user-active" : ""}`}
            onClick={() => {
              setUserOpen((v) => !v);
              setNotifOpen(false);
            }}
          >
            <div
              className="nb-avatar"
              style={{
                background: meta.bg,
                color: meta.color,
                border: `1px solid ${meta.color}40`,
              }}
            >
              {initials}
            </div>
            <div className="nb-user-info">
              <span className="nb-user-name">
                {profile?.full_name || "User"}
              </span>
              <span className="nb-user-role" style={{ color: meta.color }}>
                {meta.label}
              </span>
            </div>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              className={`nb-chevron ${userOpen ? "nb-chev-open" : ""}`}
            >
              <path
                d="M2.5 4.5L6.5 8.5L10.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {userOpen && (
            <div className="nb-user-panel glass-dropdown">
              <div className="nb-up-top">
                <div
                  className="nb-avatar nb-avatar-lg"
                  style={{
                    background: meta.bg,
                    color: meta.color,
                    border: `1px solid ${meta.color}40`,
                  }}
                >
                  {initials}
                </div>
                <div>
                  <p className="nb-up-name">{profile?.full_name || "User"}</p>
                  <p className="nb-up-email">{profile?.email}</p>
                  <span
                    className="nb-up-badge"
                    style={{
                      background: meta.bg,
                      color: meta.color,
                      border: `1px solid ${meta.color}30`,
                    }}
                  >
                    {meta.label}
                  </span>
                </div>
              </div>
              <div className="nb-up-divider" />
              <button
                className="nb-up-action"
                onClick={() => {
                  navigate(settingsPath);
                  setUserOpen(false);
                }}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <circle
                    cx="7.5"
                    cy="7.5"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M7.5 1V2.5M7.5 12.5V14M1 7.5H2.5M12.5 7.5H14M3 3L4 4M11 11L12 12M12 3L11 4M4 11L3 12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                Account Settings
              </button>
              <button
                className="nb-up-action"
                onClick={() =>
                  window.open("https://docs.orahealth.ai", "_blank")
                }
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M3 2H10L13 5V13H3V2Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M10 2V5H13"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M5 7.5H10M5 9.5H8"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                  />
                </svg>
                Documentation
              </button>
              <div className="nb-up-divider" />
              <button
                className="nb-up-action nb-up-danger"
                onClick={() => {
                  setUserOpen(false);
                  onLogout();
                }}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M5.5 13H3C2.45 13 2 12.55 2 12V3C2 2.45 2.45 2 3 2H5.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 11L13.5 7.5L10 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 7.5H13.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
