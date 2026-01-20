import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  MenuItem,
  Stack
} from "@mui/material";

const ROLES = ["Admin", "Owner", "Accountant", "Assistant"];

export default function InviteUser() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/admin", {
      state: { inviteSuccess: true }
    });
  };

  return (
    <Stack spacing={3} maxWidth={500}>
      <h2>Invite New User</h2>

      <TextField label="Full Name" required />
      <TextField label="Email" type="email" required />
      <TextField label="Phone Number" />
      <TextField label="Address" multiline rows={2} />

      <TextField select label="Role" required>
        {ROLES.map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="contained" onClick={handleSubmit}>
        Send Invite
      </Button>
    </Stack>
  );
}