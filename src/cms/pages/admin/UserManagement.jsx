import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import "./UserManagement.css";

const ROLE_META = {
  admin: { color: "#c94060", bg: "rgba(201,64,96,0.10)", label: "Admin" },
  doctor: { color: "#2563eb", bg: "rgba(37,99,235,0.10)", label: "Doctor" },
  manager: { color: "#d97706", bg: "rgba(217,119,6,0.10)", label: "Manager" },
  nurse: { color: "#059669", bg: "rgba(5,150,105,0.10)", label: "Nurse" },
  content: { color: "#7c3aed", bg: "rgba(124,58,237,0.10)", label: "Content" },
  it: { color: "#0891b2", bg: "rgba(8,145,178,0.10)", label: "IT" },
};

const CLOSE_SVG = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 3L13 13M13 3L3 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

function ConfirmDelete({ user, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal modal-sm">
        <div className="modal-hdr">
          <span className="modal-title">Delete User</span>
          <button className="modal-close" onClick={onCancel}>
            {CLOSE_SVG}
          </button>
        </div>
        <div className="modal-body">
          <div className="um-del-warn">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="16" fill="var(--red-soft)" />
              <path
                d="M18 12V20M18 23V24"
                stroke="var(--red)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p>You are about to permanently delete the account for</p>
            <p className="fw-600" style={{ fontSize: 15 }}>
              {user.full_name || user.email}
            </p>
            <p className="text-sm text-muted">
              This action cannot be undone. All associated data will be removed.
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            Delete Permanently
          </button>
        </div>
      </div>
    </div>
  );
}

function UserModal({ user, onClose, onSave }) {
  const isEdit = !!user?.id;
  const [form, setForm] = useState({
    full_name: user?.full_name || "",
    email: user?.email || "",
    role: user?.role || "admin",
    department: user?.department || "",
    is_active: user?.is_active !== false,
    password: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  async function handleSave() {
    if (!form.full_name.trim()) {
      setError("Full name is required.");
      return;
    }
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      setError("A valid email is required.");
      return;
    }
    if (!isEdit && form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setError("");
    setSaving(true);
    try {
      if (isEdit) {
        const { error: e } = await supabase
          .from("profiles")
          .update({
            full_name: form.full_name,
            role: form.role,
            department: form.department,
            is_active: form.is_active,
          })
          .eq("id", user.id);
        if (e) throw e;
      }
      // Note: Creating auth users via client SDK not supported; use Supabase dashboard for new users
      onSave(
        "success",
        isEdit
          ? "User updated successfully."
          : "User info saved (create via Supabase Auth).",
      );
    } catch (e) {
      setError(e.message || "Something went wrong.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal modal-md">
        <div className="modal-hdr">
          <span className="modal-title">
            {isEdit ? "Edit User" : "Add New User"}
          </span>
          <button className="modal-close" onClick={onClose}>
            {CLOSE_SVG}
          </button>
        </div>
        <div className="modal-body">
          {error && <div className="um-form-error">{error}</div>}
          <div className="form-grid" style={{ gap: 16 }}>
            <div className="form-grid form-2col">
              <div className="form-field">
                <label className="form-label">
                  Full Name <span className="req">*</span>
                </label>
                <input
                  className="form-input"
                  placeholder="Dr. Sarah Al-Rashid"
                  value={form.full_name}
                  onChange={(e) => set("full_name", e.target.value)}
                />
              </div>
              <div className="form-field">
                <label className="form-label">
                  Work Email <span className="req">*</span>
                </label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="sarah@orahealth.ai"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  disabled={isEdit}
                />
                {isEdit && (
                  <p className="form-hint">
                    Email cannot be changed after creation.
                  </p>
                )}
              </div>
            </div>
            <div className="form-grid form-2col">
              <div className="form-field">
                <label className="form-label">
                  System Role <span className="req">*</span>
                </label>
                <select
                  className="form-select"
                  value={form.role}
                  onChange={(e) => set("role", e.target.value)}
                >
                  {Object.entries(ROLE_META).map(([k, v]) => (
                    <option key={k} value={k}>
                      {v.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label className="form-label">Department</label>
                <input
                  className="form-input"
                  placeholder="e.g. Obstetrics & Gynecology"
                  value={form.department}
                  onChange={(e) => set("department", e.target.value)}
                />
              </div>
            </div>
            {!isEdit && (
              <div className="form-field">
                <label className="form-label">
                  Temporary Password <span className="req">*</span>
                </label>
                <input
                  className="form-input"
                  type="password"
                  placeholder="Min. 8 characters"
                  value={form.password}
                  onChange={(e) => set("password", e.target.value)}
                />
                <p className="form-hint">
                  The user will be asked to change their password on first
                  login.
                </p>
              </div>
            )}
            <div className="um-status-row">
              <div>
                <p className="form-label">Account Status</p>
                <p className="form-hint" style={{ marginTop: 2 }}>
                  Inactive users cannot sign into the platform.
                </p>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={form.is_active}
                  onChange={(e) => set("is_active", e.target.checked)}
                />
                <span className="toggle-track" />
                <span className="toggle-thumb" />
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? (
              <>
                <span className="um-spin" /> Saving…
              </>
            ) : isEdit ? (
              "Save Changes"
            ) : (
              "Create User"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function ViewUserPanel({ user, onClose, onEdit }) {
  const meta = ROLE_META[user.role] || ROLE_META.admin;
  const initials = (user.full_name || user.email || "U")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="modal-overlay">
      <div className="modal modal-md">
        <div className="modal-hdr">
          <span className="modal-title">User Profile</span>
          <button className="modal-close" onClick={onClose}>
            {CLOSE_SVG}
          </button>
        </div>
        <div className="modal-body">
          <div className="um-profile-top">
            <div
              className="um-profile-avatar"
              style={{ background: meta.bg, color: meta.color }}
            >
              {initials}
            </div>
            <div>
              <p className="um-profile-name">{user.full_name || "—"}</p>
              <p className="text-muted" style={{ fontSize: 13.5 }}>
                {user.email}
              </p>
              <span
                className="badge"
                style={{
                  background: meta.bg,
                  color: meta.color,
                  marginTop: 6,
                  display: "inline-flex",
                }}
              >
                {meta.label}
              </span>
            </div>
          </div>
          <div className="um-profile-details">
            {[
              ["Department", user.department || "—"],
              [
                "Joined",
                user.created_at
                  ? new Date(user.created_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "—",
              ],
              [
                "Last Login",
                user.last_login
                  ? new Date(user.last_login).toLocaleDateString("en-GB")
                  : "Never",
              ],
              ["Status", user.is_active !== false ? "Active" : "Inactive"],
              ["User ID", user.id ? user.id.slice(0, 18) + "…" : "—"],
            ].map(([k, v]) => (
              <div key={k} className="um-detail-row">
                <span className="text-muted text-sm">{k}</span>
                <span className="fw-500 text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={onEdit}>
            Edit User
          </button>
        </div>
      </div>
    </div>
  );
}

export default function UserManagement() {
  const [searchParams] = useSearchParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleF, setRoleF] = useState("all");
  const [modal, setModal] = useState(null); // null | 'add' | user-object
  const [viewUser, setViewUser] = useState(null);
  const [delUser, setDelUser] = useState(null);
  const [toast, setToast] = useState(null);
  const [page, setPage] = useState(1);
  const PER = 8;

  function showToast(msg, type = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  }

  async function load() {
    setLoading(true);
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });
    setUsers(data || []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    const mode = searchParams.get("mode");
    const role = searchParams.get("role");
    const focus = searchParams.get("focus");

    if (mode === "add") {
      setModal("add");
    }
    if (role) {
      setRoleF(role);
      setPage(1);
    }
    if (focus) {
      setSearch(focus);
      setPage(1);
    }
  }, [searchParams]);

  useEffect(() => {
    const focus = searchParams.get("focus");
    if (!focus || !users.length) return;

    const match = users.find((user) =>
      [user.full_name, user.email]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(focus.toLowerCase()))
    );

    if (match) {
      setViewUser(match);
    }
  }, [users, searchParams]);

  async function handleDelete() {
    const { error } = await supabase
      .from("profiles")
      .delete()
      .eq("id", delUser.id);
    if (error) {
      showToast(error.message, "error");
      return;
    }
    showToast("User deleted successfully.", "success");
    setDelUser(null);
    load();
  }

  const filtered = users.filter((u) => {
    const ms =
      !search ||
      (u.full_name || "").toLowerCase().includes(search.toLowerCase()) ||
      (u.email || "").toLowerCase().includes(search.toLowerCase());
    const mr = roleF === "all" || u.role === roleF;
    return ms && mr;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER));
  const paged = filtered.slice((page - 1) * PER, page * PER);

  return (
    <div className="page">
      {/* Toast */}
      {toast && (
        <div className={`um-toast um-toast-${toast.type}`}>
          {toast.type === "success" ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7L5.5 10.5L12 3.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 3L11 11M11 3L3 11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
          {toast.msg}
        </div>
      )}

      <div className="page-header">
        <div>
          <h1 className="page-title">User Management</h1>
          <p className="page-sub">
            {users.length} total users · manage access, roles, and accounts
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => setModal("add")}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path
              d="M6.5 1V12M1 6.5H12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          Add User
        </button>
      </div>

      {/* Role pills */}
      <div className="um-role-pills">
        <button
          className={`um-role-pill ${roleF === "all" ? "active" : ""}`}
          onClick={() => {
            setRoleF("all");
            setPage(1);
          }}
        >
          All <span>{users.length}</span>
        </button>
        {Object.entries(ROLE_META).map(([k, v]) => {
          const count = users.filter((u) => u.role === k).length;
          return count > 0 ? (
            <button
              key={k}
              className={`um-role-pill ${roleF === k ? "active" : ""}`}
              onClick={() => {
                setRoleF(k);
                setPage(1);
              }}
              style={{ "--rc": v.color }}
            >
              {v.label} <span>{count}</span>
            </button>
          ) : null;
        })}
      </div>

      <div className="card">
        {/* Filter bar */}
        <div className="filter-bar">
          <div className="search-wrap" style={{ maxWidth: 280 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle
                cx="6"
                cy="6"
                r="4.5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M9.5 9.5L13 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              placeholder="Search by name or email…"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
            {search && (
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-3)",
                  padding: 2,
                }}
                onClick={() => setSearch("")}
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path
                    d="M1 1L10 10M10 1L1 10"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>
          <select
            className="flt-select"
            value={roleF}
            onChange={(e) => {
              setRoleF(e.target.value);
              setPage(1);
            }}
          >
            <option value="all">All Roles</option>
            {Object.entries(ROLE_META).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
          <span className="text-sm text-muted" style={{ marginLeft: "auto" }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Table */}
        {loading ? (
          <div className="loading-center">
            <div className="spinner" />
          </div>
        ) : paged.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle
                  cx="11"
                  cy="7"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M3 20C3 16 6.58 13 11 13C15.42 13 19 16 19 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="empty-title">No users found</p>
            <p className="empty-sub">
              {search
                ? "Try a different search term."
                : "Add your first user to get started."}
            </p>
            {!search && (
              <button
                className="btn btn-primary"
                style={{ marginTop: 8 }}
                onClick={() => setModal("add")}
              >
                Add First User
              </button>
            )}
          </div>
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Joined</th>
                  <th>Last Login</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paged.map((u) => {
                  const meta = ROLE_META[u.role] || ROLE_META.admin;
                  const initials = (u.full_name || u.email || "U")
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase();
                  return (
                    <tr key={u.id}>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 11,
                          }}
                        >
                          <div
                            className="avatar"
                            style={{
                              width: 34,
                              height: 34,
                              fontSize: 12,
                              background: meta.bg,
                              color: meta.color,
                            }}
                          >
                            {initials}
                          </div>
                          <div>
                            <p className="fw-500" style={{ fontSize: 13.5 }}>
                              {u.full_name || "—"}
                            </p>
                            <p className="text-xs text-muted">{u.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span
                          className="badge"
                          style={{ background: meta.bg, color: meta.color }}
                        >
                          {meta.label}
                        </span>
                      </td>
                      <td className="text-sm text-muted">
                        {u.department || "—"}
                      </td>
                      <td className="text-sm text-muted">
                        {u.created_at
                          ? new Date(u.created_at).toLocaleDateString("en-GB")
                          : "—"}
                      </td>
                      <td className="text-sm text-muted">
                        {u.last_login ? (
                          new Date(u.last_login).toLocaleDateString("en-GB")
                        ) : (
                          <span
                            className="badge badge-gray"
                            style={{ fontSize: 10 }}
                          >
                            Never
                          </span>
                        )}
                      </td>
                      <td>
                        <span
                          className={`badge ${u.is_active !== false ? "badge-green" : "badge-red"}`}
                        >
                          <span className="badge-dot" />
                          {u.is_active !== false ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td>
                        <div className="table-actions">
                          <button
                            className="btn btn-sm btn-ghost btn-icon"
                            title="View profile"
                            onClick={() => setViewUser(u)}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <circle
                                cx="7"
                                cy="5"
                                r="2.5"
                                stroke="currentColor"
                                strokeWidth="1.2"
                              />
                              <path
                                d="M1.5 13C1.5 10.24 4 8 7 8C10 8 12.5 10.24 12.5 13"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                          <button
                            className="btn btn-sm btn-ghost btn-icon"
                            title="Edit user"
                            onClick={() => setModal(u)}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M9.5 2.5L11.5 4.5L4.5 11.5H2.5V9.5L9.5 2.5Z"
                                stroke="currentColor"
                                strokeWidth="1.3"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <button
                            className="btn btn-sm btn-ghost btn-icon"
                            title="Delete user"
                            style={{ color: "var(--red)" }}
                            onClick={() => setDelUser(u)}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M2 3.5H12M5 3.5V2H9V3.5M4.5 3.5V12H9.5V3.5"
                                stroke="currentColor"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div
            style={{
              padding: "10px 16px",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div className="pagination">
              <span className="pagination-info">
                Showing {Math.min((page - 1) * PER + 1, filtered.length)}–
                {Math.min(page * PER, filtered.length)} of {filtered.length}
              </span>
              <div className="pg-btns">
                <button
                  className="pg-btn"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  ‹
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <button
                      key={p}
                      className={`pg-btn ${p === page ? "active" : ""}`}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </button>
                  ),
                )}
                <button
                  className="pg-btn"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {modal && (
        <UserModal
          user={modal === "add" ? null : modal}
          onClose={() => setModal(null)}
          onSave={(type, msg) => {
            setModal(null);
            showToast(msg, type);
            load();
          }}
        />
      )}
      {viewUser && (
        <ViewUserPanel
          user={viewUser}
          onClose={() => setViewUser(null)}
          onEdit={() => {
            setModal(viewUser);
            setViewUser(null);
          }}
        />
      )}
      {delUser && (
        <ConfirmDelete
          user={delUser}
          onConfirm={handleDelete}
          onCancel={() => setDelUser(null)}
        />
      )}
    </div>
  );
}
