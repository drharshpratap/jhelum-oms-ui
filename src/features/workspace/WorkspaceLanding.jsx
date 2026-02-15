import { Box } from "@mui/material";
import ModuleHeader from "../../components/ModuleHeader";
import "./style/workspace.css";

import WorkspaceHeroBanner from "./components/WorkspaceHeroBanner";
import WorkspacePrimaryActions from "./components/WorkspacePrimaryActions";
import WorkspaceSnapshotGrid from "./components/WorkspaceSnapshotGrid";
import WorkspaceActivityFeed from "./components/WorkspaceActivityFeed";
import WorkspaceFloatingCTA from "./components/WorkspaceFloatingCTA";

const TASKS = [
  { id: 1, title: "Collect onboarding details", status: "OPEN" },
  { id: 2, title: "Submit compliance form", status: "SUBMITTED" },
  { id: 3, title: "Review signed contract", status: "COMPLETED" },
];

const DOCUMENTS = [
  { id: 1, name: "contract.docx", status: "Uploaded" },
  { id: 2, name: "invoice_Q1.pdf", status: "Pending Review" },
];

export default function WorkspaceLanding() {
  const openCount = TASKS.filter((t) => t.status === "OPEN").length;
  const submittedCount = TASKS.filter((t) => t.status === "SUBMITTED").length;
  const completedCount = TASKS.filter((t) => t.status === "COMPLETED").length;

  const activity = [
    { id: 1, type: "task", text: "Sumit submitted compliance form", time: "5 hours ago" },
    { id: 2, type: "doc", text: "contract.docx uploaded", time: "1 day ago" },
    { id: 3, type: "task", text: "Mayank completed onboarding task", time: "2 days ago" },
  ];

  return (
    <Box className="peb-workspacePage">
      

      <WorkspacePrimaryActions />

      <WorkspaceSnapshotGrid
        openCount={openCount}
        submittedCount={submittedCount}
        completedCount={completedCount}
        documents={DOCUMENTS}
      />

      <WorkspaceActivityFeed activity={activity} />

      <WorkspaceFloatingCTA />
    </Box>
  );
}
