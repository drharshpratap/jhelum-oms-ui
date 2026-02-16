import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; 

import { NAV_LINKS } from "./navConfig";
import { getCurrentUserRole } from "../../features/admin/users/currentUser";
import { roleAllows } from "../../features/admin/roles/rolePermissions";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";


import { useDemoLogout } from "../../features/admin/demoAccess/useDemoLogout";

export default function NavDrawer({ open, onClose }) {
  const featureFlags = useSelector((state) => state.admin.featureFlags);

  const role = getCurrentUserRole();
  const logout = useDemoLogout();

  const visibleLinks = NAV_LINKS.filter((link) => {
    // ✅ Admin sees everything
    if (role === "Admin") return true;

    // ✅ Non-admins never see Admin tab
    if (link.path === "/admin") return false;

    // Always show links without featureKey
    if (!link.featureKey) return true;

    return (
      featureFlags?.[link.featureKey] &&
      roleAllows(role, link.featureKey)
    );
  });

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="p-4 flex flex-col gap-4">
          {visibleLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className="text-base font-medium"
            >
              {link.label}
            </Link>
          ))}

          {/* ✅ Divider */}
          <div className="mt-6 border-t pt-4 flex justify-end">
            <Tooltip title="Logout">
              <IconButton
                onClick={() => {
                  onClose();
                  logout();
                }}
                sx={{
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
      </aside>
    </>
  );
}