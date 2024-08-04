// src/components/Plant/PlantDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlantById } from '../../api/plantService';
import { Plant } from '../../models/Plant';

const PlantDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [plant, setPlant] = useState<Plant | null>(null);

  useEffect(() => {
    const getPlant = async () => {
      if (id) {
        const data = await fetchPlantById(parseInt(id, 10));
        setPlant(data);
      }
    };
    getPlant();
  }, [id]);

  if (!plant) return <div>Loading...</div>;

  return (
    <div>
      <h1>{plant.name}</h1>
      <p>Species: {plant.species}</p>
      <p>Purchase Date: {plant.purchaseDate}</p>
      <img src={plant.imageUrl} alt={plant.name} />
      <p>Watering Interval: {plant.wateringInterval} days</p>
      <p>Fertilizing Interval: {plant.fertilizingInterval} days</p>
      <p>Notes: {plant.notes}</p>
      <p>Last Watered: {plant.lastWatered}</p>
      <p>Last Fertilized: {plant.lastFertilized}</p>
    </div>
  );
};

export default PlantDetails;
