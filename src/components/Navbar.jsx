
import { useState } from "react";

import DesktopNav from "./Navbar/DesktopNav";
import MobileNav from "./Navbar/MobileNav";
import NavDrawer from "./Navbar/NavDrawer";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="desktop-nav">
        <DesktopNav />
      </div>

      <div className="mobile-nav">
        <MobileNav onMenuClick={() => setDrawerOpen(true)} />
        <NavDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </div>
    </>
  );
}
