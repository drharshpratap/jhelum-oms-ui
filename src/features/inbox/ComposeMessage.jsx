import { Stack, TextField, Button, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const USERS = [
  "Amit Sharma",
  "Neha Verma",
  "Rahul Singh"
];

export default function ComposeMessage() {
  const navigate = useNavigate();

  const handleSend = () => {
    navigate("/inbox", {
      state: { messageSent: true }
    });
  };

  return (
    <Stack spacing={3} maxWidth={600}>
      <h2>Compose Message</h2>

      <TextField select label="To">
        {USERS.map((u) => (
          <MenuItem key={u} value={u}>{u}</MenuItem>
        ))}
      </TextField>

      <TextField label="Subject" />
      <TextField label="Message" multiline rows={5} />

      <Button variant="contained" onClick={handleSend}>
        Send
      </Button>
    </Stack>
  );
}