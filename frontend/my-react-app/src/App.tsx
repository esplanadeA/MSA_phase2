// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'; 
import Home from './pages/Home';
import PlantPage from './pages/PlantPage';
import PlantList from './components/Plant/PlantList';
import PlantDetails from './components/Plant/PlantDetails';
import PlantForm from './components/Plant/PlantForm';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/plants" element={<PlantList />} />
        <Route path="/plants/:id" element={<PlantPage />} />
        <Route path="/add" element={<PlantForm />} />
        <Route path="/edit/:id" element={<PlantForm />} />
      </Routes>
    </Layout>
  );
};

export default App;
