// src/api/plantService.ts
import { Plant } from '../models/Plant';

const API_URL = 'http://localhost:5006/Plant'; // This is where you define the API URL

export const fetchPlants = async (): Promise<Plant[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchPlantById = async (id: number): Promise<Plant> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const addPlant = async (plant: Plant): Promise<Plant> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plant),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const updatePlant = async (plant: Plant): Promise<void> => {
  const response = await fetch(`${API_URL}/${plant.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(plant),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
};

export const deletePlant = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
};
