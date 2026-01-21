import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GlobalLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <Navbar />

      <div style={{ flex: 1, padding: "16px" }}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}