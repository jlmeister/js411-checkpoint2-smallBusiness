import React from 'react'
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';
import { checkAuth } from "../auth";

const Navigation = () => {
  const history = useHistory();
  const logout = () => {
    document.cookie = 'loggedIn=;';
    history.replace(history.location.pathname)
  }

  return (
    <AppBar position='relative'>
      <Toolbar>
        <Typography variant='h6' style={{flexGrow: 1}}>
          Austin Small Business
        </Typography>
        <Button color='inherit' component={Link} to='/'>Listings</Button>
        {
          checkAuth() ? (
              <Button color='inherit' onClick={() => logout()}>Logout</Button>
            ) : (
              <Button color='inherit' component={Link} to='/login'>Login</Button>
            )
        }
      </Toolbar>
    </AppBar>
  )
}

export default Navigation