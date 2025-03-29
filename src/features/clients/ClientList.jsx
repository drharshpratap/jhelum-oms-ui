import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from './clientSlice';
import { Button, CircularProgress, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ClientList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.clients);

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  return (
    <div className="p-6">
      <Typography variant="h4" gutterBottom>Clients</Typography>
      <Link to="/add">
        <Button variant="contained" color="primary">Add New Client</Button>
      </Link>
      {loading && <CircularProgress />}
      {error && <p>Error: {error}</p>}
      <List>
        {items.map((client) => (
          <ListItem key={client.id}>
            <ListItemText primary={client.name} secondary={client.email} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
