// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'; // Import Layout component
import PlantList from './components/Plant/PlantList';
import PlantDetails from './components/Plant/PlantDetails';
import PlantForm from './components/Plant/PlantForm';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PlantList />} />
        <Route path="/plants/:id" element={<PlantDetails />} />
        <Route path="/add" element={<PlantForm />} />
        <Route path="/edit/:id" element={<PlantForm />} />
      </Routes>
    </Layout>
  );
};

export default App;
