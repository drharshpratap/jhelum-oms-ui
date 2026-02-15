import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { TextField, Button, MenuItem, Stack } from "@mui/material";

import { addSession } from "./demoAccess/demoAccessSlice";
import {
  generateGuid,
  buildUsername,
  buildPassword,
  buildDemoLink,
} from "./demoAccess/demoSessionService";

const ROLES = ["Admin", "Owner", "Accountant", "Assistant"];

export default function InviteUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Owner");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email) return;

    const [first, last = "User"] = fullName.split(" ");

    const guid = generateGuid();
    const username = buildUsername(first, last);
    const password = buildPassword(first, last);
    const link = buildDemoLink(guid);

    dispatch(
      addSession({
        guid,
        username,
        password,
        link,
        role,
        createdAt: Date.now(),
        openCount: 0,
      })
    );

    navigate("/admin", {
      state: { inviteSuccess: true },
    });
  };

  return (
    <Stack spacing={3} maxWidth={500}>
      <h2>Invite New User</h2>

      <TextField
        label="Full Name"
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <TextField
        label="Email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        select
        label="Role"
        required
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        {ROLES.map((r) => (
          <MenuItem key={r} value={r}>
            {r}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="contained" onClick={handleSubmit}>
        Send Invite
      </Button>
    </Stack>
  );
}
