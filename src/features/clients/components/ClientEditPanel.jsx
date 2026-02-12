import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Chip,
  Box,
  Typography,
} from "@mui/material";

export default function ClientEditPanel({ client, onClose, onSave }) {
  const [form, setForm] = useState({ ...client });

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Client</DialogTitle>

      <DialogContent dividers>
        <TextField
          label="Name"
          fullWidth
          value={form.name}
          sx={{ mb: 2, mt: 1 }}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, name: e.target.value }))
          }
        />

        <TextField
          label="Email"
          fullWidth
          value={form.email}
          sx={{ mb: 2 }}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <Box sx={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Typography>Status:</Typography>
          <Chip
            label={form.status}
            clickable
            color={form.status === "Active" ? "success" : "default"}
            onClick={() =>
              setForm((prev) => ({
                ...prev,
                status: prev.status === "Active" ? "Inactive" : "Active",
              }))
            }
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            onSave(form);
            onClose();
          }}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}