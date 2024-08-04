// src/pages/Home.tsx
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Household Plants Management
      </Typography>
      <Typography variant="h6" paragraph>
        Manage and keep track of your house plants with ease.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/add"
          sx={{ mr: 2 }}
        >
          Add a New Plant
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/plants"
        >
          View All Plants
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
