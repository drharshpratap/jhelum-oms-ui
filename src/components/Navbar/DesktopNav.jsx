import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "./navConfig";
import logo from "../../assets/logo-full.svg";

export default function DesktopNav() {
  return (
    <nav className="desktop-navbar">
      <div className="desktop-navbar__logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="desktop-navbar__links">
        {NAV_LINKS.map(link => (
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
