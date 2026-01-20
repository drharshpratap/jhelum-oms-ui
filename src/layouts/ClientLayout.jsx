
import { Outlet } from "react-router-dom";
import ClientNavbar from "../components/ClientNavbar";

export default function ClientLayout() {
  return (
    <>
      
      <div style={{ padding: "24px" }}>
        <Outlet />
      </div>
    </>
  );
}
