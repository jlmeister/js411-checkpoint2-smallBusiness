import { ADD_LISTING, DELETE_LISTING, LOG_IN, LOG_OUT, FETCH_COORDINATES } from "./constants";

export const addListing = (listing) => {
  return {
    type: ADD_LISTING,
    value: listing
  }
}

export const deleteListing = (index) => {
  return {
    type: DELETE_LISTING,
    value: index
  }
}

export const login = (user) => {
  return {
    type: LOG_IN,
    value: user
  }
}

export const logout = () => {
  return {
    type: LOG_OUT,
    value: null
  }
}

export const fetchCoordinates = () => {
  return {
    type: FETCH_COORDINATES,
    value: 'fine 🙄'
  }
}