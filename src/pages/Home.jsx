import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

import clientsImg from "../assets/illustrations/clients.svg";
import documentsImg from "../assets/illustrations/documents.svg";
import adminImg from "../assets/illustrations/admin.svg";
import inboxImg from "../assets/illustrations/inbox.svg";

const MODULES = [
  {
    title: "Customer Management",
    description: "Manage and organize Customer data.",
    image: clientsImg,
    route: "/clients",
    color: "blue"
  },
  {
    title: "Document Management",
    description: "Upload, organize, and manage documents.",
    image: documentsImg,
    route: "/documents",
    color: "purple"
  },
  {
    title: "Admin Controls",
    description: "Manage users, roles, and system settings.",
    image: adminImg,
    route: "/admin",
    color: "gray"
  },
  {
    title: "Inbox & Messaging",
    description: "Communicate with users inside the application.",
    image: inboxImg,
    route: "/inbox",
    color: "green"
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box className="home-container">
      <Box className="home-hero">
        <Box>
          <Typography variant="h4" className="home-title">
            Welcome to Pebbles
          </Typography>
          <Typography className="home-subtitle">
            Choose a module below to get started.
          </Typography>
        </Box>

        <img
          src={clientsImg}
          alt="illustration"
          className="home-hero-image"
        />
      </Box>

      <Grid container spacing={3}>
        {MODULES.map((module) => (
          <Grid item xs={12} md={6} key={module.title}>
            <Box className={`module-card ${module.color}`}>
              <img
                src={module.image}
                alt={module.title}
                className="module-image"
              />

              <Box className="module-content">
                <Typography variant="h6">
                  {module.title}
                </Typography>

                <Typography className="module-description">
                  {module.description}
                </Typography>

                <Button
                  variant="contained"
                  className="module-button"
                  onClick={() => navigate(module.route)}
                >
                  Go to module →
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity */}
      <Box className="activity-section">
        <Typography variant="h6" className="activity-title">
          Recent Activity
        </Typography>

        <Box className="activity-list">
          <Box className="activity-item">
            <span className="activity-dot blue" />
            <span>New user invited</span>
            <span className="activity-time">2 hours ago</span>
          </Box>

          <Box className="activity-item">
            <span className="activity-dot green" />
            <span>Document uploaded</span>
            <span className="activity-time">1 day ago</span>
          </Box>

          <Box className="activity-item">
            <span className="activity-dot purple" />
            <span>Client added</span>
            <span className="activity-time">3 days ago</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}