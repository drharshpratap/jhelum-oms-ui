import { Outlet } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import InboxNavbar from "../components/inbox/InboxNavbar";

export default function InboxLayout() {
  return (
    <>
      <InboxNavbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Outlet />
        </Paper>
      </Container>
    </>
  );
}