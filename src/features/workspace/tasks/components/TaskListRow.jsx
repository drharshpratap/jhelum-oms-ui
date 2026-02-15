
import { Box, Chip, Typography } from "@mui/material";

export default function TaskListRow({ task, selected, onClick }) {
  return (
    <Box
      onClick={onClick}
      className={`peb-taskRow ${selected ? "peb-taskRowSelected" : ""
        }`}
    >

      <Box>
        <Typography sx={{ fontWeight: 600 }}>{task.title}</Typography>
        <Typography sx={{ fontSize: "0.8rem", color: "var(--peb-muted)" }}>
          Assigned: {task.assignedTo}
        </Typography>
      </Box>
      <Chip
        size="small"
        label={task.status}
        className={`peb-statusChip ${task.status === "OPEN"
            ? "peb-statusOpen"
            : task.status === "SUBMITTED"
              ? "peb-statusSubmitted"
              : "peb-statusCompleted"
          }`}
      />

    </Box>
  );
}
