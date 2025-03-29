import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

export default function ClientForm() {
  return (
    <div className="p-6">
      <Typography variant="h5" gutterBottom>Add New Client</Typography>
      <form className="space-y-4">
        <TextField fullWidth label="Client Name" />
        <TextField fullWidth label="Email" />
        <TextField fullWidth label="Contact Number" />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </div>
  );
}