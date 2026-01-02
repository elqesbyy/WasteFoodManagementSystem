import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const Dashboard = () => {
  const [kpis, setKpis] = useState({
    totalUsers: 0,
    activeUsers: 0,
    donors: 0,
    associations: 0,
    admins: 0,
    totalOffers: 0,
    availableOffers: 0,
    expiredOffers: 0,
    claimedOffers: 0,
    totalFoodSaved: 0,
    transactions: 0,
    acceptanceRate: 0,
    offersPerDay: [],
    transactionsPerMonth: []
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/dashboard")
      .then(res => setKpis(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>

      {/* KPIs cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h5">{kpis.totalUsers}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Users</Typography>
              <Typography variant="h5">{kpis.activeUsers}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Offers</Typography>
              <Typography variant="h5">{kpis.totalOffers}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Food Saved (kg)</Typography>
              <Typography variant="h5">{kpis.totalFoodSaved}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Graphiques : Offres créées par jour */}
      <Typography variant="h6" style={{ marginTop: "2rem" }}>Offres créées par jour</Typography>
      <BarChart width={800} height={300} data={kpis.offersPerDay}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>

      {/* Graphiques : Transactions par mois */}
      <Typography variant="h6" style={{ marginTop: "2rem" }}>Transactions par mois</Typography>
      <BarChart width={800} height={300} data={kpis.transactionsPerMonth}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Dashboard;
