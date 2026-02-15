import { useLocation } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Alert
} from "@mui/material";

import AdminAccessGate from "./AdminAccessGate";
import DemoAccessGenerator from "./demoAccess/DemoAccessGenerator";


export default function AdminLanding() {
  const location = useLocation();
  const showSuccess = location.state?.inviteSuccess;

  return (
    <>
 

      {showSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Invitation sent successfully.
        </Alert>
      )}

      <h2>Users Overview</h2>

      <DemoAccessGenerator />

      <Table>
        
      </Table>

    </>
  );
}
