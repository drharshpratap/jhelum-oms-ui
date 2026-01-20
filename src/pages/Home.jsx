import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from '../components/Navbar';

const data = [
  { name: 'Equity', value: 400 },
  { name: 'Fixed Income', value: 300 },
  { name: 'Mutual Funds', value: 300 },
  { name: 'ETFs', value: 200 },
];

const performance = [
  { name: 'Portfolio 1', value: 400 },
  { name: 'Portfolio 2', value: 300 },
  { name: 'Portfolio 3', value: 500 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Home() {
  return (
    <>
     
      <div className="p-6">
        <Typography variant="h4" gutterBottom>Welcome to Jhelum OMS</Typography>

        <Grid container spacing={2} className="mb-6">
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Clients</Typography>
                <Typography variant="h4">48</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Portfolios</Typography>
                <Typography variant="h4">126</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Assets Under Management</Typography>
                <Typography variant="h4">$12.8M</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Asset Allocation</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8" label>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">Portfolio Performance</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performance}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
