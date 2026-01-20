import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import RecentActivity from "../components/RecentActivity";
import "../styles/home.css";

const MODULES = [
  {
    title: "Client Management",
    description: "Manage and organize client-related data.",
    route: "/clients"
  },
  {
    title: "Document Management",
    description: "Upload, organize, and manage documents.",
    route: "/documents"
  },
  {
    title: "Admin Controls",
    description: "Manage users, roles, and system settings.",
    route: "/admin"
  },
  {
    title: "Inbox & Messaging",
    description: "Communicate with users inside the application.",
    route: "/inbox"
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box className="home-wrapper">
      <Box className="home-header">
        <Typography variant="h4">
          Welcome to the Demo Application
        </Typography>
        <Typography className="home-subtitle">
          Choose a module below to get started.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {MODULES.map((module) => (
          <Grid item xs={12} sm={6} key={module.title}>
            <Card className="module-card">
              <CardContent>
                <Typography variant="h6" className="module-title">
                  {module.title}
                </Typography>
                <Typography className="module-description">
                  {module.description}
                </Typography>
              </CardContent>

              <Box className="module-footer">
                <Button
                  variant="contained"
                  onClick={() => navigate(module.route)}
                >
                  Go to module
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <RecentActivity />
    </Box>
  );
}