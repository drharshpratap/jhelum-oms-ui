
import { Box, useMediaQuery } from "@mui/material";
import { useMemo, useState } from "react";
import TaskListPanel from "./TaskListPanel";
import TaskDetailPanel from "./TaskDetailPanel";

export default function TaskSplitView({ tasks }) {
  const isMobile = useMediaQuery("(max-width:900px)");
  const first = useMemo(() => tasks?.[0] || null, [tasks]);
  const [selected, setSelected] = useState(first);
  const [showDetail, setShowDetail] = useState(false);

  const handleSelect = (t) => {
    setSelected(t);
    if (isMobile) setShowDetail(true);
  };

  if (!selected) return <Box>No tasks</Box>;

  return (
    <Box className="peb-taskSplitView">
      {!isMobile || !showDetail ? (
        <TaskListPanel tasks={tasks} selectedId={selected.id} onSelect={handleSelect} />
      ) : null}

      {!isMobile ? (
        <TaskDetailPanel task={selected} />
      ) : showDetail ? (
        <TaskDetailPanel task={selected} onBack={() => setShowDetail(false)} />
      ) : null}
    </Box>
  );
}
