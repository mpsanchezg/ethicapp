import React from 'react';
import { Toolbar, Typography, Button, AppBar } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Header = ({ isSignedIn, onSignOut }) => {
  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            {'Ethic App'}
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            component={RouterLink}
            to={isSignedIn ? '/sessions' : '/auth/signin'}
            onClick={onClick}
          >
            {isSignedIn ? 'Logout' : 'Login'}
          </Button>
          <Button
            color="primary"
            variant="outlined"
            component={RouterLink}
            to={isSignedIn ? '/sessions' : '/auth/signin'}
          >
            {'Sessions'}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
