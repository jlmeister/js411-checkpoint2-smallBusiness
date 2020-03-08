import { ADD_LISTING, DELETE_LISTING } from "./constants";

let previousID = 4;

export const addListing = (listing) => {
  const id = ++previousID;
  return {
    type: ADD_LISTING,
    value: { id, listing }
  }
}

export const deleteListing = (index) => {
  return {
    type: DELETE_LISTING,
    value: index
  }
}