import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

export default function InboxNavbar() {
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
      <Button component={NavLink} to="/inbox">Inbox</Button>
      <Button component={NavLink} to="/inbox/compose">Compose</Button>
    </Box>
  );
}