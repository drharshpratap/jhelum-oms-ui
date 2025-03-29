import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientList from './features/clients/ClientList';
import ClientForm from './features/clients/ClientForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientList />} />
        <Route path="/add" element={<ClientForm />} />
      </Routes>
    </Router>
  );
}

export default App;