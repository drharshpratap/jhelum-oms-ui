import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientList from './features/clients/ClientList';
import ClientForm from './features/clients/ClientForm';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<ClientList />} />
        <Route path="/add" element={<ClientForm />} />
      </Routes>
    </Router>
  );
}

export default App;
