import { Outlet } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Outlet />
        </Paper>
      </Container>
    </>
  );
}