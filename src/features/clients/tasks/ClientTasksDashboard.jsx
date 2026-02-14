import { Box, Button } from "@mui/material";
import ModuleHeader from "../../../components/ModuleHeader";
import { useNavigate } from "react-router-dom";
import TaskSplitView from "./components/TaskSplitView";
import "./tasks.css";

const TASKS = [
  {
    id: 1,
    title: "Collect onboarding details",
    assignedTo: "Mayank",
    createdBy: "Pravin",
    status: "OPEN",
  },
  {
    id: 2,
    title: "Submit compliance form",
    assignedTo: "Sumit",
    createdBy: "Jayant",
    status: "SUBMITTED",
  },
];

export default function ClientTasksDashboard() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <ModuleHeader
        title="Tasks"
        subtitle="Manage tasks, submissions, and lifecycle activity."
        actions={
          <>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                borderColor: "var(--peb-muted)",
                color: "var(--peb-charcoal)",
              }}
              onClick={() => navigate("/clients")}
            >
              Back to Clients
            </Button>

            <Button
              variant="contained"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                background: "var(--peb-ocean)",
              }}
              onClick={() => navigate("/clients/tasks")}
            >
              + New Task
            </Button>
          </>
        }
      />

      {/* ✅ Workday-style Split View */}
      <TaskSplitView tasks={TASKS} />
    </Box>
  );
}
