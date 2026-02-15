import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WorkspaceActionCard from "./WorkspaceActionCard";

export default function WorkspacePrimaryActions() {
  const navigate = useNavigate();

  return (
    <Box className="peb-workspaceActionsRow">
      <WorkspaceActionCard
        title="Tasks"
        description="Track assignments, submissions, and completions."
        buttonLabel="Go to Tasks"
        onClick={() => navigate("/workspace/tasks")}
        variant="tasks"
      />

      <WorkspaceActionCard
        title="Documents"
        description="Upload, review, and manage important files."
        buttonLabel="View Documents"
        onClick={() => navigate("/workspace/documents")}
        variant="documents"
      />

      <WorkspaceActionCard
        title="Approvals"
        description="Centralized review workflows (coming soon)."
        buttonLabel="Coming Soon"
        disabled
        variant="approvals"
      />
    </Box>
  );
}
