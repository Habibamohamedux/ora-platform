import { createContext, useContext, useState, useCallback } from "react";
import "./Toast.css";

const ToastContext = createContext(null);

let toastId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success", duration = 3500) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      duration,
    );
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className={`toast toast-${t.type}`}>
            <span className="toast-icon">
              {t.type === "success" && (
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M2 6.5L5.5 10L11 3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {t.type === "error" && (
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M3 3L10 10M10 3L3 10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {t.type === "warning" && (
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M6.5 2L12 11H1L6.5 2Z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M6.5 6V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {t.type === "info" && (
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle
                    cx="6.5"
                    cy="6.5"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M6.5 5.5V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
            <span className="toast-msg">{t.message}</span>
            <button className="toast-x" onClick={() => removeToast(t.id)}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 2L10 10M10 2L2 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be inside ToastProvider");
  return ctx.toast;
}
