import React, { useState } from 'react';
import { Button, Container, TextField } from "@material-ui/core";

const AddListing = ({ addListing, history }) => {
  const [name, setName] = useState('')
  const [hoursFrom, setHoursFrom] = useState('10:00')
  const [hoursTo, setHoursTo] = useState('10:00')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault();
    addListing({ name, hoursFrom, hoursTo, address, description })
    history.push('/')
  }

  return (
    <>
      <Container style={{ margin: '100px 80px 0', display: 'flex', flexDirection: 'column', maxWidth: '600px', alignItems: 'center' }}>
        <form onSubmit={e => handleSubmit(e)}>
          <TextField
            id="business name"
            label="Business Name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
            required
            style={{ marginBottom: '25px' }} />
          <TextField
            id="opening time"
            label="Opening Time"
            type="time"
            value={hoursFrom}
            onChange={e => setHoursFrom(e.target.value)}
            inputProps={{ step: '900' }}
            fullWidth
            required
            style={{ marginBottom: '15px' }} />
          <TextField
            id="closing time"
            label="Closing Time"
            type="time"
            value={hoursTo}
            onChange={e => setHoursTo(e.target.value)}
            inputProps={{ step: '900' }}
            fullWidth
            required
            style={{ marginBottom: '15px' }} />
          <TextField
            id="address"
            label="Address"
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            fullWidth
            required
            style={{ marginBottom: '15px' }} />
          <TextField
            id="description"
            label="Description"
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            fullWidth
            required
            multiline
            style={{ marginBottom: '25px' }} />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            style={{ alignSelf: 'flex-start' }}
          >Add Listing</Button>
        </form>
      </Container>
    </>
  )
}

export default AddListing