 // src/components/Plant/PlantForm.tsx
import React, { useState } from 'react';
import { Plant } from '../../models/Plant';
import { addPlant, updatePlant } from '../../api/plantService';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';

interface PlantFormProps {
  plant?: Plant;
}

const PlantForm: React.FC<PlantFormProps> = ({ plant }) => {
  const [name, setName] = useState(plant?.name || '');
  const [species, setSpecies] = useState(plant?.species || '');
  const [purchaseDate, setPurchaseDate] = useState(plant?.purchaseDate || '');
  const [imageUrl, setImageUrl] = useState(plant?.imageUrl || '');
  const [wateringInterval, setWateringInterval] = useState(plant?.wateringInterval || 0);
  const [fertilizingInterval, setFertilizingInterval] = useState(plant?.fertilizingInterval || 0);
  const [notes, setNotes] = useState(plant?.notes || '');
  const [lastWatered, setLastWatered] = useState(plant?.lastWatered || '');
  const [lastFertilized, setLastFertilized] = useState(plant?.lastFertilized || '');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPlant: Plant = {
      id: plant?.id || 0,
      name,
      species,
      purchaseDate,
      imageUrl,
      wateringInterval,
      fertilizingInterval,
      notes,
      lastWatered,
      lastFertilized,
    };

    if (plant) {
      await updatePlant(newPlant);
    } else {
      await addPlant(newPlant);
    }
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {plant ? 'Edit Plant' : 'Add New Plant'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Species"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Purchase Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Watering Interval (days)"
              type="number"
              value={wateringInterval}
              onChange={(e) => setWateringInterval(Number(e.target.value))}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Fertilizing Interval (days)"
              type="number"
              value={fertilizingInterval}
              onChange={(e) => setFertilizingInterval(Number(e.target.value))}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Last Watered"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={lastWatered}
              onChange={(e) => setLastWatered(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Last Fertilized"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={lastFertilized}
              onChange={(e) => setLastFertilized(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {plant ? 'Update Plant' : 'Add Plant'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PlantForm;
