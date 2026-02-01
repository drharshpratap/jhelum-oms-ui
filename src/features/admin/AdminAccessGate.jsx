import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const ADMIN_PASSWORD = "admin123";
const ACCESS_KEY = "admin-access-until";
const ACCESS_DURATION = 10 * 60 * 1000;

export default function AdminAccessGate({ children }) {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const expiresAt = sessionStorage.getItem(ACCESS_KEY);
    if (expiresAt && Date.now() < Number(expiresAt)) {
      setGranted(true);
    } else {
      sessionStorage.removeItem(ACCESS_KEY);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(
        ACCESS_KEY,
        String(Date.now() + ACCESS_DURATION)
      );
      setGranted(true);
    } else {
      setError("You do not have admin access.");
      setTimeout(() => navigate("/", { replace: true }), 1500);
    }
  };

  useEffect(() => {
    if (!granted) return;

    const timer = setInterval(() => {
      const expiresAt = sessionStorage.getItem(ACCESS_KEY);
      if (!expiresAt || Date.now() > Number(expiresAt)) {
        sessionStorage.removeItem(ACCESS_KEY);
        navigate("/", { replace: true });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [granted, navigate]);

  if (!granted) {
    return (
      <div className="admin-gate-wrapper">
        <form className="admin-gate-card" onSubmit={handleSubmit}>
          <div className="admin-gate-title">Admin Access Required</div>

          <input
            type="password"
            className="admin-gate-input"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
          />

          {error && <div className="admin-gate-error">{error}</div>}

          <button type="submit" className="admin-gate-button">
            Continue
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <div className="admin-unlocked-badge">
        🔓 Admin unlocked (expires in 10 minutes)
      </div>

      {children}
    </>
  );
}
