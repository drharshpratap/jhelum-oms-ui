import { Box, Button, Typography, Chip } from "@mui/material";
import ModuleHeader from "../../../components/ModuleHeader";
import { useNavigate } from "react-router-dom";

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

      <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
        {TASKS.map((task) => (
          <Box
            key={task.id}
            sx={{
              p: 2.5,
              borderRadius: 3,
              border: "1px solid var(--peb-stone)",
              background: "rgba(245,244,241,0.9)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            <Typography sx={{ fontWeight: 700, color: "var(--peb-slate)" }}>
              {task.title}
            </Typography>

            <Typography sx={{ fontSize: "0.85rem", color: "var(--peb-muted)" }}>
              Assigned To: {task.assignedTo} • Created By: {task.createdBy}
            </Typography>

            <Chip
              label={task.status}
              size="small"
              sx={{
                mt: 1,
                width: "fit-content",
                borderRadius: 2,
                background:
                  task.status === "OPEN"
                    ? "rgba(157,162,127,0.25)"
                    : "rgba(193,154,107,0.25)",
                color: "var(--peb-charcoal)",
                fontWeight: 600,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
