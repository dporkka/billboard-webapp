import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, Paper, Box, Button } from '@mui/material';

const CampaignScheduler = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await axios.get('/api/campaigns');
        setCampaigns(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Campaign Scheduler
      </Typography>
      <Paper>
        <List sx={{ mt: 2 }}>
          {campaigns.map((campaign) => (
            <ListItem key={campaign._id} sx={{ mb: 1 }}>
              <ListItemText primary={campaign.name} secondary={`ID: ${campaign._id}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary">
          Add Campaign
        </Button>
      </Box>
    </Container>
  );
};

export default CampaignScheduler;
