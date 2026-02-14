
import { Box, Typography } from "@mui/material";
import TaskListRow from "./TaskListRow";

export default function TaskListPanel({ tasks, selectedId, onSelect }) {
  return (
    <Box className="peb-taskListPanel">
      <Box className="peb-taskListHeader">
        <Typography sx={{ fontWeight: 700 }}>Tasks</Typography>
      </Box>
      <Box className="peb-taskListScroll">
        {tasks.map((t) => (
          <TaskListRow key={t.id} task={t} selected={t.id===selectedId} onClick={() => onSelect(t)} />
        ))}
      </Box>
    </Box>
  );
}
