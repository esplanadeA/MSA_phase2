// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Household Plants Management</h1>
      <p>Manage and keep track of your house plants with ease.</p>
      <Link to="/add">Add a New Plant</Link>
      <br />
      <Link to="/plants">View All Plants</Link>
    </div>
  );
};

export default Home;
