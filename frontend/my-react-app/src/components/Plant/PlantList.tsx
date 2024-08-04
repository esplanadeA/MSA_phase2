// src/components/PlantList.tsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { fetchPlants, deletePlant } from '../../api/plantService';
import { Plant } from '../../models/Plant';
import { useNavigate } from 'react-router-dom';

// Mock data for testing
const mockPlants: Plant[] = [
    {
        id: 1,
        name: "Fiddle Leaf Fig",
        species: "Ficus lyrata",
        purchaseDate: "2023-01-15",
        imageUrl: "https://media.istockphoto.com/id/1270129323/photo/home-plant-green-leaf-ficus-benjamina-elastica-on-a-white-background.jpg?s=2048x2048&w=is&k=20&c=MnoTYO7_5HNGCN3DryeTGC0HVxMsI---2AAi9m2clfw=",
        wateringInterval: 7,
        fertilizingInterval: 30,
        notes: "Needs bright, indirect light.",
        lastWatered: "2024-08-01",
        lastFertilized: "2024-07-15"
    },
    {
        id: 2,
        name: "Snake Plant",
        species: "Sansevieria trifasciata",
        purchaseDate: "2023-03-10",
        imageUrl: "https://media.istockphoto.com/id/1439949379/photo/plant-indoor-in-front-of-window-taking-light.jpg?s=1024x1024&w=is&k=20&c=mKADhK3Dn1R63bMyvHU14WnHbyiDBndSXkW8-Kixkho=",
        wateringInterval: 14,
        fertilizingInterval: 60,
        notes: "Very low maintenance.",
        lastWatered: "2024-08-02",
        lastFertilized: "2024-06-10"
    },
    {
        id: 3,
        name: "Peace Lily",
        species: "Spathiphyllum wallisii",
        purchaseDate: "2023-06-20",
        imageUrl: "https://media.istockphoto.com/id/1323356950/photo/round-transparent-self-watering-device-globe-inside-potted-peace-lilies-spathiphyllum-plant.jpg?s=1024x1024&w=is&k=20&c=rh914xh1DG9qS29pPgrXo5ewXxa1oiHVzRiZxLADK3M=",
        wateringInterval: 7,
        fertilizingInterval: 45,
        notes: "Prefers low to medium light.",
        lastWatered: "2024-07-30",
        lastFertilized: "2024-06-25"
    },
    {
        id: 4,
        name: "Aloe Vera",
        species: "Aloe barbadensis",
        purchaseDate: "2024-02-20",
        imageUrl: "https://media.istockphoto.com/id/1283897904/photo/aloe-vera.jpg?s=1024x1024&w=is&k=20&c=AP8XQ9qX0b0pF9N43Er3pEMCZGsF3wn7Jhsg51Or5s=",
        wateringInterval: 14,
        fertilizingInterval: 60,
        notes: "Good for skin care.",
        lastWatered: "2024-08-02",
        lastFertilized: "2024-07-15"
    },
    {
        id: 5,
        name: "Spider Plant",
        species: "Chlorophytum comosum",
        purchaseDate: "2024-03-05",
        imageUrl: "https://media.istockphoto.com/id/1187576214/photo/spider-plant.jpg?s=1024x1024&w=is&k=20&c=6ebkKGEyTfcJW9pIoDoH9mfFmPY0jGR47TS9v4B2hT0=",
        wateringInterval: 7,
        fertilizingInterval: 45,
        notes: "Easy to grow and care for.",
        lastWatered: "2024-08-01",
        lastFertilized: "2024-07-01"
    }
];

const PlantList: React.FC = () => {
    const [plants, setPlants] = useState<Plant[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPlants = async () => {
            // const plantData = await fetchPlants(); // Uncomment when API is working
            const plantData = mockPlants; // Use mock data for now
            setPlants(plantData);
        };

        getPlants();
    }, []);

    const handleDelete = async (id: number) => {
        // await deletePlant(id); // Uncomment when API is working
        setPlants(plants.filter(plant => plant.id !== id));
    };

    const handleUpdate = (id: number) => {
        navigate(`/update/${id}`); // Navigate to the update form page
    };

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Plant List
            </Typography>
            <Grid container spacing={4}>
                {plants.map((plant) => (
                    <Grid item xs={12} sm={6} md={4} key={plant.id}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={plant.imageUrl}
                                alt={plant.name}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {plant.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Species: {plant.species}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Last Watered: {new Date(plant.lastWatered).toLocaleDateString()}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Last Fertilized: {new Date(plant.lastFertilized).toLocaleDateString()}
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleUpdate(plant.id)}
                                        sx={{ mr: 1 }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        onClick={() => handleDelete(plant.id)}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PlantList;
