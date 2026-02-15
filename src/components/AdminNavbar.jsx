import ModuleHeader from "../components/ModuleHeader";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  return (
    <ModuleHeader
      title="Admin Console"
      subtitle="Manage users, pricing rules, and feature configuration."
      actions={
        <>
          <Button
            variant="contained"
            onClick={() => navigate("/admin")}
          >
            Overview
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/admin/invite")}
          >
            Invite Users
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/admin/rates")}
          >
            Product Rates
          </Button>

          <Button
            variant="contained"
            onClick={() => navigate("/admin/featureflags")}
          >
            Feature Flags
          </Button>
        </>
      }
    />
  );
}
