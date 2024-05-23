import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, Paper, Box } from '@mui/material';

const BillboardManagement = () => {
  const [billboards, setBillboards] = useState([]);

  useEffect(() => {
    const fetchBillboards = async () => {
      try {
        const res = await axios.get('/billboards');
        setBillboards(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBillboards();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Billboard Management
      </Typography>
      <Paper>
        <List sx={{ mt: 2 }}>
          {billboards.map((billboard) => (
            <ListItem key={billboard._id} sx={{ mb: 1 }}>
              <ListItemText primary={billboard.location} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default BillboardManagement;
