import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

export default function AdminNavbar() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        px: 3,
        py: 1.5,
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "#fafafa"
      }}
    >
      <Button component={NavLink} to="/admin">
        Overview
      </Button>
      <Button component={NavLink} to="/admin/invite">
        Invite Users
      </Button>
      <Button component={NavLink} to="/admin/rates">
        Product Rates
      </Button>
    </Box>
  );
}