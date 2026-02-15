import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { NAV_LINKS } from "./navConfig";
import { getCurrentUserRole } from "../../features/admin/users/currentUser";
import { roleAllows } from "../../features/admin/roles/rolePermissions";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useDemoLogout } from "../../features/admin/demoAccess/useDemoLogout";

import logo from "../../assets/logo-full.svg";

export default function DesktopNav() {
  const featureFlags = useSelector((state) => state.admin.featureFlags);

  const role = getCurrentUserRole();
  const logout = useDemoLogout();

  // ✅ Debug: Print role + flags once per render
  console.log("====== DESKTOP NAV DEBUG ======");
  console.log("Current Role:", role);
  console.log("Feature Flags:", featureFlags);
  console.log("NAV_LINKS:", NAV_LINKS);
  console.log("================================");

  return (
    <nav className="desktop-navbar">
      <div className="desktop-navbar__logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="desktop-navbar__links">
        {/* ✅ Visible debug text in header */}
        <div
          style={{
            fontSize: 12,
            color: "red",
            marginRight: 12,
            fontWeight: 600,
          }}
        >
          Role: {role}
        </div>

        {NAV_LINKS.filter(link => {
          // ✅ Global override: Admin sees everything
          if (role === "Admin") return true;

          // ✅ Non-admins never see Admin area
          if (link.path === "/admin") return false;

          // ✅ Normal links always visible
          if (!link.featureKey) return true;

          // ✅ Everyone else: feature flag + role permission
          return (
            featureFlags?.[link.featureKey] &&
            roleAllows(role, link.featureKey)
          );
        }).map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "desktop-nav-link active" : "desktop-nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="desktop-navbar__logout">
      <Tooltip title="Logout">
        <IconButton
          onClick={logout}
          sx={{
            ml: 2,
            borderRadius: "50%",
            border: "1px solid var(--peb-stone)",
            background: "var(--peb-ivory)",
          }}
        >
          <PowerSettingsNewIcon
            sx={{
              color: "var(--peb-clay)",
              fontSize: 20,
            }}
          />
        </IconButton>
      </Tooltip>
    </div>
    
    </nav>
  );
}
