import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ClientForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
      await axios.post(`${apiBaseUrl}/clients`, formData);
      alert('Client added successfully');
      navigate('/');
    } catch (error) {
      console.error('Error adding client:', error);
      alert('Failed to add client');
    }
  };

  return (
    <div className="p-6">
      <Typography variant="h5" gutterBottom>Add New Client</Typography>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <TextField fullWidth label="Client Name" name="name" value={formData.name} onChange={handleChange} />
        <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} />
        <TextField fullWidth label="Contact Number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </div>
  );
}
