// src/components/Footer/Footer.tsx
import React from 'react';
import { Typography } from '@mui/material';
import { StyledFooter } from './FooterStyles';

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
