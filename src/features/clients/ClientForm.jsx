import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ClientForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: ''
  });

  const [existingClients, setExistingClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(`${apiBaseUrl}/clients`);
        setExistingClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };
    fetchClients();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isDuplicate = existingClients.some(
      client =>
        client.name.trim().toLowerCase() === formData.name.trim().toLowerCase() &&
        client.contactNumber === formData.contactNumber
    );

    if (isDuplicate) {
      toast.error('Client with this name and contact number already exists!');
      return;
    }

    try {
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
      await axios.post(`${apiBaseUrl}/clients`, formData);
      toast.success('Client added successfully');
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      console.error('Error adding client:', error);
      toast.error('Failed to add client');
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
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
