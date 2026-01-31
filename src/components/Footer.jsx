import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid #e5e7eb",
        color: "#6b7280",
        fontSize: "0.75rem",
        backgroundColor: "#ffffff"
      }}
    >
      <Typography variant="caption" sx={{ margin: 0 }}>
        © {new Date().getFullYear()} PEBBLES. All rights reserved.
      </Typography>
    </Box>
  );
}