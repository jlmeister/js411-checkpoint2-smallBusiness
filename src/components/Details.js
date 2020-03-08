import React from 'react';
import { Container, Typography, Button } from "@material-ui/core";

const Details = ({ listings, history, match }) => {
  const id = parseInt(match.params.id)
  const listing = listings.find(entry => entry.id === id)

  return (
    <Container style={{ margin: '100px 80px 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
      <Typography variant='h3' component='h1' >
        {listing.name}
      </Typography>
      <Typography variant='subtitle1' component='p'>
        {listing.address}
      </Typography>
      <Typography variant='subtitle1' component='p'>
        {listing.hoursFrom} - {listing.hoursTo}
      </Typography>
      <Typography variant='body1' component='p' gutterBottom style={{ fontSize: '1.5rem'}}>
        {listing.description}
      </Typography>
      <Button onClick={() => history.goBack()} variant='outlined' color='primary'>Back</Button>
    </Container>
  )
}

export default Details