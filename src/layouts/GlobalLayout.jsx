
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function GlobalLayout() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "24px" }}>
        <Outlet />
      </div>
    </>
  );
}
