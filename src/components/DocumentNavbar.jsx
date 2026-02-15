import ModuleHeader from "../components/ModuleHeader";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DocumentNavbar() {
  const navigate = useNavigate(); // ✅ define navigate

  return (
    <ModuleHeader
      title="Workspace Management"
      subtitle="Documents, Tasks, Approval"
      actions={
        <>
          <Button
            variant="contained"
            onClick={() => navigate("/workspace")}
          >
            Workspace
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/workspace/documents")}
          >
            Documents
          </Button>



          <Button
            variant="outlined"
            onClick={() => navigate("/workspace/tasks")}
          >
            Tasks
          </Button>

        </>
      }
    />
  );
}
