import { Box, Typography, Button } from "@mui/material";

export default function ClientsHeader({ onAdd }) {
  return (
    <Box
      sx={{
        mb: 3,
        p: 2.5,
        borderRadius: 3,
        border: "1px solid #d6cfc4",
        background: "#f5f4f1",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, color: "#2b2b2b" }}
        >
          Clients
        </Typography>

        <Typography
          sx={{ mt: 0.5, color: "#8f9587", fontSize: "0.95rem" }}
        >
          Manage customer relationships, accounts, and lifecycle activity.
        </Typography>
      </Box>

      <Button
        variant="contained"
        onClick={onAdd}
        sx={{
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 600,
          backgroundColor: "#9da27f",
          "&:hover": {
            backgroundColor: "#8f9587",
          },
        }}
      >
        + Add Client
      </Button>
    </Box>
  );
}
