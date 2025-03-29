import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientList from './features/clients/ClientList';
import ClientForm from './features/clients/ClientForm';
import Home from './pages/Home';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/add" element={<ClientForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
