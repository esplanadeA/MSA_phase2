// src/components/Header/Header.tsx
import React from 'react';
import { Typography } from '@mui/material'; // Import Typography here
import { StyledAppBar, StyledToolbar, NavList, NavItem, NavLink, StyledContainer } from './HeaderStyles';

const Header: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledContainer>
          <Typography variant="h6">QPlant</Typography>
          <nav>
            <NavList>
              <NavItem>
                <NavLink color="inherit" component="a" href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink color="inherit" component="a" href="/plants">
                  Plants
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink color="inherit" component="a" href="/add">
                  Add Plants
                </NavLink>
              </NavItem>
            </NavList>
          </nav>
        </StyledContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
