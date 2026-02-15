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

      {/* ✅ Workday-style Split View */}
      <TaskSplitView tasks={TASKS} />
    </Box>
  );
}
