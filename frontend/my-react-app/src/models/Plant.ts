export interface Plant {
  id: number;
  name: string;
  species: string;
  purchaseDate: string;
  imageUrl: string;
  wateringInterval: number;
  fertilizingInterval: number;
  notes: string;
  lastWatered: string;
  lastFertilized: string;
}
