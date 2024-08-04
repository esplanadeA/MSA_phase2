// src/pages/PlantPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Card, CardContent, CardMedia, Box } from '@mui/material';
import { fetchPlantById } from '../api/plantService';
import { Plant } from '../models/Plant';

const PlantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [plant, setPlant] = useState<Plant | null>(null);

  useEffect(() => {
    if (id) {
      fetchPlantById(Number(id)).then(setPlant);
    }
  }, [id]);

  if (!plant) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  return (
    <Container>
      <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 2 }}>
        <CardMedia
          component="img"
          height="300"
          image={plant.imageUrl}
          alt={plant.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {plant.name}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            <strong>Species:</strong> {plant.species}
          </Typography>
          <Typography variant="body1">
            <strong>Purchase Date:</strong> {plant.purchaseDate}
          </Typography>
          <Typography variant="body1">
            <strong>Watering Interval:</strong> {plant.wateringInterval} days
          </Typography>
          <Typography variant="body1">
            <strong>Fertilizing Interval:</strong> {plant.fertilizingInterval} days
          </Typography>
          <Typography variant="body1">
            <strong>Notes:</strong> {plant.notes}
          </Typography>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="space-between" marginTop={2}>
        <Button variant="contained" color="primary" component={Link} to={`/edit/${plant.id}`}>
          Edit Plant
        </Button>
        <Button variant="outlined" color="secondary" component={Link} to="/">
          Back to List
        </Button>
      </Box>
    </Container>
  );
};

export default PlantPage;
