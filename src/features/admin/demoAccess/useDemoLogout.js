import { useNavigate } from "react-router-dom";

export function useDemoLogout() {
  const navigate = useNavigate();

  return () => {
    // Clear unlocked demo session
    localStorage.removeItem("demoUnlockedGuid");

    // Clear active role
    sessionStorage.removeItem("demo-role");

    // Reset app back to login state
    navigate("/", { replace: true });
    window.location.reload();
  };
}
