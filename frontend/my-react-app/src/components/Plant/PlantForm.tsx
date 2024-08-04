// src/components/Plant/PlantForm.tsx
import React, { useState } from 'react';
import { Plant } from '../../models/Plant';
import { addPlant, updatePlant } from '../../api/plantService';
import { useNavigate } from 'react-router-dom';

interface PlantFormProps {
  plant?: Plant;
}

const PlantForm: React.FC<PlantFormProps> = ({ plant }) => {
  const [name, setName] = useState(plant?.name || '');
  const [species, setSpecies] = useState(plant?.species || '');
  // Initialize other fields similarly
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPlant: Plant = {
      id: plant?.id || 0,
      name,
      species,
      purchaseDate: '',
      imageUrl: '',
      wateringInterval: 0,
      fertilizingInterval: 0,
      notes: '',
      lastWatered: '',
      lastFertilized: '',
    };

    if (plant) {
      await updatePlant(newPlant);
    } else {
      await addPlant(newPlant);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        placeholder="Species"
      />
      {/* Add other form fields here */}
      <button type="submit">Save</button>
    </form>
  );
};

export default PlantForm;
