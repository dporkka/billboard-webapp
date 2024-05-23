import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Billboard Web App
      </Typography>
      <Typography variant="body1">
        Use the navigation to explore the app.
      </Typography>
    </Container>
  );
};

export default Home;
