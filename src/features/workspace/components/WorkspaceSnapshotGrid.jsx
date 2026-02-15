import { Box, Typography } from "@mui/material";
import WorkspaceMetricCard from "./WorkspaceMetricCard";
import WorkspaceRecentDocuments from "./WorkspaceRecentDocuments";

export default function WorkspaceSnapshotGrid({
  openCount,
  submittedCount,
  completedCount,
  documents,
}) {
  return (
    <Box className="peb-workspaceSnapshot">
      <Typography className="peb-sectionTitle">
        Workspace Snapshot
      </Typography>

      <Box className="peb-metricGrid">
        <WorkspaceMetricCard label="Open Tasks" value={openCount} />
        <WorkspaceMetricCard label="Submitted" value={submittedCount} />
        <WorkspaceMetricCard label="Completed" value={completedCount} />
      </Box>

      <WorkspaceRecentDocuments documents={documents} />
    </Box>
  );
}
