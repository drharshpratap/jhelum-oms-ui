import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

import clientsImg from "../assets/illustrations/clients.svg";
import documentsImg from "../assets/illustrations/documents.svg";
import adminImg from "../assets/illustrations/admin.svg";
import inboxImg from "../assets/illustrations/inbox.svg";
import { useSelector } from "react-redux";

const MODULES = [
  {
    title: "Customer Management",
    description: "Manage and organize Customer data.",
    image: clientsImg,
    route: "/clients",
    color: "sage",
    featureKey: "clients",
  },
  {
    title: "Document Management",
    description: "Upload, organize, and manage documents.",
    image: documentsImg,
    route: "/documents",
    color: "stone",
    featureKey: "documents",
  },
  {
    title: "Admin Controls",
    description: "Manage users, roles, and system settings.",
    image: adminImg,
    route: "/admin",
    color: "charcoal",
  },
  {
    title: "Inbox & Messaging",
    description: "Communicate with users inside the application.",
    image: inboxImg,
    route: "/inbox",
    color: "mist",
    featureKey: "inbox",
  },
];

export default function Home() {
  const navigate = useNavigate();

  const featureFlags = useSelector((state) => state.admin.featureFlags);

  return (
    <Box className="home-container">
      <Box className="home-hero">
        <Box>
          <Typography variant="h4" className="home-title">
            Welcome to Pebbles
          </Typography>
          <Typography className="home-subtitle">
            Pick a module below to get started. 
          
          </Typography>
        </Box>

        
      </Box>

      <Grid container spacing={3}>
        {MODULES.filter((module) => {
          if (!module.featureKey) return true;
          return featureFlags?.[module.featureKey];
        }).map((module) => (
          <Grid item xs={12} md={6} key={module.title}>
            <Box className={`module-card ${module.color}`}>
              <img
                src={module.image}
                alt={module.title}
                className="module-image"
              />

              <Box className="module-content">
                <Typography variant="h6">{module.title}</Typography>

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

      <Box className="activity-section">
        <Typography variant="h6" className="activity-title">
          Recent Activity
        </Typography>

        <Box className="activity-list">
          <Box className="activity-item">
            <span className="activity-dot sage" />
            <span>New user invited</span>
            <span className="activity-time">2 hours ago</span>
          </Box>

          <Box className="activity-item">
            <span className="activity-dot mist" />
            <span>Document uploaded</span>
            <span className="activity-time">1 day ago</span>
          </Box>

          <Box className="activity-item">
            <span className="activity-dot stone" />
            <span>Client added</span>
            <span className="activity-time">3 days ago</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
