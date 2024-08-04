import React, { useEffect, useState } from 'react';
import { fetchPlants } from '../../api/plantService';
import { Plant } from '../../models/Plant';

const PlantList: React.FC = () => {
    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        const getPlants = async () => {
            const plantData = await fetchPlants();
            setPlants(plantData);
        };

        getPlants();
    }, []);

    return (
        <div>
            <h1>Plant List</h1>
            <ul>
                {plants.map(plant => (
                    <li key={plant.id}>{plant.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlantList;
