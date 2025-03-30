import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Button, Grid, Card, CardContent } from '@mui/material';
import axios from 'axios';

export default function ClientPortfolioPage() {
  const { id } = useParams(); // client ID
  const navigate = useNavigate();
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchPortfolios = async () => {
      try {
        const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(`${apiBaseUrl}/clients/${id}/portfolios`);
        setPortfolios(response.data);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
        // fallback mock data
        setPortfolios([
          { id: 1, name: "Growth Portfolio", type: "Aggressive", aum: "$1.2M", status: "Active" },
          { id: 2, name: "Retirement Fund", type: "Conservative", aum: "$800K", status: "Active" }
        ]);
      }
    };
    fetchPortfolios();
  }, [id]);

  const handleAddPortfolio = () => {
    navigate(`/clients/${id}/add-portfolio`);
    
  };

  return (
    <div className="p-6">
      <Typography variant="h4" gutterBottom>Portfolios for Name</Typography>
      <Button variant="contained" color="primary" onClick={handleAddPortfolio}>
        Add Portfolio
      </Button>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {portfolios.map((portfolio) => (
          <Grid item xs={12} md={6} key={portfolio.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{portfolio.name}</Typography>
                <Typography>Type: {portfolio.type}</Typography>
                <Typography>AUM: {portfolio.aum}</Typography>
                <Typography>Status: {portfolio.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
