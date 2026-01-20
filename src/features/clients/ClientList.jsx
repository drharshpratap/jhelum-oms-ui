import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Chip,
  Avatar
} from "@mui/material";
import "./client.css";

const CLIENTS = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 555 234 5678",
    status: "Active"
  },
  {
    id: 2,
    name: "Emily Johnson",
    email: "emily.j@example.com",
    phone: "+1 555 987 1122",
    status: "Inactive"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1 555 772 4433",
    status: "Active"
  }
];

export default function ClientList() {
  const [search, setSearch] = useState("");

  const filteredClients = CLIENTS.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box className="clients-wrapper">
      {/* Header */}
      <Box className="clients-header">
        <Typography variant="h5">Clients</Typography>
        <Button variant="contained">Add Client</Button>
      </Box>

      {/* Search */}
      <TextField
        placeholder="Search clients..."
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="clients-search"
      />

      {/* Client List */}
      {filteredClients.length === 0 ? (
        <Box className="clients-empty">
          <Typography>No clients found</Typography>
        </Box>
      ) : (
        filteredClients.map((client) => (
          <Box key={client.id} className="client-row">
            <Avatar className="client-avatar">
              {client.name.charAt(0)}
            </Avatar>

            <Box className="client-info">
              <Typography className="client-name">
                {client.name}
              </Typography>
              <Typography className="client-meta">
                {client.email} • {client.phone}
              </Typography>
            </Box>

            <Chip
              label={client.status}
              color={
                client.status === "Active" ? "success" : "default"
              }
              size="small"
            />
          </Box>
        ))
      )}
    </Box>
  );
}