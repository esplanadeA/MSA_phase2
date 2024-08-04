// src/components/Header/Header.tsx
import React from 'react';
import './HeaderStyles.css'; // Import the styles

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Household Plants Management</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/plants">Plants</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
