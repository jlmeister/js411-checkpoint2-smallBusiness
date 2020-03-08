import React, { useState } from 'react';
import { Button, Container, TextField } from "@material-ui/core";

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    document.cookie = 'loggedIn=true;max-age=600';
    history.push('/')
  }

  return (
    <Container maxWidth='sm'>
      <form className='login-form' onSubmit={e => handleSubmit(e)}>
        <TextField
          required
          onChange={e => setUsername(e.target.value)}
          value={username}
          name="username"
          label="Username"
          type="text"
          style={{ marginBottom: '.5rem' }} />
        <TextField
          required
          onChange={e => setPassword(e.target.value)}
          value={password}
          name="password"
          label="Password"
          type="password" />
        <Button
          type="submit"
          className="login-button"
          variant="contained"
          color="primary"
          style={{ width: '250px', margin: '2rem auto 0' }}>Login</Button>
      </form>
    </Container>
  )
}

export default Login