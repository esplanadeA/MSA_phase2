// src/components/Footer/FooterStyles.tsx
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';

export const StyledFooter = styled('footer')(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[800],
  color: theme.palette.common.white,
  position: 'absolute',
  bottom: 0,
  width: '100%',
}));

export const NavList = styled('ul')(({ theme }) => ({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
}));

export const NavItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0, 2),
}));
