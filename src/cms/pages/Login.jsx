import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import useCmsBodyClass from '../services/useCmsBodyClass'
import './login.css'

const OraLogo = () => (
  <svg className="ora-svg" xmlns="http://www.w3.org/2000/svg" width="41" height="36" viewBox="0 0 41 36" fill="none">
    <path className="ora-path-base"
      d="M39.8337 3.57807C38.9069 1.74903 36.8947 0.650491 34.8824 0.516659C30.9563 0.257359 27.2408 3.07899 25.0344 6.17943C23.3148 8.59899 22.2649 11.4506 21.824 14.4408C21.7261 15.1053 21.169 15.6174 20.4973 15.6174C19.8255 15.6174 19.2685 15.1053 19.1705 14.4408C18.7296 11.4506 17.6797 8.59899 15.9601 6.17943C13.7538 3.07899 10.0382 0.257359 6.11213 0.516659C4.09714 0.650491 2.08763 1.74903 1.16079 3.57807C0.559301 4.76583 0.444472 6.15155 0.521026 7.48708C0.715142 10.897 2.17785 14.1703 4.43343 16.6769C5.55985 17.9288 6.8886 18.9994 8.36224 19.7996C9.96986 20.6723 11.8263 20.8842 13.3765 21.8712V21.8991H13.4229C13.4229 21.8991 13.4339 21.9047 13.4394 21.9075L13.4612 21.9242C11.9958 23.7114 10.4264 25.4066 8.92545 27.1632C7.81817 28.4597 6.16954 29.7255 5.63367 31.457C5.08139 33.2553 6.48943 34.7275 8.05329 35.2768C9.92611 35.9348 11.9247 35.0593 13.2835 33.6875C15.9886 30.9538 17.8667 27.2628 18.7806 23.3072C18.9674 22.4989 19.6699 21.8991 20.4996 21.8991C21.3296 21.8991 22.0323 22.4994 22.2189 23.3082C23.1309 27.2634 25.0092 30.954 27.7165 33.6875C29.0726 35.0593 31.0711 35.9348 32.9467 35.2768C34.5078 34.7275 35.9186 33.2553 35.3663 31.457C34.8332 29.7255 33.1818 28.4597 32.0745 27.1632C30.5736 25.4066 29.0042 23.7114 27.5388 21.9242L27.5606 21.9075C29.1218 20.887 31.0083 20.6835 32.6378 19.7968C34.1114 18.9966 35.4401 17.9288 36.5666 16.6741C38.8194 14.1675 40.2849 10.8942 40.479 7.48429C40.5555 6.14876 40.4407 4.76304 39.8392 3.57528L39.8337 3.57807ZM5.29465 10.2976C2.2462 8.39045 7.62679 5.21194 9.2508 4.71007C9.77847 4.54556 10.4046 4.59575 10.8065 4.98052C11.0525 5.21472 11.1892 5.54373 11.3123 5.86716C12.6277 9.31215 13.1798 10.8122 13.3299 13.8622C13.368 14.6361 12.531 15.1172 11.8782 14.6998C9.65806 13.2803 7.52944 11.6937 5.29465 10.2976ZM35.6971 10.2976C33.462 11.6939 31.333 13.2808 29.1125 14.7005C28.46 15.1177 27.6231 14.6371 27.6608 13.8635C27.8092 10.8126 28.3616 9.31262 29.6795 5.86716C29.8026 5.54662 29.9393 5.21751 30.1853 4.98052C30.5872 4.59854 31.2133 4.54835 31.741 4.71007C33.365 5.21194 38.7456 8.39045 35.6971 10.2976Z"
    />
    <path className="ora-path-liquid"
      d="M39.8337 3.57807C38.9069 1.74903 36.8947 0.650491 34.8824 0.516659C30.9563 0.257359 27.2408 3.07899 25.0344 6.17943C23.3148 8.59899 22.2649 11.4506 21.824 14.4408C21.7261 15.1053 21.169 15.6174 20.4973 15.6174C19.8255 15.6174 19.2685 15.1053 19.1705 14.4408C18.7296 11.4506 17.6797 8.59899 15.9601 6.17943C13.7538 3.07899 10.0382 0.257359 6.11213 0.516659C4.09714 0.650491 2.08763 1.74903 1.16079 3.57807C0.559301 4.76583 0.444472 6.15155 0.521026 7.48708C0.715142 10.897 2.17785 14.1703 4.43343 16.6769C5.55985 17.9288 6.8886 18.9994 8.36224 19.7996C9.96986 20.6723 11.8263 20.8842 13.3765 21.8712V21.8991H13.4229C13.4229 21.8991 13.4339 21.9047 13.4394 21.9075L13.4612 21.9242C11.9958 23.7114 10.4264 25.4066 8.92545 27.1632C7.81817 28.4597 6.16954 29.7255 5.63367 31.457C5.08139 33.2553 6.48943 34.7275 8.05329 35.2768C9.92611 35.9348 11.9247 35.0593 13.2835 33.6875C15.9886 30.9538 17.8667 27.2628 18.7806 23.3072C18.9674 22.4989 19.6699 21.8991 20.4996 21.8991C21.3296 21.8991 22.0323 22.4994 22.2189 23.3082C23.1309 27.2634 25.0092 30.954 27.7165 33.6875C29.0726 35.0593 31.0711 35.9348 32.9467 35.2768C34.5078 34.7275 35.9186 33.2553 35.3663 31.457C34.8332 29.7255 33.1818 28.4597 32.0745 27.1632C30.5736 25.4066 29.0042 23.7114 27.5388 21.9242L27.5606 21.9075C29.1218 20.887 31.0083 20.6835 32.6378 19.7968C34.1114 18.9966 35.4401 17.9288 36.5666 16.6741C38.8194 14.1675 40.2849 10.8942 40.479 7.48429C40.5555 6.14876 40.4407 4.76304 39.8392 3.57528L39.8337 3.57807ZM5.29465 10.2976C2.2462 8.39045 7.62679 5.21194 9.2508 4.71007C9.77847 4.54556 10.4046 4.59575 10.8065 4.98052C11.0525 5.21472 11.1892 5.54373 11.3123 5.86716C12.6277 9.31215 13.1798 10.8122 13.3299 13.8622C13.368 14.6361 12.531 15.1172 11.8782 14.6998C9.65806 13.2803 7.52944 11.6937 5.29465 10.2976ZM35.6971 10.2976C33.462 11.6939 31.333 13.2808 29.1125 14.7005C28.46 15.1177 27.6231 14.6371 27.6608 13.8635C27.8092 10.8126 28.3616 9.31262 29.6795 5.86716C29.8026 5.54662 29.9393 5.21751 30.1853 4.98052C30.5872 4.59854 31.2133 4.54835 31.741 4.71007C33.365 5.21194 38.7456 8.39045 35.6971 10.2976Z"
    />
  </svg>
)

const IconEmail = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M1.5 5.5L8 9.5L14.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const IconLock = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="7.5" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M5.5 7.5V5C5.5 3.62 6.62 2.5 8 2.5C9.38 2.5 10.5 3.62 10.5 5V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="8" cy="11" r="1" fill="currentColor"/>
  </svg>
)

const IconEye = ({ open }) => open ? (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
) : (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M1 8C1 8 3.5 3 8 3C12.5 3 15 8 15 8C15 8 12.5 13 8 13C3.5 13 1 8 1 8Z" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M2 2L14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const IconShield = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1L12.5 3.5V7C12.5 10 9.5 12.5 7 13C4.5 12.5 1.5 10 1.5 7V3.5L7 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    <path d="M4.5 7L6.5 9L9.5 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Animated canvas background
function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particles
    const PINK = '201, 64, 96'
    const particles = Array.from({ length: 56 }, () => ({
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height,
      r:    Math.random() * 1.8 + 0.4,
      vx:   (Math.random() - 0.5) * 0.28,
      vy:   (Math.random() - 0.5) * 0.28,
      o:    Math.random() * 0.35 + 0.08,
    }))

    // Rings
    const rings = [
      { r: 0, maxR: 180, speed: 0.45, o: 0.18, phase: 0 },
      { r: 60, maxR: 180, speed: 0.45, o: 0.12, phase: 2.1 },
      { r: 120, maxR: 180, speed: 0.45, o: 0.07, phase: 4.2 },
    ]

    let t = 0
    const cx = () => canvas.width  / 2
    const cy = () => canvas.height / 2

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.008

      // Expanding rings from center
      rings.forEach(ring => {
        const progress = ((t * ring.speed + ring.phase) % (Math.PI * 2)) / (Math.PI * 2)
        const radius = progress * ring.maxR
        const opacity = ring.o * (1 - progress)
        ctx.beginPath()
        ctx.arc(cx(), cy(), radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${PINK}, ${opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Particles + connections
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${PINK}, ${p.o})`
        ctx.fill()
      })

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${PINK}, ${0.07 * (1 - dist / 90)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="login-canvas" />
}

const ROLE_MAP = {
  admin:   { label: 'System Administrator', route: '/admin/dashboard' },
  doctor:  { label: 'Clinical Dashboard',   route: '/doctor/dashboard' },
  manager: { label: 'Management Portal',    route: '/manager/dashboard' },
  nurse:   { label: 'Clinical Support',     route: '/doctor/dashboard' },
  content: { label: 'Content Manager',      route: '/admin/dashboard' },
}

export default function Login() {
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [showPw,   setShowPw]   = useState(false)
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState('')
  const [user,     setUser]     = useState(null)
  const [mounted,  setMounted]  = useState(false)
  const navigate = useNavigate()
  useCmsBodyClass()

  useEffect(() => {
    setMounted(true)
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        const profile = await getProfile(session.user.id)
        setUser({ ...session.user, ...profile })
      }
    })
  }, [])

  async function getProfile(userId) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    return data || {}
  }

  async function handleLogin(e) {
    e.preventDefault()
    if (!email || !password) { setError('Please enter your credentials.'); return }
    setError('')
    setLoading(true)

    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password })

    if (authError) {
      setError('Invalid credentials. Please try again.')
      setLoading(false)
      return
    }

    const profile = await getProfile(data.user.id)
    setUser({ ...data.user, ...profile })
    setLoading(false)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setUser(null)
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    if (!user) return

    const meta = ROLE_MAP[user.role] || ROLE_MAP.admin
    const timeoutId = window.setTimeout(() => {
      navigate(meta.route, { replace: true })
    }, 900)

    return () => window.clearTimeout(timeoutId)
  }, [navigate, user])


  if (user) {
    const meta = ROLE_MAP[user.role] || ROLE_MAP.admin
    return (
      <div className="cms-root login-page">
        <AnimatedBackground />
        <div className={`success-card ${mounted ? 'mounted' : ''}`}>
          <div className="success-logo-wrap">
            <OraLogo />
            <span className="success-logo-text">ORA</span>
          </div>
          <div className="success-role-badge">{meta.label}</div>
          <h2 className="success-name">Welcome back,<br />{user.full_name || 'User'}</h2>
          <p className="success-email">{user.email}</p>
          <div className="success-bar" />
          <p className="success-hint">Redirecting to your dashboard…</p>
          <button onClick={handleLogout} className="success-logout">Sign Out</button>
        </div>
      </div>
    )
  }

  return (
    <div className="cms-root login-page">
      <AnimatedBackground />

      <div className={`login-shell ${mounted ? 'mounted' : ''}`}>

        {/* ── LEFT ──────────────────────────────────────── */}
        <div className="login-panel-left">
          <div className="lpl-top">
            <div className="lpl-logo">
              <OraLogo />
              <span className="lpl-logo-name">ORA</span>
            </div>
            <div className="lpl-divider" />
            <span className="lpl-system-label">Health Platform</span>
          </div>

          <div className="lpl-center">
            <h1 className="lpl-headline">
              CLINICAL<br />
              MANAGEMENT<br />
              <span className="lpl-headline-accent">SYSTEM</span>
            </h1>
            <p className="lpl-desc">
              Centralised control for ORA's digital health ecosystem —
              clinical data, content operations, and patient intelligence.
            </p>

            <div className="lpl-pillars">
              {[
                { label: 'Patient Monitoring',  sub: 'Live biometrics & AI alerts' },
                { label: 'Content Management',  sub: 'System-Wide Content Updates & Media Library' },
                { label: 'System Intelligence', sub: 'Analytics & reporting' },
              ].map(({ label, sub }) => (
                <div key={label} className="lpl-pillar">
                  <div className="lpl-pillar-dot" />
                  <div>
                    <p className="lpl-pillar-label">{label}</p>
                    <p className="lpl-pillar-sub">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lpl-footer">
            <span>© 2025 ORA Health. All rights reserved.</span>
            <span className="lpl-footer-dot">·</span>
            <span>ora_it@orahealth.ai</span>
          </div>
        </div>

        {/* ── RIGHT ─────────────────────────────────────── */}
        <div className="login-panel-right">
          <div className="lpr-inner">

            <div className="lpr-header">
              <p className="lpr-eyebrow">Secure Access Portal</p>
              <h2 className="lpr-title">Sign In</h2>
              <p className="lpr-sub">
                Authorised personnel only. Use your ORA credentials to continue.
              </p>
            </div>

            {error && (
              <div className="lpr-error" role="alert">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M7.5 4.5V8M7.5 10.5V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="lpr-form" autoComplete="off">

              <div className="lpr-field">
                <label className="lpr-label" htmlFor="ora-email">
                  Email Address
                </label>
                <div className="lpr-input-wrap">
                  <span className="lpr-input-icon"><IconEmail /></span>
                  <input
                    id="ora-email"
                    className="lpr-input"
                    type="email"
                    placeholder="name@orahealth.ai"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError('') }}
                    autoComplete="new-password"
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              <div className="lpr-field">
                <label className="lpr-label" htmlFor="ora-password">
                  Password
                </label>
                <div className="lpr-input-wrap">
                  <span className="lpr-input-icon"><IconLock /></span>
                  <input
                    id="ora-password"
                    className="lpr-input"
                    type={showPw ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError('') }}
                    autoComplete="new-password"
                    disabled={loading}
                    required
                  />
                  <button
                    type="button"
                    className="lpr-eye"
                    onClick={() => setShowPw(v => !v)}
                    tabIndex={-1}
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                  >
                    <IconEye open={showPw} />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className={`lpr-btn ${loading ? 'lpr-btn--loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <span className="lpr-spinner" />
                ) : (
                  <>
                    <span>Access Dashboard</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>

            </form>

            <div className="lpr-notice">
              <IconShield />
              <span>
                Access is restricted. Contact <strong>ora_it@orahealth.ai</strong> or
                your HR department to request credentials.
              </span>
            </div>

            <div className="lpr-roles">
              <p className="lpr-roles-label">System roles</p>
              <div className="lpr-roles-grid">
                {['Administrator', 'Doctor', 'Manager', 'Nurse', 'Content Manager'].map(r => (
                  <span key={r} className="lpr-role-tag">{r}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
