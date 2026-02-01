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

import AdminAccessGate from "../features/admin/AdminAccessGate";

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

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {USERS.map((user, i) => (
            <TableRow key={i}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Chip
                  label={user.status}
                  color={user.status === "Active" ? "success" : "warning"}
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </AdminAccessGate>
    </>
  );
}