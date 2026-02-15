
import { Outlet } from "react-router-dom";
import DocumentNavbar from "../components/DocumentNavbar";

export default function WorkspaceLayout() {
  return (
    <>
      <DocumentNavbar />
      <div style={{ padding: "24px" }}>
        <Outlet />
      </div>
    </>
  );
}
