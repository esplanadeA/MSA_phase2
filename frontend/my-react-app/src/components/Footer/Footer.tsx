// src/components/Footer/Footer.tsx
import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { StyledFooter, NavList, NavItem } from './FooterStyles';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
        &copy; {new Date().getFullYear()} QPlant. All rights reserved. ❤
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
