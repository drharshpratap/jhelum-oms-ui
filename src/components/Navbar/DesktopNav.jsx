import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { NAV_LINKS } from "./navConfig";
import logo from "../../assets/logo-full.svg";

export default function DesktopNav() {

  const featureFlags = useSelector(
    state => state.admin.featureFlags
  );

  return (
    <nav className="desktop-navbar">
      <div className="desktop-navbar__logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="desktop-navbar__links">
        {NAV_LINKS
          .filter(link => {
            if (!link.featureKey) return true;
            return featureFlags?.[link.featureKey];
          })
          .map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "desktop-nav-link active"
                  : "desktop-nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
      </div>

    </nav>
  );
}
