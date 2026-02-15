  import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import ClientDetails from "./ClientDetails";
  import ClientEditPanel from "./components/ClientEditPanel";

import ModuleHeader from "../../components/ModuleHeader";

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
    },
    {
      id: 4,
      name: "Olivia Lee",
      email: "olivia.lee@example.com",
      phone: "+1 555 123 4567",
      status: "Active"
    },
    {
      id: 5,
      name: "Ethan Hall",
      email: "ethan.hall@example.com",
      phone: "+1 555 901 2345",
      status: "Inactive"
    },
    {
      id: 6,
      name: "Sophia Patel",
      email: "sophia.patel@example.com",
      phone: "+1 555 678 9012",
      status: "Active"
    },
    {
      id: 7,
      name: "Liam Chen",
      email: "liam.chen@example.com",
      phone: "+1 555 345 6789",
      status: "Inactive"
    },
    {
      id: 8,
      name: "Alexander Martin",
      email: "alexander.martin@example.com",
      phone: "+1 555 567 8901",
      status: "Active"
    },
    {
      id: 9,
      name: "Ruby Singh",
      email: "ruby.singh@example.com",
      phone: "+1 555 890 1234",
      status: "Inactive"
    },
    {
      id: 10,
      name: "Hannah Lee",
      email: "hannah.lee@example.com",
      phone: "+1 555 111 2223",
      status: "Active"
    }
  ];

  export default function ClientList() {
    const [search, setSearch] = useState("");
    const [expandedClientId, setExpandedClientId] = useState(null);

    const [clients, setClients] = useState(CLIENTS);
    const [selectedClient, setSelectedClient] = useState(null);

    const navigate = useNavigate();

    const handleToggleClient = (clientId) => {
      setExpandedClientId((prev) =>
        prev === clientId ? null : clientId
      );
    };

    const handleUpdateClient = (updatedClient) => {
      setClients((prev) =>
        prev.map((c) =>
          c.id === updatedClient.id ? updatedClient : c
        )
      );
    };

    const getAvatarColor = (name) => {
      const colors = [
        "#1976d2",
        "#9c27b0",
        "#2e7d32",
        "#ed6c02",
        "#0288d1",
        "#6a1b9a"
      ];
      const index = name.charCodeAt(0) % colors.length;
      return colors[index];
    };

    const filteredClients = clients.filter((client) =>
      client.name.toLowerCase().includes(search.toLowerCase())
    );

    return (

      
      <Box className="clients-wrapper">
          
        {/* Header */}
        <ModuleHeader
          title="Clients"
          subtitle="Manage customer relationships, accounts, and lifecycle activity."
          actions={
            <>
             

              <Button
                variant="contained"
                onClick={() => navigate("/clients/add")}
              >
                + Add Client
              </Button>

             

            </>
          }
        />

        {/* Search */}
        <TextField
          placeholder="Search clients..."
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="clients-search"
          sx={{ mb: 2 }}
        />

        {/* Client List */}
        {filteredClients.length === 0 ? (
          <Box className="clients-empty">
            <Typography>No clients found</Typography>
          </Box>
        ) : (
          filteredClients.map((client) => (
            <Box
              key={client.id}
              className="client-row"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
                flexWrap: "wrap",
                py: 1,

                "@media (max-width: 600px)": {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 6,
                },
              }}
            >
              <Avatar
                className="client-avatar"
                sx={{ bgcolor: getAvatarColor(client.name), width: 38, height: 38 }}
              >
                {client.name.charAt(0)}
              </Avatar>

              <Box sx={{ flex: 1, width: "100%" }}>
                <Typography
                  className="client-name"
                  sx={{
                    cursor: "pointer",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                  onClick={() => handleToggleClient(client.id)}
                >
                  {client.name}
                </Typography>

                <Typography
                  className="client-meta"
                  sx={{ mt: 0.2, fontSize: "0.85rem" }}
                >
                  {client.email} • {client.phone}
                </Typography>
              </Box>

              {/* Responsive actions */}
              <Box
                sx={{
                  display: "flex",
                  gap: 6,
                  alignItems: "center",

                  "@media (max-width: 600px)": {
                    width: "100%",
                    justifyContent: "space-between",
                  },
                }}
              >
                <Chip
                  label={client.status}
                  color={
                    client.status === "Active" ? "success" : "default"
                  }
                  size="small"
                />

                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                    px: 1.5,
                    minHeight: 30,
                    boxShadow: "none",
                  }}
                  onClick={() => setSelectedClient(client)}
                >
                  Edit
                </Button>
              </Box>

              {expandedClientId === client.id && (
                <Box className="client-details-inline" sx={{ width: "100%" }}>
                  <ClientDetails client={client} />
                </Box>
              )}
            </Box>
          ))
        )}

        {/* Modal Edit Panel */}
        {selectedClient && (
          <ClientEditPanel
            client={selectedClient}
            onClose={() => setSelectedClient(null)}
            onSave={handleUpdateClient}
          />
        )}
      </Box>
    );
  }
