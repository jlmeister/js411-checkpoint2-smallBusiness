import React, { useState } from 'react';
import { Button, Container, TextField } from "@material-ui/core";

const Login = ({ login }, props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    login(username)
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
          type="text"/>
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
          color="primary">Login</Button>
      </form>
    </Container>
  )
}

export default Login