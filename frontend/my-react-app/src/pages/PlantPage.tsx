// src/pages/PlantPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{plant.name}</h1>
      <p><strong>Species:</strong> {plant.species}</p>
      <p><strong>Purchase Date:</strong> {plant.purchaseDate}</p>
      <p><strong>Watering Interval:</strong> {plant.wateringInterval} days</p>
      <p><strong>Fertilizing Interval:</strong> {plant.fertilizingInterval} days</p>
      <p><strong>Notes:</strong> {plant.notes}</p>
      <img src={plant.imageUrl} alt={plant.name} style={{ maxWidth: '300px' }} />
      <br />
      <Link to={`/edit/${plant.id}`}>Edit Plant</Link>
      <br />
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default PlantPage;
