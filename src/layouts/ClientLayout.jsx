
import { Outlet } from "react-router-dom";
import ClientNavbar from "../components/ClientNavbar";

export default function ClientLayout() {
  return (
    <>
      
      <div>
        <Outlet />
      </div>
    </>
  );
}
