import { useState } from "react";
import { Box, TextField, Button, Alert, Typography } from "@mui/material";

export default function DemoLoginPage({
  session,
  onUnlock,
  error,
  allowAdminBypass,
  adminUser,
  adminPass,
  onAdminUnlock,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Admin override
    if (allowAdminBypass && username === adminUser && password === adminPass) {
      onAdminUnlock();
      return;
    }

    // Demo session login
    if (session && username === session.username && password === session.password) {
      onUnlock();
    }
  };

  return (
    <Box sx={{ maxWidth: 420, mx: "auto", mt: 10, p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Demo Access Login
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <Alert severity="info" sx={{ mb: 2 }}>
        Enter demo credentials or admin override.
      </Alert>

      <TextField
        fullWidth
        label="Username"
        sx={{ mb: 2 }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        sx={{ mb: 2 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button fullWidth variant="contained" onClick={handleLogin}>
        Login
      </Button>

      {allowAdminBypass && (
        <Alert severity="warning" sx={{ mt: 2 }}>
         Input Admin Override
        </Alert>
      )}
    </Box>
  );
}
