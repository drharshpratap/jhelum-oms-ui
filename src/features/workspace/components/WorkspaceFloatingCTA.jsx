import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WorkspaceFloatingCTA() {
  const navigate = useNavigate();

  return (
    <Button
      className="peb-floatingCTA"
      onClick={() => navigate("/workspace/tasks")}
    >
      + New Task
    </Button>
  );
}
