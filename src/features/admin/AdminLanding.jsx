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

const USERS = [
  { name: "Amit Sharma", email: "amit@mail.com", role: "Admin", status: "Active" },
  { name: "Neha Verma", email: "neha@mail.com", role: "Accountant", status: "Active" },
  { name: "Rahul Singh", email: "rahul@mail.com", role: "Owner", status: "Invited" }
];

export default function AdminLanding() {
  const location = useLocation();
  const showSuccess = location.state?.inviteSuccess;

  return (
    <>
     <AdminAccessGate>

      {showSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Invitation sent successfully.
        </Alert>
      )}

      <h2>Users Overview</h2>

      <DemoAccessGenerator />

      <Table>
        ...
      </Table>
      </AdminAccessGate>
    </>
  );
}
