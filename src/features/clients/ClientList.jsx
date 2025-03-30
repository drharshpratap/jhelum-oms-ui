import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from './clientSlice';
import { Button, CircularProgress, List, ListItem, ListItemText, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ClientList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.clients);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const sortedItems = [...items].sort((a, b) => {
    if (!sortField) return 0;
    const fieldA = a[sortField]?.toLowerCase?.() || '';
    const fieldB = b[sortField]?.toLowerCase?.() || '';
    if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
    if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="p-6">
      <Typography variant="h4" gutterBottom>Clients</Typography>

      <Grid container spacing={2} className="mb-4">
        <Grid item>
          <Button variant="contained" onClick={() => handleSort('name')}>
            Sort by Name ({sortOrder === 'asc' && sortField === 'name' ? '↑' : '↓'})
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => handleSort('contactNumber')}>
            Sort by Contact ({sortOrder === 'asc' && sortField === 'contactNumber' ? '↑' : '↓'})
          </Button>
        </Grid>
        <Grid item>
          <Link to="/add">
            <Button variant="outlined" color="primary">Add New Client</Button>
          </Link>
        </Grid>
      </Grid>

      {loading && <CircularProgress />}
      {error && <p>Error: {error}</p>}
      <List>
        {sortedItems.map((client) => (
          <ListItem key={client.id} divider>
            <ListItemText
              primary={client.name}
              secondary={
                <>
                  Email: {client.email} | Contact: {client.contactNumber}
                  <br />
                  <Link to={`/clients/${client.id}/portfolios`}>
                    View Portfolios →
                  </Link>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
