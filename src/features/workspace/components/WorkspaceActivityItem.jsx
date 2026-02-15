import { Box, Typography } from "@mui/material";

export default function WorkspaceActivityItem({ event }) {
  return (
    <Box className="peb-activityItem">
      <Typography className="peb-activityText">
        {event.text}
      </Typography>
      <Typography className="peb-activityTime">
        {event.time}
      </Typography>
    </Box>
  );
}
