import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ClientNavbar = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Link to="/clients" style={{ color: 'inherit', textDecoration: 'none' }}>
          Client
        </Link>
      </Typography>
      <Button color="inherit" component={Link} to="/clients">
        Clients
      </Button>
      <Button color="inherit" component={Link} to="/clients/add">
        Add Client
      </Button>
    </Toolbar>
  </AppBar>
);

export default ClientNavbar;