// src/components/Header/HeaderStyles.tsx
import { styled } from '@mui/system';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

export const StyledAppBar = styled(AppBar)({
  backgroundColor: '#4CAF50', // Green background
});

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const NavList = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

export const NavItem = styled('li')({
  margin: '0 10px',
});

export const NavLink = styled(Button)({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

export const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
