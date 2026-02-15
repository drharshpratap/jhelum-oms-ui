import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  cleanupExpired,
  incrementOpenCount,
  unlockSession,
} from "./demoAccessSlice";
import DemoLoginPage from "./DemoLoginPage";

const ADMIN_USER = "admin";
const ADMIN_PASS = "Admin1234";

export default function DemoSessionGate({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const sessions = useSelector((s) => s.demoAccess.sessions);
  const unlockedGuid = useSelector((s) => s.demoAccess.unlockedGuid);

  const params = new URLSearchParams(location.search);
  const guid = params.get("demoSession");

  // ✅ Hooks always run first (never return before this)
  useEffect(() => {
    dispatch(cleanupExpired());
    if (guid) dispatch(incrementOpenCount(guid));
  }, [guid, dispatch]);

  // ✅ Admin override AFTER hooks
  if (unlockedGuid === "ADMIN") {
    return children;
  }

  if (unlockedGuid) return children;

  const session = sessions.find((s) => s.guid === guid);

  if (!guid || !session) {
    return (
      <DemoLoginPage
        error="Invalid or missing demo session link."
        allowAdminBypass
        adminUser={ADMIN_USER}
        adminPass={ADMIN_PASS}
        onAdminUnlock={() => dispatch(unlockSession("ADMIN"))}
      />
    );
  }

  if (unlockedGuid !== guid) {
    return (
      <DemoLoginPage
        session={session}
        allowAdminBypass
        adminUser={ADMIN_USER}
        adminPass={ADMIN_PASS}
        onUnlock={() => {
          dispatch(unlockSession(guid));
          sessionStorage.setItem(
            "demo-role",
            session?.role || "Editor"
          );
        }}
        onAdminUnlock={() => {
          dispatch(unlockSession("ADMIN"));
          sessionStorage.setItem("demo-role", "Admin");
        }}

      />
    );
  }

  return children;
}
