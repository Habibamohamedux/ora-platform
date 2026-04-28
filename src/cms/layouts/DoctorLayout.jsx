import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LogoutModal from "../components/LogoutModal";
import { ToastProvider } from "../components/Toast";
import useCmsBodyClass from "../services/useCmsBodyClass";
import "../shared/shared.css";
import "./AdminLayout.css";

export default function DoctorLayout() {
  const [profile, setProfile] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  useCmsBodyClass();

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) {
        navigate("/admin/login");
        return;
      }
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();
      if (data) setProfile(data);
      else navigate("/admin/login");
    });
  }, [navigate]);

  async function confirmLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login");
  }

  return (
    <ToastProvider>
      <div
        className={`cms-root al-root ${collapsed ? "al-collapsed" : ""} ${mobileOpen ? "al-mobile-open" : ""}`}
      >
        {mobileOpen && (
          <div className="al-overlay" onClick={() => setMobileOpen(false)} />
        )}
        <Sidebar
          profile={profile}
          collapsed={collapsed}
          onToggle={() => setCollapsed((v) => !v)}
          onLogout={() => setShowLogout(true)}
        />
        <div className="al-main">
          <Navbar
            profile={profile}
            onMobileMenu={() => setMobileOpen((v) => !v)}
            mobileOpen={mobileOpen}
            onLogout={() => setShowLogout(true)}
          />
          <main className="al-content">
            <Outlet context={{ profile }} />
          </main>
        </div>
        {showLogout && (
          <LogoutModal
            onConfirm={confirmLogout}
            onCancel={() => setShowLogout(false)}
          />
        )}
      </div>
    </ToastProvider>
  );
}
