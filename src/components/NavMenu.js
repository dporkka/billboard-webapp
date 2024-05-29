import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Billboard Web App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/auth">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/billboards">
          Billboards
        </Button>
        <Button color="inherit" component={Link} to="/campaigns">
          Campaigns
        </Button>
        <Button color="inherit" component={Link} to="/upload">
          Upload
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavMenu;
