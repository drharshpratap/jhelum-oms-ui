import { Box, Typography } from "@mui/material";
import WorkspaceActivityItem from "./WorkspaceActivityItem";

export default function WorkspaceActivityFeed({ activity }) {
  return (
    <Box className="peb-activityFeed">
      <Typography className="peb-sectionTitle">
        Recent Activity
      </Typography>

      {activity.map((event) => (
        <WorkspaceActivityItem key={event.id} event={event} />
      ))}
    </Box>
  );
}
