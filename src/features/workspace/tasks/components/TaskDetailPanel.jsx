
import { Box, Button, Chip, Typography } from "@mui/material";

export default function TaskDetailPanel({ task, onBack }) {
  return (
    <Box sx={{ flex: 1, border: "1px solid var(--peb-stone)", borderRadius: 3, p: 3 }}>
      {onBack ? (
        <Button onClick={onBack} sx={{ mb: 2, textTransform: "none" }}>
          ← Back
        </Button>
      ) : null}

      <Typography sx={{ fontSize: "1.4rem", fontWeight: 800 }}>
        {task.title}
      </Typography>

      <Chip label={task.status} size="small" sx={{ mt: 1, borderRadius: 2 }} />

      <Typography sx={{ mt: 2, color: "var(--peb-muted)" }}>
        Assigned To: {task.assignedTo} • Created By: {task.createdBy}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography sx={{ fontWeight: 700 }}>Task Instructions</Typography>
        <Typography sx={{ mt: 1, color: "var(--peb-slate)" }}>
          This is where the assignee will complete the submission form.
        </Typography>
      </Box>
    </Box>
  );
}
