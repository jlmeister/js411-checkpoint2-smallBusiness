import { combineReducers } from "redux";
import { ADD_LISTING, DELETE_LISTING } from "./constants";

/**
 * Auxiliary function to format time inputs.
 * @TODO maybe find a good home for this outside the reducer. It shouldn't live here.
 * @TODO also need to remove leading zero for hour values less than 10.
 */
const formatHours = (hours) => {
  let formattedHours = '';
  let timeArr = hours.split(':');
  console.log('timeArr ', timeArr)

  if (timeArr[0] < 12) {
    if (timeArr[1] === '00')
      formattedHours = timeArr[0].concat('am')
    else
      formattedHours = hours + 'am'
  }
  else {
    timeArr[0] = parseInt(timeArr[0]) - 12;
    if (timeArr[1] === '00')
      formattedHours = timeArr[0].toString().concat('pm')
    else
      formattedHours = timeArr.join(':').concat('pm');
  }
  console.log('formatted ', formattedHours)
  return formattedHours;
}

const listings = (state = [], action) => {
  switch (action.type) {
    case ADD_LISTING:
      const listing = action.value.listing;
      listing.hoursFrom = formatHours(listing.hoursFrom)
      listing.hoursTo = formatHours(listing.hoursTo)
      listing.id = action.value.id;
      return [...state, listing];
    case DELETE_LISTING:
      return state.filter((listing, index) => index !== action.value );
    default:
      return state;
  }
}

export default combineReducers({ listings })