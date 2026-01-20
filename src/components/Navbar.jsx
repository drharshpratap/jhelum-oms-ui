import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          Pebbles Demo
        </Link>
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/clients">Clients</Button>
      <Button color="inherit" component={Link} to="/documents">Documents</Button>
      <Button color="inherit" component={Link} to="/inbox">Inbox</Button>
      <Button color="inherit" component={Link} to="/admin">Admin</Button>

      
    </Toolbar>
  </AppBar>
);

export default Navbar;
