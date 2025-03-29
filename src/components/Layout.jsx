import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from '@mui/material';

const Layout = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <Container sx={{ flex: 1, py: 4 }}>
      {children}
    </Container>
    <Footer />
  </div>
);

export default Layout;
