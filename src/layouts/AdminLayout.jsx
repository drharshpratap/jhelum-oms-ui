import { Outlet } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import AdminNavbar from "../components/AdminNavbar";
import AdminAccessGate from "../features/admin/AdminAccessGate";

export default function AdminLayout() {
  return (
   <AdminAccessGate>
    <>
      <AdminNavbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Outlet />
        </Paper>
      </Container>
    </>
    </AdminAccessGate>
  );
}