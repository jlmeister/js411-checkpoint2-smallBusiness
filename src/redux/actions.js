import { ADD_LISTING, DELETE_LISTING } from "./constants";

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