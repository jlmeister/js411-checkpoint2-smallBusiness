import React from 'react'
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

const Navigation = ({ logout }) => {
  let isLoggedIn = true;
  return (
    <AppBar position='relative'>
      <Toolbar>
        <Typography variant='h6' style={{flexGrow: 1}}>
          Austin Small Business
        </Typography>
        <Button color='inherit'>Listings</Button>
        {
          isLoggedIn ? (
            <>
              <Button color='inherit'>Add</Button>
              <Button color='inherit' onClick={() => logout()}>Logout</Button>
            </>
            ) : (
              <Button color='inherit'>Login</Button>
            )
        }
      </Toolbar>
    </AppBar>
  )
}

export default Navigation