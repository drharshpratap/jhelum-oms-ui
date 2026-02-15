import { Box, Typography } from "@mui/material";

export default function WorkspaceMetricCard({ label, value }) {
  return (
    <Box className="peb-metricCard">
      <Typography className="peb-metricValue">{value}</Typography>
      <Typography className="peb-metricLabel">{label}</Typography>
    </Box>
  );
}
