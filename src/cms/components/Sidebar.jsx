import { NavLink } from 'react-router-dom'
import './Sidebar.css'

/* ── LOGO ── */
const OraLogo = ({ size = 26 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size * 0.878} viewBox="0 0 41 36" fill="none">
    <path fill="none" stroke="rgba(201,64,96,0.3)" strokeWidth="0.6" d="M39.8337 3.57807C38.9069 1.74903 36.8947 0.650491 34.8824 0.516659C30.9563 0.257359 27.2408 3.07899 25.0344 6.17943C23.3148 8.59899 22.2649 11.4506 21.824 14.4408C21.7261 15.1053 21.169 15.6174 20.4973 15.6174C19.8255 15.6174 19.2685 15.1053 19.1705 14.4408C18.7296 11.4506 17.6797 8.59899 15.9601 6.17943C13.7538 3.07899 10.0382 0.257359 6.11213 0.516659C4.09714 0.650491 2.08763 1.74903 1.16079 3.57807C0.559301 4.76583 0.444472 6.15155 0.521026 7.48708C0.715142 10.897 2.17785 14.1703 4.43343 16.6769C5.55985 17.9288 6.8886 18.9994 8.36224 19.7996C9.96986 20.6723 11.8263 20.8842 13.3765 21.8712V21.8991H13.4229L13.4394 21.9075L13.4612 21.9242C11.9958 23.7114 10.4264 25.4066 8.92545 27.1632C7.81817 28.4597 6.16954 29.7255 5.63367 31.457C5.08139 33.2553 6.48943 34.7275 8.05329 35.2768C9.92611 35.9348 11.9247 35.0593 13.2835 33.6875C15.9886 30.9538 17.8667 27.2628 18.7806 23.3072C18.9674 22.4989 19.6699 21.8991 20.4996 21.8991C21.3296 21.8991 22.0323 22.4994 22.2189 23.3082C23.1309 27.2634 25.0092 30.954 27.7165 33.6875C29.0726 35.0593 31.0711 35.9348 32.9467 35.2768C34.5078 34.7275 35.9186 33.2553 35.3663 31.457C34.8332 29.7255 33.1818 28.4597 32.0745 27.1632C30.5736 25.4066 29.0042 23.7114 27.5388 21.9242L27.5606 21.9075C29.1218 20.887 31.0083 20.6835 32.6378 19.7968C34.1114 18.9966 35.4401 17.9288 36.5666 16.6741C38.8194 14.1675 40.2849 10.8942 40.479 7.48429C40.5555 6.14876 40.4407 4.76304 39.8392 3.57528L39.8337 3.57807Z"/>
    <path fill="#c94060" d="M39.8337 3.57807C38.9069 1.74903 36.8947 0.650491 34.8824 0.516659C30.9563 0.257359 27.2408 3.07899 25.0344 6.17943C23.3148 8.59899 22.2649 11.4506 21.824 14.4408C21.7261 15.1053 21.169 15.6174 20.4973 15.6174C19.8255 15.6174 19.2685 15.1053 19.1705 14.4408C18.7296 11.4506 17.6797 8.59899 15.9601 6.17943C13.7538 3.07899 10.0382 0.257359 6.11213 0.516659C4.09714 0.650491 2.08763 1.74903 1.16079 3.57807C0.559301 4.76583 0.444472 6.15155 0.521026 7.48708C0.715142 10.897 2.17785 14.1703 4.43343 16.6769C5.55985 17.9288 6.8886 18.9994 8.36224 19.7996C9.96986 20.6723 11.8263 20.8842 13.3765 21.8712V21.8991H13.4229L13.4394 21.9075L13.4612 21.9242C11.9958 23.7114 10.4264 25.4066 8.92545 27.1632C7.81817 28.4597 6.16954 29.7255 5.63367 31.457C5.08139 33.2553 6.48943 34.7275 8.05329 35.2768C9.92611 35.9348 11.9247 35.0593 13.2835 33.6875C15.9886 30.9538 17.8667 27.2628 18.7806 23.3072C18.9674 22.4989 19.6699 21.8991 20.4996 21.8991C21.3296 21.8991 22.0323 22.4994 22.2189 23.3082C23.1309 27.2634 25.0092 30.954 27.7165 33.6875C29.0726 35.0593 31.0711 35.9348 32.9467 35.2768C34.5078 34.7275 35.9186 33.2553 35.3663 31.457C34.8332 29.7255 33.1818 28.4597 32.0745 27.1632C30.5736 25.4066 29.0042 23.7114 27.5388 21.9242L27.5606 21.9075C29.1218 20.887 31.0083 20.6835 32.6378 19.7968C34.1114 18.9966 35.4401 17.9288 36.5666 16.6741C38.8194 14.1675 40.2849 10.8942 40.479 7.48429C40.5555 6.14876 40.4407 4.76304 39.8392 3.57528L39.8337 3.57807Z"/>
  </svg>
)

/* ── ICONS ── */
const Ic = {
  dashboard: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><rect x="10" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><rect x="1" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/></svg>,
  users: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="8.5" cy="5" r="3" stroke="currentColor" strokeWidth="1.3"/><path d="M2 15.5C2 12.46 4.91 10 8.5 10C12.09 10 15 12.46 15 15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  roles: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><rect x="10" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><rect x="1" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M13 10V16M10 13H16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  cms: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="1" y="1" width="15" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M1 6H16" stroke="currentColor" strokeWidth="1.3"/><path d="M5 9.5H12M5 12.5H9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  blog: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M2.5 2H14.5C15.33 2 16 2.67 16 3.5V13.5C16 14.33 15.33 15 14.5 15H2.5C1.67 15 1 14.33 1 13.5V3.5C1 2.67 1.67 2 2.5 2Z" stroke="currentColor" strokeWidth="1.3"/><path d="M4 6H13M4 9H10M4 12H7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  media: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="1" y="3" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.3"/><circle cx="5.5" cy="7.5" r="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M1 12L5 8.5L8 11L11.5 7.5L16 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  seo: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.3"/><path d="M11.5 11.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  inbox: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="1" y="3" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M1 5.5L8.5 10L16 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  bell: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M8.5 1.5C8.5 1.5 5 3.5 5 9V13H12V9C12 3.5 8.5 1.5 8.5 1.5Z" stroke="currentColor" strokeWidth="1.3"/><path d="M1.5 13H15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M6.5 13C6.5 14.1 7.4 15 8.5 15C9.6 15 10.5 14.1 10.5 13" stroke="currentColor" strokeWidth="1.3"/></svg>,
  patients: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="2" y="1" width="13" height="15" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M5.5 5.5H11.5M5.5 8.5H11.5M5.5 11.5H8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  heart: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M8.5 14.5C8.5 14.5 1.5 10.5 1.5 5.5C1.5 3.29 3.29 1.5 5.5 1.5C6.7 1.5 7.8 2.1 8.5 3C9.2 2.1 10.3 1.5 11.5 1.5C13.71 1.5 15.5 3.29 15.5 5.5C15.5 10.5 8.5 14.5 8.5 14.5Z" stroke="currentColor" strokeWidth="1.3"/><path d="M4 6.5H6.5L8 4L10 9.5L11.5 6.5H13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  calendar: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="1" y="2.5" width="15" height="13.5" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M1 7H16" stroke="currentColor" strokeWidth="1.3"/><path d="M5 1V3.5M12 1V3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><circle cx="5.5" cy="10.5" r="1" fill="currentColor"/><circle cx="8.5" cy="10.5" r="1" fill="currentColor"/><circle cx="11.5" cy="10.5" r="1" fill="currentColor"/></svg>,
  alert: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M8.5 1.5L16 15H1L8.5 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/><path d="M8.5 7V10M8.5 12V12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  analytics: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M1 15.5V11L5.5 7L9 10L13 5L16.5 8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M1 15.5H16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  stats: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="1" y="10.5" width="3.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="6.75" y="6.5" width="3.5" height="9.5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="12.5" y="2.5" width="3.5" height="13.5" rx="1" stroke="currentColor" strokeWidth="1.2"/></svg>,
  report: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M3.5 1H10.5L16 6.5V16H3.5V1Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/><path d="M10.5 1V6.5H16" stroke="currentColor" strokeWidth="1.3"/><path d="M6 9.5H11.5M6 12H9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  settings: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="8.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M8.5 1V2.5M8.5 14V15.5M1 8.5H2.5M14 8.5H15.5M3.2 3.2L4.2 4.2M12.8 12.8L13.8 13.8M13.8 3.2L12.8 4.2M4.2 12.8L3.2 13.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  staff: <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="5.5" cy="5" r="3" stroke="currentColor" strokeWidth="1.3"/><path d="M1 15C1 12 3 10 5.5 10C8 10 10 12 10 15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M11 7.5C12.38 7.5 13.5 6.38 13.5 5C13.5 3.62 12.38 2.5 11 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M13 11C14.5 11.5 15.5 13 15.5 15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  out: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 14H3C2.45 14 2 13.55 2 13V3C2 2.45 2.45 2 3 2H6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><path d="M10.5 11.5L14 8L10.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 8H14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  chevR: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 11L9 7L5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  collapse: <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M9.5 3L5.5 7.5L9.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
}

/* ── NAV CONFIG ── */
const NAV_GROUPS = {
  admin: [
    { group: 'Overview',        items: [{ label: 'Dashboard',    path: '/admin/dashboard',      icon: 'dashboard' }] },
    { group: 'Users',           items: [{ label: 'All Users',    path: '/admin/users',          icon: 'users' }, { label: 'Roles & Access', path: '/admin/roles', icon: 'roles' }] },
    { group: 'Content',         items: [{ label: 'Website CMS',  path: '/admin/cms',            icon: 'cms' }, { label: 'Blog Manager',   path: '/admin/blog',   icon: 'blog' }, { label: 'Media Library',  path: '/admin/media',  icon: 'media' }, { label: 'SEO Manager',    path: '/admin/seo',    icon: 'seo' }] },
    { group: 'Communications',  items: [{ label: 'Contact Inbox', path: '/admin/inbox', icon: 'inbox', badge: 3 }, { label: 'Notifications', path: '/admin/notifications', icon: 'bell' }] },
    { group: 'System',          items: [{ label: 'Settings',      path: '/admin/settings',      icon: 'settings' }] },
  ],
  doctor: [
    { group: 'Clinical',     items: [{ label: 'Overview',       path: '/doctor/dashboard',    icon: 'dashboard' }, { label: 'My Patients',   path: '/doctor/patients',     icon: 'patients' }, { label: 'Appointments',  path: '/doctor/appointments', icon: 'calendar' }] },
    { group: 'Monitoring',   items: [{ label: 'AI Alerts',      path: '/doctor/alerts',       icon: 'alert', badge: 2 }, { label: 'Health Data',   path: '/doctor/health',       icon: 'heart' }] },
    { group: 'System',       items: [{ label: 'Settings',       path: '/doctor/settings',     icon: 'settings' }] },
  ],
  manager: [
    { group: 'Intelligence', items: [{ label: 'Overview',       path: '/manager/dashboard',   icon: 'dashboard' }, { label: 'Analytics',     path: '/manager/analytics',   icon: 'analytics' }, { label: 'Medical Stats', path: '/manager/medical',     icon: 'stats' }] },
    { group: 'Operations',   items: [{ label: 'Staff & Doctors', path: '/manager/staff',      icon: 'staff' }, { label: 'Reports',       path: '/manager/reports',     icon: 'report' }] },
    { group: 'System',       items: [{ label: 'Settings',       path: '/manager/settings',    icon: 'settings' }] },
  ],
}
NAV_GROUPS.nurse   = NAV_GROUPS.doctor
NAV_GROUPS.content = NAV_GROUPS.admin
NAV_GROUPS.it      = NAV_GROUPS.admin

const ROLE_META = {
  admin:   { label: 'Admin Portal',    color: '#c94060', bg: 'rgba(201,64,96,0.12)' },
  doctor:  { label: 'Clinical Portal', color: '#2563eb', bg: 'rgba(37,99,235,0.10)' },
  manager: { label: 'Manager Portal',  color: '#d97706', bg: 'rgba(217,119,6,0.10)'  },
  nurse:   { label: 'Clinical Portal', color: '#059669', bg: 'rgba(5,150,105,0.10)'  },
  it:      { label: 'Admin Portal',    color: '#0891b2', bg: 'rgba(8,145,178,0.10)'  },
  content: { label: 'Content Portal',  color: '#7c3aed', bg: 'rgba(124,58,237,0.10)' },
}

export default function Sidebar({ profile, collapsed, onToggle, onLogout }) {
  const role   = profile?.role || 'admin'
  const groups = NAV_GROUPS[role] || NAV_GROUPS.admin
  const meta   = ROLE_META[role] || ROLE_META.admin
  const initials = (profile?.full_name || 'U').split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase()

  return (
    <aside className={`sb ${collapsed ? 'sb-collapsed' : ''}`}>

      {/* Glow */}
      <div className="sb-glow" />

      {/* Logo */}
      <div className="sb-logo">
        <div className="sb-logo-inner">
          <OraLogo size={collapsed ? 22 : 26} />
          {!collapsed && <span className="sb-logo-text">ORA</span>}
        </div>
        <button className="sb-toggle" onClick={onToggle} title={collapsed ? 'Expand' : 'Collapse'}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ transform: collapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
            <path d="M9.5 3L5.5 7.5L9.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Role badge */}
      {!collapsed && (
        <div className="sb-role-wrap">
          <span className="sb-role" style={{ background: meta.bg, color: meta.color }}>{meta.label}</span>
        </div>
      )}

      {/* Nav */}
      <nav className="sb-nav">
        {groups.map(group => (
          <div key={group.group} className="sb-group">
            {!collapsed && <p className="sb-group-label">{group.group}</p>}
            {group.items.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `sb-item ${isActive ? 'sb-active' : ''}`}
                title={collapsed ? item.label : undefined}
              >
                <span className="sb-icon">{Ic[item.icon]}</span>
                {!collapsed && <span className="sb-label">{item.label}</span>}
                {!collapsed && item.badge > 0 && (
                  <span className="sb-badge">{item.badge}</span>
                )}
                {collapsed && item.badge > 0 && (
                  <span className="sb-badge-dot" />
                )}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      {/* User card */}
      <div className="sb-user">
        <div className="sb-avatar" style={{ background: meta.bg, color: meta.color }}>{initials}</div>
        {!collapsed && (
          <div className="sb-user-info">
            <p className="sb-user-name">{profile?.full_name || 'User'}</p>
            <p className="sb-user-email">{profile?.email}</p>
          </div>
        )}
        <button className="sb-signout" onClick={onLogout} title="Sign out">
          {Ic.out}
        </button>
      </div>

    </aside>
  )
}
