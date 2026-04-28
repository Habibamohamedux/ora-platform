import "./LogoutModal.css";

export default function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="lm-overlay" onClick={onCancel}>
      <div className="lm-card" onClick={(e) => e.stopPropagation()}>
        <div className="lm-icon-wrap">
          <div className="lm-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M10 24H6C5.45 24 5 23.55 5 23V5C5 4.45 5.45 4 6 4H10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M18.5 20L23 14L18.5 8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 14H23"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <h2 className="lm-title">Sign Out</h2>
        <p className="lm-body">
          You are about to sign out of the ORA Health Platform.
          <br />
          Any unsaved changes will be lost.
        </p>

        <div className="lm-actions">
          <button className="lm-cancel" onClick={onCancel}>
            Stay Signed In
          </button>
          <button className="lm-confirm" onClick={onConfirm}>
            Sign Out
          </button>
        </div>

        <p className="lm-hint">
          Access restricted — contact <strong>ora_it@orahealth.ai</strong> if
          you need help
        </p>
      </div>
    </div>
  );
}
