import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

interface HeaderProps {
  breadcrumb: string;
}

const Header: React.FC<HeaderProps> = ({ breadcrumb }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Breadcrumbs aria-label="breadcrumb" style={{ color: 'white', fontSize: '14px', padding: '0 18px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Task Management</Link>
          <Typography color="textPrimary" style={{ color: 'white', fontSize: '14px'}}>{breadcrumb}</Typography>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
