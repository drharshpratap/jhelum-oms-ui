import ModuleHeader from "../components/ModuleHeader";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function InboxNavbar() {
  const navigate = useNavigate(); // ✅ define navigate

  return (
    <ModuleHeader
      title="Inbox"
      subtitle="Manage and Create Messages"
      actions={
        <>
          <Button
            variant="contained"
            onClick={() => navigate("/inbox")}
          >
            Inbox
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/inbox/compose")}
          >
            Compose
          </Button>
        </>
      }
    />
  );
}