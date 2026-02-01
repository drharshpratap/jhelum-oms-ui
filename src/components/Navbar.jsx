
import { useState,useEffect } from "react";

import DesktopNav from "./Navbar/DesktopNav";
import MobileNav from "./Navbar/MobileNav";
import NavDrawer from "./Navbar/NavDrawer";
import "./Navbar.css";


export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const MOBILE_BREAKPOINT = 768;

  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT
  );


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (

    <>
      {isMobile ?

        <div className="mobile-nav">
          <MobileNav onMenuClick={() => setDrawerOpen(true)} />
          <NavDrawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          />
        </div>

        :

        <div className="desktop-nav">
          <DesktopNav />
        </div>}
    </>

  );
}
