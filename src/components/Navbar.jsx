
import { useState } from "react";

import DesktopNav from "./Navbar/DesktopNav";
import MobileNav from "./Navbar/MobileNav";
import NavDrawer from "./Navbar/NavDrawer";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="hidden md:block">
        <DesktopNav />
      </div>

      <div className="md:hidden">
        <MobileNav onMenuClick={() => setDrawerOpen(true)} />
        <NavDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </div>
    </>
  );
}
