import React from 'react';
import { Box, Table, TableBody, TableHead, TableRow, TableCell, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from 'react-router-dom';
import { checkAuth } from "../auth";

const Listings = ({ listings, deleteListing }, props) => {
  return (
    <Box mx='80px' mt='100px'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Business Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Operating Hours</TableCell>
            <TableCell>Address</TableCell>
            {checkAuth() &&
              <TableCell align='center'>Delete</TableCell>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {listings.map((listing, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell>{listing.name}</TableCell>
                <TableCell>{listing.description}</TableCell>
                <TableCell>{listing.hoursFrom}-{listing.hoursTo}</TableCell>
                <TableCell>{listing.address}</TableCell>
                {checkAuth() &&
                  <TableCell align='center'>
                    <DeleteIcon color='error' onClick={() => deleteListing(idx)} />
                  </TableCell>
                }
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      {checkAuth() &&
        <Box mt='30px'>
          <Button variant='contained' color='primary' component={Link} to='/add'>Add Listing</Button>
        </Box>
      }
    </Box>
  )
}

export default Listings;